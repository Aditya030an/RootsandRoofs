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
} from "react-icons/fa";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Range } from "react-range";

const RentalProperties = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const tabs = ["Buy", "Rent", "Commercial", "Plot"];
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

  // Extensive dummy property data
  const dummyProperties = [
    {
      id: 1,
      title: "Luxury Villa Paradise",
      location: "Vijay Nagar, Indore",
      price: 8500000,
      type: "Buy",
      bhk: "4 BHK",
      area: 2500,
      verified: true,
      parking: true,
      bathrooms: 3,
      propertyType: "Villa",
    },
    {
      id: 2,
      title: "Modern Sky Apartment",
      location: "AB Road, Indore",
      price: 25000,
      type: "Rent",
      bhk: "2 BHK",
      area: 1200,
      verified: true,
      parking: true,
      bathrooms: 2,
      propertyType: "Apartment",
    },
    {
      id: 3,
      title: "Prime Office Space",
      location: "Sapna Sangeeta, Indore",
      price: 45000,
      type: "Commercial",
      bhk: "Commercial",
      area: 1800,
      verified: false,
      parking: true,
      bathrooms: 2,
      propertyType: "Office",
    },
    {
      id: 4,
      title: "Green Valley Residential Plot",
      location: "Super Corridor, Indore",
      price: 3500000,
      type: "Plot",
      bhk: "Plot",
      area: 2000,
      verified: true,
      parking: false,
      bathrooms: 0,
      propertyType: "Plot",
    },
    {
      id: 5,
      title: "Cozy Studio Apartment",
      location: "Palasia, Indore",
      price: 12000,
      type: "Rent",
      bhk: "1 BHK",
      area: 600,
      verified: true,
      parking: false,
      bathrooms: 1,
      propertyType: "Apartment",
    },
    {
      id: 6,
      title: "Royal Penthouse Suite",
      location: "South Tukoganj, Indore",
      price: 15000000,
      type: "Buy",
      bhk: "5+ BHK",
      area: 3500,
      verified: true,
      parking: true,
      bathrooms: 4,
      propertyType: "Apartment",
    },
    {
      id: 7,
      title: "Spacious Family Flat",
      location: "Nipania, Indore",
      price: 18000,
      type: "Rent",
      bhk: "3 BHK",
      area: 1500,
      verified: false,
      parking: true,
      bathrooms: 2,
      propertyType: "Apartment",
    },
    {
      id: 8,
      title: "Premium Retail Shop",
      location: "MG Road, Indore",
      price: 35000,
      type: "Commercial",
      bhk: "Commercial",
      area: 900,
      verified: true,
      parking: false,
      bathrooms: 1,
      propertyType: "Shop",
    },
    {
      id: 9,
      title: "Elegant Duplex House",
      location: "Scheme 54, Indore",
      price: 12000000,
      type: "Buy",
      bhk: "4 BHK",
      area: 2800,
      verified: true,
      parking: true,
      bathrooms: 3,
      propertyType: "House",
    },
    {
      id: 10,
      title: "Budget Friendly Apartment",
      location: "Rau, Indore",
      price: 8000,
      type: "Rent",
      bhk: "1 BHK",
      area: 500,
      verified: false,
      parking: false,
      bathrooms: 1,
      propertyType: "Apartment",
    },
    {
      id: 11,
      title: "Commercial Hub Plot",
      location: "Bypass Road, Indore",
      price: 8000000,
      type: "Plot",
      bhk: "Plot",
      area: 5000,
      verified: true,
      parking: false,
      bathrooms: 0,
      propertyType: "Plot",
    },
    {
      id: 12,
      title: "Premium Treasure Apartment",
      location: "Treasure Island, Indore",
      price: 9500000,
      type: "Buy",
      bhk: "3 BHK",
      area: 1800,
      verified: true,
      parking: true,
      bathrooms: 2,
      propertyType: "Apartment",
    },
    {
      id: 13,
      title: "Sunrise Villa Estate",
      location: "Bengali Square, Indore",
      price: 11000000,
      type: "Buy",
      bhk: "5+ BHK",
      area: 3200,
      verified: true,
      parking: true,
      bathrooms: 4,
      propertyType: "Villa",
    },
    {
      id: 14,
      title: "Modern Office Tower",
      location: "Vijay Nagar, Indore",
      price: 65000,
      type: "Commercial",
      bhk: "Commercial",
      area: 2500,
      verified: true,
      parking: true,
      bathrooms: 3,
      propertyType: "Office",
    },
    {
      id: 15,
      title: "Compact Studio",
      location: "Race Course Road, Indore",
      price: 10000,
      type: "Rent",
      bhk: "1 BHK",
      area: 450,
      verified: true,
      parking: false,
      bathrooms: 1,
      propertyType: "Apartment",
    },
    {
      id: 16,
      title: "Luxury Bungalow",
      location: "New Palasia, Indore",
      price: 18000000,
      type: "Buy",
      bhk: "5+ BHK",
      area: 4000,
      verified: true,
      parking: true,
      bathrooms: 5,
      propertyType: "House",
    },
    {
      id: 17,
      title: "Garden View Apartment",
      location: "Sukhliya, Indore",
      price: 22000,
      type: "Rent",
      bhk: "2 BHK",
      area: 1100,
      verified: true,
      parking: true,
      bathrooms: 2,
      propertyType: "Apartment",
    },
    {
      id: 18,
      title: "Business Plaza Shop",
      location: "Treasure Island, Indore",
      price: 28000,
      type: "Commercial",
      bhk: "Commercial",
      area: 800,
      verified: false,
      parking: true,
      bathrooms: 1,
      propertyType: "Shop",
    },
    {
      id: 19,
      title: "Agricultural Land Plot",
      location: "Mhow, Indore",
      price: 2500000,
      type: "Plot",
      bhk: "Plot",
      area: 10000,
      verified: true,
      parking: false,
      bathrooms: 0,
      propertyType: "Plot",
    },
    {
      id: 20,
      title: "Executive Apartment",
      location: "AB Road, Indore",
      price: 30000,
      type: "Rent",
      bhk: "3 BHK",
      area: 1600,
      verified: true,
      parking: true,
      bathrooms: 2,
      propertyType: "Apartment",
    },
  ];

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
    verified: false,
    parking: false,
    priceRange: [0, 20000000],
    areaRange: [0, 10000],
    bathrooms: [],
  });

  const [activeTab, setActiveTab] = useState("Buy");
  const [leaseOption, setLeaseOption] = useState("Lease");

  const propertyTypes = [
    "Apartment",
    "Villa",
    "Plot",
    "Office",
    "Shop",
    "House",
  ];
  const bathroomOptions = ["1", "2", "3", "4", "5+"];

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
  };

  const currentTheme = themeConfig[activeTab];

  const getBackgroundPattern = (tabName) => {
    const patterns = {
      Buy: "radial-gradient(circle at 85% 20%, rgba(124, 201, 51, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 60%, rgba(124, 201, 51, 0.06) 0%, transparent 40%)",
      Rent: "radial-gradient(circle at 85% 30%, rgba(124, 201, 51, 0.08) 0%, transparent 50%), radial-gradient(circle at 88% 75%, rgba(124, 201, 51, 0.06) 0%, transparent 40%)",
      Commercial:
        "radial-gradient(circle at 85% 15%, rgba(124, 201, 51, 0.08) 0%, transparent 50%), radial-gradient(circle at 92% 50%, rgba(124, 201, 51, 0.06) 0%, transparent 40%)",
      Plot: "radial-gradient(circle at 85% 40%, rgba(124, 201, 51, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(124, 201, 51, 0.06) 0%, transparent 40%)",
    };
    return patterns[tabName] || patterns["Rent"];
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (
        filterType === "bhk" ||
        filterType === "propertyType" ||
        filterType === "bathrooms"
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
      verified: false,
      parking: false,
      priceRange: [0, 20000000],
      areaRange: [0, 10000],
      bathrooms: [],
    });
    setSearchQuery("");
  };

  // Search suggestions
  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const suggestions = dummyProperties
      .filter((p) => p.type === activeTab)
      .filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      )
      .slice(0, 5);

    return suggestions;
  };

  const handleSearchSelect = (property) => {
    setSearchQuery(property.title);
    setShowSuggestions(false);
  };

  // Filter properties
  const filteredProperties = dummyProperties.filter((property) => {
    // 1️⃣ Match tab (Buy, Rent, Commercial, Plot)
    if (property.type !== activeTab) return false;

    // 2️⃣ Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // 3️⃣ BHK filter
    if (filters.bhk.length > 0 && !filters.bhk.includes(property.bhk))
      return false;

    // 4️⃣ Property type filter
    if (
      filters.propertyType.length > 0 &&
      !filters.propertyType.includes(property.propertyType)
    )
      return false;

    // 5️⃣ Verified & parking filters
    if (filters.verified && !property.verified) return false;
    if (filters.parking && !property.parking) return false;

    // 6️⃣ Price range
    if (
      property.price < filters.priceRange[0] ||
      property.price > filters.priceRange[1]
    )
      return false;

    // 7️⃣ Area range
    if (
      property.area < filters.areaRange[0] ||
      property.area > filters.areaRange[1]
    )
      return false;

    // 8️⃣ Bathrooms filter
    if (filters.bathrooms.length > 0) {
      const propBathrooms =
        property.bathrooms >= 5 ? "5+" : property.bathrooms.toString();
      if (!filters.bathrooms.includes(propBathrooms)) return false;
    }

    // ✅ Passed all filters
    return true;
  });

  console.log("filter property", filteredProperties);

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Form submitted successfully!");
    setFormData({ name: "", surname: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white text-slate-900 relative overflow-hidden">
      {/* Header Section */}
      <section className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[70vh] flex flex-col justify-center items-center relative overflow-visible"
          style={{
            background: `linear-gradient(135deg, #1a2a3a 0%, #1f3549 50%, #1a2a3a 100%), ${getBackgroundPattern(
              activeTab
            )}`,
            backgroundAttachment: "fixed",
          }}
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at right center, rgba(124, 201, 51, 0.04) 0%, transparent 80%)`,
            }}
          />

          <motion.div
            key={`shape-${activeTab}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.15, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, ${currentTheme.accent} 0%, transparent 70%)`,
              filter: "blur(80px)",
            }}
          />

          <div className="relative z-10 w-full max-w-6xl flex flex-col justify-center items-center">
            {/* Header */}
            <motion.div
              key={`header-${activeTab}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-3">
                Property For - {activeTab}
              </h2>
              <p className="text-sm sm:text-base font-light text-white/80 tracking-wide max-w-2xl mx-auto">
                {currentTheme.description}
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              layout
              className="max-w-xl md:max-w-3xl w-full mx-auto bg-black/30 backdrop-blur-md border-t border-white/20 rounded-t-xl md:rounded-t-3xl flex items-center justify-between overflow-hidden shadow-lg"
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

            {/* Search Bar */}
            <motion.div
              key={`search-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:max-w-4xl mx-auto relative sm:px-0"
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
                            <p className="text-xs sm:text-sm font-semibold text-[#7cc933]">
                              ₹{property.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Horizontal Filters */}
        <div ref={filterRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`z-40 transition-all duration-300 border-b border-slate-200 shadow-md ${
              isSticky
                ? "fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm"
                : "relative bg-white"
            }`}
          >
            <div className="px-6 md:px-20 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <FaFilter className="text-slate-600" />
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-4 overflow-x-auto scrollbar-hide py-2 sm:py-4 px-2 sm:px-0">
                {/* BHK Filter */}
                {activeTab !== "Commercial" && activeTab !== "Plot" && (
                  <div className="flex-shrink-0 ">
                    <button
                      onClick={() => toggleDropdown("bhk")}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <FaBed className="text-slate-500" />
                      {getSelectedLabel("bhk") || "BHK Type"}
                      {openDropdown === "bhk" ? (
                        <FaChevronUp className="ml-1 text-xs" />
                      ) : (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </button>

                    {openDropdown === "bhk" && (
                      <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[180px]">
                        <p className="text-xs font-semibold text-slate-600 mb-2">
                          Select BHK
                        </p>
                        <div className="flex flex-wrap gap-2">
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
                  </div>
                )}

                {/* Property Type Filter */}
                <div className="flex-shrink-0 ">
                  <button
                    onClick={() => toggleDropdown("propertyType")}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaHome className="text-slate-500" />
                    {getSelectedLabel("propertyType") || "Property Type"}
                    {openDropdown === "propertyType" ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>

                  {openDropdown === "propertyType" && (
                    <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[180px]">
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        Select Property Type
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {propertyTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() =>
                              handleFilterChange("propertyType", type)
                            }
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
                </div>

                {/* Bathrooms Filter */}
                {activeTab !== "Plot" && activeTab !== "Commercial" && (
                  <div className="flex-shrink-0 ">
                    <button
                      onClick={() => toggleDropdown("bathrooms")}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      <FaBath className="text-slate-500" />
                      {getSelectedLabel("bathrooms") || "Bathrooms"}
                      {openDropdown === "bathrooms" ? (
                        <FaChevronUp className="ml-1 text-xs" />
                      ) : (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </button>

                    {openDropdown === "bathrooms" && (
                      <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[180px]">
                        <p className="text-xs font-semibold text-slate-600 mb-2">
                          Select Bathrooms
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {bathroomOptions.map((num) => (
                            <button
                              key={num}
                              onClick={() =>
                                handleFilterChange("bathrooms", num)
                              }
                              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                                filters.bathrooms.includes(num)
                                  ? "bg-[#7cc933] text-white shadow-md"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Amenities */}
                <div className="flex-shrink-0 ">
                  <button
                    onClick={() => toggleDropdown("amenities")}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaBuilding className="text-slate-500" />
                    {filters.verified || filters.parking
                      ? [
                          filters.verified ? "Verified" : null,
                          filters.parking ? "Parking" : null,
                        ]
                          .filter(Boolean)
                          .join(", ")
                      : "Amenities"}
                    {openDropdown === "amenities" ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>

                  {openDropdown === "amenities" && (
                    <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[180px]">
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        Select Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() =>
                            handleFilterChange("verified", !filters.verified)
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1 transition-all ${
                            filters.verified
                              ? "bg-[#7cc933] text-white shadow-md"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <MdVerified /> Verified
                        </button>
                        <button
                          onClick={() =>
                            handleFilterChange("parking", !filters.parking)
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1 transition-all ${
                            filters.parking
                              ? "bg-[#7cc933] text-white shadow-md"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <FaParking /> Parking
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="flex-shrink-0 ">
                  <button
                    onClick={() => toggleDropdown("priceRange")}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    💰 Price Range
                    {`₹${filters.priceRange[0].toLocaleString()} - ₹${filters.priceRange[1].toLocaleString()}`}
                    {openDropdown === "priceRange" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>

                  {openDropdown === "priceRange" && (
                    <div className="absolute z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[280px]">
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        Select Price Range
                      </p>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex justify-between text-xs text-slate-600 mb-2">
                          <span>₹{filters.priceRange[0].toLocaleString()}</span>
                          <span>₹{filters.priceRange[1].toLocaleString()}</span>
                        </div>
                        <Range
                          values={filters.priceRange}
                          step={500}
                          min={0}
                          max={20000000}
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
                                  // Calculating percentage based on min=0 and max=20000000
                                  left: `${
                                    (filters.priceRange[0] / 20000000) * 100
                                  }%`,
                                  right: `${
                                    100 -
                                    (filters.priceRange[1] / 20000000) * 100
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

                {/* Area Range Dropdown */}
                <div className="flex-shrink-0 ">
                  <button
                    onClick={() => toggleDropdown("areaRange")}
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <FaRulerCombined className="text-slate-500" />
                    {`${filters.areaRange[0]} - ${filters.areaRange[1]} sq.ft`}
                    {openDropdown === "areaRange" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>

                  {openDropdown === "areaRange" && (
                    <div className="absolute right-0 xl:left-[70%] z-20 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[280px]">
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        Select Area Range
                      </p>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex justify-between text-xs text-slate-600 mb-2">
                          <span>{filters.areaRange[0]} sq.ft</span>
                          <span>{filters.areaRange[1]} sq.ft</span>
                        </div>
                        <Range
                          values={filters.areaRange}
                          step={100}
                          min={0}
                          max={10000}
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
                                    (filters.areaRange[0] / 10000) * 100
                                  }%`,
                                  right: `${
                                    100 - (filters.areaRange[1] / 10000) * 100
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
            </div>
          </motion.div>
        </div>

        {/* Property Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 md:px-20 py-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              {filteredProperties.length} Properties Found
            </h3>
          </div>

          {filteredProperties.length === 0 ? (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  key={property.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 w-full">
                    <div className="absolute top-3 left-3 flex gap-2">
                      {property.verified && (
                        <span className="bg-[#7cc933] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <MdVerified /> Verified
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {property.bhk}
                      </span>
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
                      <span className="flex items-center gap-1">
                        <FaRulerCombined className="text-slate-500" />
                        {property.area} sq.ft
                      </span>
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
                        <p className="text-xl font-bold text-[#7cc933]">
                          ₹{property.price.toLocaleString()}
                          {property.type === "Rent" && (
                            <span className="text-sm text-slate-600">
                              /month
                            </span>
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
                </motion.div>
              ))}
            </div>
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
          className="text-3xl md:text-6xl font-serif font-semibold mb-10 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
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
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933]"
                required
              />
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
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933]"
                required
              />
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
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933]"
              required
            />
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
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7cc933]"
              required
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-[#7cc933] text-white py-3 rounded-md text-lg font-medium hover:bg-[#6bb028] transition-all duration-200"
          >
            Submit Inquiry
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
        </AnimatePresence>
      </section>
    </div>
  );
};

export default RentalProperties;
