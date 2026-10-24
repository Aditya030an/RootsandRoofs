import React, { useState, useRef, useEffect } from "react";
import {
  FaFilter,
  FaSearch,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaParking,
  FaBuilding,
  FaHome,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaRupeeSign,
  FaUndo,
  FaHandshake,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocationOn,
  MdVerifiedUser,
  MdAssignmentTurnedIn,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Range } from "react-range";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { optimizeImage } from "../utils/image";
import Pagination from "./Pagination";
import ContactFormModal from "./ContactSection";
// bg_img1.png with its baked-in badge strip cropped off — the badges are
// rendered as HTML below so they wrap on small screens instead of being cut.
import heroBg from "./photos/hero_bg.jpg";

// Trust badges shown along the bottom of the hero.
const TRUST_BADGES = [
  {
    icon: <span className="text-3xl md:text-4xl font-extrabold text-red-500 leading-none">0%</span>,
    title: "Brokerage Policy",
    subtitle: "(No Brokerage)",
  },
  {
    icon: <MdAssignmentTurnedIn className="text-3xl md:text-4xl text-sky-300" />,
    title: "RERA Registered Platform",
    subtitle: "(A-GWL-25-2551)",
  },
  {
    icon: <MdVerifiedUser className="text-3xl md:text-4xl text-[#7cc933]" />,
    title: "Verified Listed",
    subtitle: "Properties only",
  },
  {
    icon: <FaHandshake className="text-3xl md:text-4xl text-amber-400" />,
    title: "End-to-End Support",
    subtitle: "(Dedicated team)",
  },
];

// localStorage key that records the visitor already submitted the lead form,
// so the gate is shown only once (persists across reloads / property clicks).
const LEAD_CAPTURED_KEY = "propertyLeadCaptured";

// Build a human-readable price string (values already include the ₹ symbol).
// Returns null when there's no price, so callers can show "Price on Request".
const formatPrice = (price) => {
  if (typeof price === "number")
    return price > 0 ? `₹${price.toLocaleString()}` : null;
  if (Array.isArray(price) && price.length) {
    const parts = price.map((p) => p?.price ?? p?.value).filter(Boolean);
    return parts.length ? parts.join("  •  ") : null;
  }
  return null;
};

const RentalProperties = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // ===== Lead-capture gate (shown once before viewing a property) =====
  const [leadCaptured, setLeadCaptured] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem(LEAD_CAPTURED_KEY) === "true",
  );
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [pendingProperty, setPendingProperty] = useState(null);
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [leadErrors, setLeadErrors] = useState({});
  const [leadLoading, setLeadLoading] = useState(false);

  // Open the property's detail page (new tab, matching the card's old behaviour).
  const openProperty = (property) => {
    window.open(
      `/property/${property.slug || property.id}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Card click: if the form was already submitted, go straight to the property;
  // otherwise stop navigation and open the contact form for this property.
  const handleCardClick = (e, property) => {
    if (leadCaptured) return; // let the <a> navigate normally
    e.preventDefault();
    setPendingProperty(property);
    setLeadData({ name: "", phone: "", email: "", message: "" });
    setLeadErrors({});
    setIsLeadModalOpen(true);
  };

  const validateLead = () => {
    const errs = {};
    if (!leadData.name.trim()) errs.name = "Name is required";
    if (!/^\d{10}$/.test(leadData.phone.replace(/\D/g, "")))
      errs.phone = "Enter a valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email))
      errs.email = "Enter a valid email";
    // if (!leadData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // Submit handler runs synchronously so window.open keeps the user-gesture
  // (avoids the pop-up blocker), then records the lead and opens the property.
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const errs = validateLead();
    if (Object.keys(errs).length > 0) {
      setLeadErrors(errs);
      return;
    }
    setLeadErrors({});
    localStorage.setItem(LEAD_CAPTURED_KEY, "true");
    setLeadCaptured(true);
    setIsLeadModalOpen(false);
    if (pendingProperty) openProperty(pendingProperty);
  };

  const tabs = ["Buy", "Rent", "Commercial", "Plot", "Investment"];

  const filterRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!filterRef.current) return;
      const rect = filterRef.current.getBoundingClientRect();

      // When the top of the filter reaches top of screen
      if (rect.top <= 0) {
        setIsSticky(true);
      }

      // When user scrolls back above original filter position
      if (window.scrollY < filterRef.current.offsetTop - 50) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  // Close any open filter dropdown when clicking outside the filter bar.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSelectedLabel = (key) => {
    if (Array.isArray(filters[key])) {
      return filters[key].length > 0 ? filters[key].join(", ") : null;
    }
    if (typeof filters[key] === "boolean") {
      return filters[key] ? "Yes" : null;
    }
    return null;
  };

  const [filters, setFilters] = useState({
    bhk: [],
    propertyType: [],
    amenities: [],
    verified: false,
    parking: false,
    priceRange: [0, 100000000],
    areaRange: [0, 100000],
  });

  const [activeTab, setActiveTab] = useState("Buy");
  const [leaseOption, setLeaseOption] = useState("Lease");

  // Rent / Investment have no listings yet, so they never hit the API.
  const hasListings = activeTab !== "Rent" && activeTab !== "Investment";

  // ===== Server-driven listing: one page of cards at a time =====
  const PAGE_SIZE = 12;
  const gridRef = useRef(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [result, setResult] = useState({ items: [], total: 0, page: 1, pages: 1, limit: PAGE_SIZE });
  const [facets, setFacets] = useState({ bhkOptions: [], propertyTypes: [], amenityOptions: [] });
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Debounce typing so we don't query on every keystroke.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery.trim()), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // The page resets to 1 whenever the tab / search / filters change.
  const queryKey = JSON.stringify([activeTab, debouncedQuery, filters]);
  const [pageState, setPageState] = useState({ key: "", page: 1 });
  const page = pageState.key === queryKey ? pageState.page : 1;
  const goToPage = (n) => {
    setPageState({ key: queryKey, page: n });
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!hasListings) return;
    const controller = new AbortController();
    setListLoading(true);
    setListError("");
    api
      .listProperties(
        {
          tab: activeTab,
          page,
          limit: PAGE_SIZE,
          q: debouncedQuery,
          bhk: filters.bhk,
          propertyType: filters.propertyType,
          amenities: filters.amenities,
          verified: filters.verified ? "true" : "",
          parking: filters.parking ? "true" : "",
          minPrice: filters.priceRange[0],
          maxPrice: filters.priceRange[1],
          minArea: filters.areaRange[0],
          maxArea: filters.areaRange[1],
        },
        controller.signal,
      )
      .then((data) => {
        setResult(data);
        setFacets(data.facets);
        setListLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setListError("Couldn't load properties. Please try again.");
        setListLoading(false);
      });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey, page, hasListings]);

  const bhkOptions = facets.bhkOptions;
  const propertyTypes = facets.propertyTypes;
  const amenityOptions = facets.amenityOptions.map((label) => ({ label }));
  const filteredProperties = result.items;

  const themeConfig = {
    Buy: {
      gradient: "from-[#1a2a3a] via-[#1f3549] to-[#1a2a3a]",
      accent: "#7cc933",
      textColor: "#ffffff",
      bgPattern: "Buy",
      description: "Find Your Perfect Home",
    },
    Rent: {
      gradient: "from-[#1a2a3a] via-[#1f3549] to-[#1a2a3a]",
      accent: "#7cc933",
      textColor: "#ffffff",
      bgPattern: "Rent",
      description: "Your Space, Your Terms",
    },
    Commercial: {
      gradient: "from-[#1a2a3a] via-[#1f3549] to-[#1a2a3a]",
      accent: "#7cc933",
      textColor: "#ffffff",
      bgPattern: "Commercial",
      description: "Business Opportunities Await",
    },
    Plot: {
      gradient: "from-[#1a2a3a] via-[#1f3549] to-[#1a2a3a]",
      accent: "#7cc933",
      textColor: "#ffffff",
      bgPattern: "Plot",
      description: "Land for Your Dreams",
    },
    Investment: {
      gradient: "from-[#1a2a3a] via-[#1f3549] to-[#1a2a3a]",
      accent: "#7cc933",
      textColor: "#ffffff",
      bgPattern: "Investment",
      description: "Grow Your Wealth with Smart Real Estate",
    },
  };

  const currentTheme = themeConfig[activeTab];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (
        filterType === "bhk" ||
        filterType === "propertyType" ||
        filterType === "amenities"
      ) {
        const currentArray = prev[filterType];
        const newArray = currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value];
        return { ...prev, [filterType]: newArray };
      }
      return { ...prev, [filterType]: value };
    });
  };

  const clearFilters = () => {
    setFilters({
      bhk: [],
      propertyType: [],
      amenities: [],
      verified: false,
      parking: false,
      priceRange: [0, 100000000],
      areaRange: [0, 100000],
    });
    setSearchQuery("");
  };

  // Reset just the price range back to its full default span.
  const resetPriceRange = () =>
    setFilters((prev) => ({ ...prev, priceRange: [0, 100000000] }));

  // Reset just the area range back to its full default span.
  const resetAreaRange = () =>
    setFilters((prev) => ({ ...prev, areaRange: [0, 100000] }));

  // Search suggestions (top 5 matches from the API, debounced with the query).
  useEffect(() => {
    if (!hasListings || !debouncedQuery) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    api
      .listProperties({ tab: activeTab, q: debouncedQuery, limit: 5 }, controller.signal)
      .then((data) => setSuggestions(data.items))
      .catch(() => {});
    return () => controller.abort();
  }, [activeTab, debouncedQuery, hasListings]);
  const getSearchSuggestions = () => (searchQuery.trim() ? suggestions : []);

  const handleSearchSelect = (property) => {
    setSearchQuery(property.title);
    setShowSuggestions(false);
  };

  // Count of applied filters — shown as a badge on the mobile "Filters" toggle
  // so users know filters are active even when the controls are collapsed.
  const DEFAULT_PRICE = [0, 100000000];
  const DEFAULT_AREA = [0, 100000];
  const activeFilterCount =
    filters.bhk.length +
    filters.propertyType.length +
    filters.amenities.length +
    (filters.verified ? 1 : 0) +
    (filters.parking ? 1 : 0) +
    (filters.priceRange[0] !== DEFAULT_PRICE[0] ||
    filters.priceRange[1] !== DEFAULT_PRICE[1]
      ? 1
      : 0) +
    (filters.areaRange[0] !== DEFAULT_AREA[0] ||
    filters.areaRange[1] !== DEFAULT_AREA[1]
      ? 1
      : 0);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear this field's error as soon as the user edits it.
    setFormErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  // Validate the Contact Us form. Mirrors validateLead's shape: returns a
  // { field: message } object that's empty when everything passes.
  const validateContact = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.surname.trim()) errs.surname = "Surname is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateContact();
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    setSubmitError("");
    setFormLoading(true);

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          message: formData.message,
        }),
      });

      setSubmitted(true);
      setFormData({ name: "", surname: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again.");
      setTimeout(() => setSubmitError(""), 4000);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 relative overflow-hidden">
      {/* Header Section */}
      <section className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          // Extra 6rem of height + top padding = the space the (now overlaid)
          // navbar used to take, so the image runs behind it. min-h (not h)
          // lets the section grow when the badges wrap to two rows on mobile.
          className="w-full min-h-[calc(70vh+6rem)] pt-24 pb-6 flex flex-col items-center relative overflow-visible"
        >
          {/* Background photo in its own clipped layer so the blur and dimming
              don't affect the heading/search, and the section stays
              overflow-visible for the suggestions dropdown. */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 scale-105"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(0.5px)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-40 flex-1 w-full max-w-6xl flex flex-col justify-center items-center">
            {/* Header */}
            <motion.div
              key={`header-${activeTab}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white drop-shadow-lg mb-3">
                Property For - {activeTab}
              </h2>
              <p className="text-sm sm:text-base font-light text-white/80 tracking-wide max-w-2xl mx-auto">
                {currentTheme.description}
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              layout
              className="max-w-xl md:max-w-3xl w-full mx-auto border-t border-white/20 rounded-t-xl md:rounded-t-3xl flex items-center justify-between overflow-hidden shadow-lg"
            >
              {tabs.map((tab, idx) => (
                <div
                  key={tab + idx}
                  onClick={() => setActiveTab(tab)}
                  className="relative w-full text-center cursor-pointer py-3 sm:py-4 text-xs sm:text-sm md:text-lg font-medium text-white/70 hover:text-white/90 rounded-t-xl md:rounded-t-3xl transition-all duration-300"
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-t-xl md:rounded-t-3xl"
                      style={{
                        background: currentTheme.accent,
                        opacity: 0.9,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 font-medium ${
                      activeTab === tab
                        ? "text-black font-semibold"
                        : "text-white/80"
                    }`}
                  >
                    {tab}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Search Bar — no key/mount animation so switching tabs doesn't
                re-trigger the entry animation. The suggestions dropdown below
                keeps its own animation when results appear. */}
            <div
              className="w-full md:max-w-4xl mx-auto relative sm:px-0 "
              ref={searchRef}
            >
              <div className="bg-white/95  w-full backdrop-blur-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-b-xl md:rounded-3xl shadow-2xl px-5 py-3">
                {/* Location */}
                <div className="flex gap-1 w-full">
                  <div className="text-gray-700 font-semibold w-1/5 text-center truncate text-sm md:text-base">
                    Indore
                  </div>

                  <div className="block w-[2px] h-6 bg-gray-300"></div>

                  {/* Search Input */}
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      placeholder="Search by property name or location..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      className="w-full border-none outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base bg-transparent"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setShowSuggestions(false);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                </div>

                {/* Lease/Rent Toggle (Commercial only) */}
                {activeTab === "Commercial" && (
                  <div className="flex w-full sm:w-[40%] bg-gray-100 rounded-full border border-gray-300 overflow-hidden">
                    {["Lease", "Rent"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setLeaseOption(option)}
                        type="button"
                        className={`px-3 py-2 text-xs sm:text-sm w-full md:text-base font-medium transition-all duration-300 ${
                          leaseOption === option
                            ? "bg-[#7cc933] text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Search Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block p-3  rounded-full cursor-pointer transition-all duration-300 shadow-md mx-auto sm:mx-0"
                  style={{ backgroundColor: currentTheme.accent }}
                >
                  <FaSearch className="text-white text-lg" />
                </motion.div>
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions &&
                  searchQuery &&
                  getSearchSuggestions().length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-200 max-h-64 overflow-y-auto"
                    >
                      {getSearchSuggestions().map((property) => (
                        <div
                          key={property.id}
                          onClick={() => handleSearchSelect(property)}
                          className="px-5 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-800 text-sm sm:text-base">
                                {property.title}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                                <MdLocationOn className="text-xs" />
                                {property.location}
                              </p>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-[#7cc933] text-right shrink-0 max-w-[45%]">
                              {formatPrice(property.price) || "On Request"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </div>

          {/* Trust badges — 2×2 on mobile, one row from md up. z-30 keeps the
              search suggestions dropdown (z-40 container) above them. */}
          <div className="relative z-30 w-full max-w-7xl mt-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left"
              >
                <div className="shrink-0 drop-shadow-lg">{badge.icon}</div>
                <div className="font-serif text-white drop-shadow-lg">
                  <p className="text-sm md:text-base lg:text-lg font-bold leading-tight">
                    {badge.title}
                  </p>
                  <p className="text-xs md:text-sm lg:text-base font-semibold text-white/85 leading-tight">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Filters */}
        <div ref={filterRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`z-10  transition-all duration-300 border-b border-slate-200 shadow-md ${
              isSticky
                ? "fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm"
                : "relative bg-white"
            }`}
          >
            <div className="px-6 md:px-6 lg:px-8 xl:px-20 py-4 " >
              <div className="flex items-center justify-between mb-4 ">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <FaFilter className="text-slate-600" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#7cc933] text-white text-xs font-semibold">
                      {activeFilterCount}
                    </span>
                  )}
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="relative">
                {/* Filter controls: a single horizontally-scrollable strip on
                    mobile (one swipeable row → saves vertical space) that wraps
                    normally on larger screens. The dropdown panels are rendered
                    OUTSIDE this strip so its overflow never clips them. */}
                <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar gap-3 sm:gap-4 py-2 sm:py-4">
                  {/* BHK */}
                  {activeTab !== "Commercial" &&
                    activeTab !== "Plot" &&
                    activeTab !== "Investment" && (
                    <button
                      onClick={() => toggleDropdown("bhk")}
                      className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <FaBed className="text-slate-500" />
                      {getSelectedLabel("bhk") || "Configuration"}
                      {openDropdown === "bhk" ? (
                        <FaChevronUp className="ml-1 text-xs" />
                      ) : (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </button>
                  )}

                  {/* Property Type */}
                  <button
                    onClick={() => toggleDropdown("propertyType")}
                    className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaHome className="text-slate-500" />
                    {getSelectedLabel("propertyType") || "Property Type"}
                    {openDropdown === "propertyType" ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>

                  {/* Amenities */}
                  <button
                    onClick={() => toggleDropdown("amenities")}
                    className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaBuilding className="text-slate-500" />
                    {filters.amenities.length > 0
                      ? `${filters.amenities.length} Amenities`
                      : "Amenities"}
                    {openDropdown === "amenities" ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>

                  {/* Price Range */}
                  <button
                    onClick={() => toggleDropdown("priceRange")}
                    className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaRupeeSign className="text-slate-500" />
                    Price Range
                    {openDropdown === "priceRange" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>

                  {/* Area Range */}
                  <button
                    onClick={() => toggleDropdown("areaRange")}
                    className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaRulerCombined className="text-slate-500" /> Area Range
                    {openDropdown === "areaRange" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                {/* ── Dropdown panels (outside the scroll strip → never clipped) ── */}
                {openDropdown === "bhk" && (
                  <div className="absolute left-0 top-full z-30 mt-1 bg-white shadow-lg rounded-lg p-3 w-[min(600px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] border border-slate-100">
                    <p className="text-xs font-semibold text-slate-600 mb-2">
                      Select BHK
                    </p>
                    <div className="w-full flex flex-row flex-wrap gap-2">
                      {bhkOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleFilterChange("bhk", option)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            filters.bhk.includes(option)
                              ? "bg-[#7cc933] text-white shadow-md"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {openDropdown === "propertyType" && (
                  <div className="absolute left-0 top-full z-30 mt-1 bg-white shadow-lg rounded-lg p-3 w-[min(600px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] border border-slate-100">
                    <p className="text-xs font-semibold text-slate-600 mb-2">
                      Select Property Type
                    </p>
                    <div className="w-full flex flex-row flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleFilterChange("propertyType", type)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            filters.propertyType.includes(type)
                              ? "bg-[#7cc933] text-white shadow-md"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {openDropdown === "amenities" && (
                  <div className="absolute left-0 top-full z-30 mt-1 bg-white shadow-lg rounded-lg p-3 w-[min(600px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] border border-slate-100">
                    <p className="text-xs font-semibold text-slate-600 mb-2">
                      Select Amenities
                    </p>
                    <div className="w-full flex flex-row flex-wrap gap-2">
                      {amenityOptions.length === 0 && (
                        <p className="text-xs text-slate-400">
                          No amenities available
                        </p>
                      )}
                      {amenityOptions.map((amenity) => (
                        <button
                          key={amenity.label}
                          onClick={() =>
                            handleFilterChange("amenities", amenity.label)
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            filters.amenities.includes(amenity.label)
                              ? "bg-[#7cc933] text-white shadow-md"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {amenity.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {openDropdown === "priceRange" && (
                  <div className="absolute left-0 sm:left-auto sm:right-0 top-full z-30 mt-1 bg-white shadow-lg rounded-lg p-3 w-[280px] max-w-[calc(100vw-2.5rem)] border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-slate-600">
                        Select Price Range
                      </p>
                      <button
                        type="button"
                        onClick={resetPriceRange}
                        className="p-1.5 text-slate-500 rounded-md hover:bg-slate-100 hover:text-slate-700 transition"
                        title="Reset"
                        aria-label="Reset price range"
                      >
                        <FaUndo className="text-xs" />
                      </button>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="flex justify-between text-xs text-slate-600 mb-2">
                        <span>₹{filters.priceRange[0].toLocaleString()}</span>
                        <span>₹{filters.priceRange[1].toLocaleString()}</span>
                      </div>
                      <Range
                        values={filters.priceRange}
                        step={500}
                        min={0}
                        max={100000000}
                        onChange={(values) =>
                          handleFilterChange("priceRange", values)
                        }
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            className="w-full h-2 bg-slate-200 rounded-full relative"
                          >
                            <div
                              className="absolute h-2 bg-[#7cc933] rounded-full"
                              style={{
                                left: `${
                                  (filters.priceRange[0] / 100000000) * 100
                                }%`,
                                right: `${
                                  100 -
                                  (filters.priceRange[1] / 100000000) * 100
                                }%`,
                              }}
                            />
                            {children}
                          </div>
                        )}
                        renderThumb={({ props }) => (
                          <div
                            {...props}
                            className="w-4 h-4 bg-[#7cc933] rounded-full shadow-lg cursor-pointer"
                          />
                        )}
                      />
                    </div>
                  </div>
                )}

                {openDropdown === "areaRange" && (
                  <div className="absolute left-0 sm:left-auto sm:right-0 top-full z-30 mt-1 bg-white shadow-lg rounded-lg p-3 w-[280px] max-w-[calc(100vw-2.5rem)] border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-slate-600">
                        Select Area Range
                      </p>
                      <button
                        type="button"
                        onClick={resetAreaRange}
                        className="p-1.5 text-slate-500 rounded-md hover:bg-slate-100 hover:text-slate-700 transition"
                        title="Reset"
                        aria-label="Reset area range"
                      >
                        <FaUndo className="text-xs" />
                      </button>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="flex justify-between text-xs text-slate-600 mb-2">
                        <span>{filters.areaRange[0]} sq.ft</span>
                        <span>{filters.areaRange[1]} sq.ft</span>
                      </div>
                      <Range
                        values={filters.areaRange}
                        step={500}
                        min={0}
                        max={100000}
                        onChange={(values) =>
                          handleFilterChange("areaRange", values)
                        }
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            className="w-full h-2 bg-slate-200 rounded-full relative"
                          >
                            <div
                              className="absolute h-2 bg-[#7cc933] rounded-full"
                              style={{
                                left: `${
                                  (filters.areaRange[0] / 100000) * 100
                                }%`,
                                right: `${
                                  100 - (filters.areaRange[1] / 100000) * 100
                                }%`,
                              }}
                            />
                            {children}
                          </div>
                        )}
                        renderThumb={({ props }) => (
                          <div
                            {...props}
                            className="w-4 h-4 bg-[#7cc933] rounded-full shadow-lg cursor-pointer"
                          />
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Property Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`px-6 md:px-8 lg:px-8 xl:px-20 ${isSticky ? "py-[340px] sm:py-[300px] md:py-48" : "py-10"}`}
        >
          {activeTab === "Rent" || activeTab === "Investment" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 sm:py-28"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7cc933]/10">
                <FaHome className="text-3xl text-[#7cc933]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                {activeTab === "Investment"
                  ? "Investment Opportunities Coming Soon"
                  : "Rental Properties Coming Soon"}
              </h3>
              <p className="text-base text-slate-600 max-w-xl mx-auto">
                {activeTab === "Investment"
                  ? "We're curating the best investment opportunities in Indore. Check back shortly — exciting options are on the way!"
                  : "We're working on bringing you the best rental listings in Indore. Check back shortly — exciting options are on the way!"}
              </p>
            </motion.div>
          ) : (
            <>
              {/* <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-800">
                  {filteredProperties.length} Properties Found
                </h3>
              </div> */}

              <div ref={gridRef} className="scroll-mt-40" />

              {listError ? (
                <div className="text-center py-20">
                  <p className="text-lg text-red-600 mb-4">{listError}</p>
                  <button
                    onClick={() => setPageState({ key: queryKey, page })}
                    className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
                  >
                    Retry
                  </button>
                </div>
              ) : listLoading && filteredProperties.length === 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden animate-pulse">
                      <div className="h-48 bg-slate-100" />
                      <div className="p-5 space-y-3">
                        <div className="h-5 w-2/3 bg-slate-100 rounded" />
                        <div className="h-4 w-1/2 bg-slate-100 rounded" />
                        <div className="h-10 bg-slate-100 rounded mt-6" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-slate-600 mb-4">
                No properties match your filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#7cc933] text-white rounded-lg font-medium hover:bg-[#6bb028] transition"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity ${listLoading ? "opacity-50" : ""}`}>
              {filteredProperties.map((property, i) => (
                <motion.a
                  href={`/property/${property?.slug || property?.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCardClick(e, property)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // Stagger only across a row (i % 3) so the delay never
                  // accumulates down the list; margin triggers the animation
                  // slightly before the card reaches the viewport edge.
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  key={property.id}
                  className="bg-white cursor-pointer border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                    <img
                      src={optimizeImage(property?.images?.[0], 600)}
                      alt={property.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />

                    {/* Fallback if no image */}
                    {!property?.images?.[0] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm text-gray-500">
                        No Image
                      </div>
                    )}

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {property.verified && (
                        <span className="bg-[#7cc933] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <MdVerified /> Verified
                        </span>
                      )}

                      {property.bhk && (
                        <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {property.bhk}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                      <MdLocationOn className="text-[#7cc933]" />
                      {property.location}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                      {property.area && (
                        <span className="flex items-center gap-1">
                          <FaRulerCombined className="text-slate-500" />
                          {property.area}
                        </span>
                      )}
                      {property.propertyType && (
                        <span className="flex items-center gap-1">
                          <FaHome className="text-slate-500" />
                          {property.propertyType}
                        </span>
                      )}
                      {property.bathrooms > 0 && (
                        <span className="flex items-center gap-1">
                          <FaBath className="text-slate-500" />
                          {property.bathrooms}
                        </span>
                      )}
                      {property.parking && (
                        <span className="flex items-center gap-1">
                          <FaParking className="text-slate-500" />
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-xs text-slate-500">Price</p>
                        <p className="text-lg font-bold text-[#7cc933] break-words">
                          {formatPrice(property.price) ? (
                            <>
                              {formatPrice(property.price)}
                              {property.type === "Rent" && (
                                <span className="text-sm text-slate-600">
                                  /month
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="text-base">Price on Request</span>
                          )}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <Pagination
              page={result.page}
              pages={result.pages}
              total={result.total}
              limit={result.limit}
              onChange={goToPage}
            />
            </>
              )}
            </>
          )}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-sans font-semibold mb-10 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white border rounded-3xl shadow-xl max-w-3xl mx-auto p-10 md:p-14 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933] ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                placeholder="Your surname"
                value={formData.surname}
                onChange={handleChange}
                className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933] ${
                  formErrors.surname ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.surname && (
                <p className="mt-1 text-sm text-red-500">{formErrors.surname}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933] ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933] ${
                formErrors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: formLoading ? 1 : 0.95 }}
            whileHover={{ scale: formLoading ? 1 : 1.02 }}
            type="submit"
            disabled={formLoading}
            className="w-full bg-[#7cc933] text-white py-3 rounded-md text-lg font-medium hover:bg-[#6bb028] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formLoading ? "Submitting..." : "Submit Inquiry"}
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm md:text-base"
            >
              🎉 Form submitted successfully!
            </motion.div>
          )}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm md:text-base"
            >
              ⚠️ {submitError}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Lead-capture gate shown on first property click */}
      <ContactFormModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        formData={leadData}
        setFormData={setLeadData}
        handleSubmit={handleLeadSubmit}
        errors={leadErrors}
        loading={leadLoading}
      />
    </div>
  );
};

export default RentalProperties;
