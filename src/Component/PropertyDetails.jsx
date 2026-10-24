import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
import { optimizeImage } from "../utils/image";
// Local data is no longer rendered: properties come from the backend API.
// import propertyList from "../utils/propertyList";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdSwapHoriz } from "react-icons/md";
import {
  Train,
  Bus,
  Plane,
  School,
  Hospital,
  ShoppingBag,
  MapPin,
  Building2,
  Eye,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  X,
  ChevronDown,
  Star,
  RotateCcw,
} from "lucide-react";
import gsap from "gsap";
import AreaConverter from "./AreaConverter";

// ✅ Unit conversion ratios
const unitConversions = {
  "Square Meter": 1,
  "Square Feet": 0.092903,
  Guntha: 101.17,
  "Square Inch": 0.00064516,
  Hectare: 10000,
  Ground: 203.0,
  "Square Mile": 2.59e6,
  Bigha: 1337.8,
  "Square Karam": 9.0,
  "Square Kilometer": 1e6,
  Murabba: 2500,
  Decimal: 40.47,
  Lessa: 16.18,
  Cent: 40.47,
  "Biswa Kacha": 63.63,
  Marla: 25.29,
  Chatak: 4.57,
  Dhur: 16.93,
  Biswa: 125.0,
  Acre: 4046.86,
  "Square Yard": 0.836127,
  Kanal: 505.857,
  Kila: 10000,
  Gaj: 0.836127,
  Pura: 101.17,
  Katha: 126.0,
  "Square Centimeter": 0.0001,
};

// ✅ All states for searchable dropdown
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// 🔍 Searchable dropdown for states
const SearchableStateInput = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  useEffect(() => setInputValue(value), [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search or select state..."
          className="w-full p-3 pr-10 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <FiChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-64 overflow-y-auto animate-fadeIn"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setInputValue(option);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer transition ${
                  option === value
                    ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold"
                    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700"
                }`}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              <FiSearch className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              No states found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// 📦 Simple dropdown component
const CustomDropdown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 bg-gray-50 rounded-lg flex items-center justify-between text-gray-700 hover:bg-gray-100 transition shadow-sm"
      >
        <span className="font-medium">{value}</span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-40 overflow-y-auto animate-fadeIn">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer transition ${
                  option === value
                    ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold border-l-4 border-gray-400"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const PropertyDetailsView = ({ property, similarProperties }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  // Navigate to another property re-using the current route's last segment.
  const goToProperty = (newId) =>
    navigate(location.pathname.replace(/[^/]+$/, String(newId)));

  // Similar Projects are ranked on the server (same builder first, then type,
  // city and configuration) and passed in as `similarProperties`.
  const norm = (s) => (s || "").trim().toLowerCase();
  const currentDeveloper = norm(property?.developer?.name);

  const [mainImage, setMainImage] = useState(property?.images[0]);
  const [activeTab, setActiveTab] = useState("overview");

  const [showGallery, setShowGallery] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);

  // EMI States
  const [loan, setLoan] = useState(1000000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showAmenityPopup, setShowAmenityPopup] = useState(false);
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);

  const [showOverviewPopup, setShowOverviewPopup] = useState(false);
  const [activeOverviewIndex, setActiveOverviewIndex] = useState(0);

  const [activeFloorPlan, setActiveFloorPlan] = useState(0);

  const [openHighlight, setOpenHighlight] = useState(null);

  const specificationRef2 = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  const overviewRef = useRef();
  const floorPlaneRef = useRef();
  const amenitiesRef = useRef();
  const paymentRef = useRef();
  const specificationRef = useRef();
  const projectDataRef = useRef();
  const locationRef = useRef();
  const connectivityRef = useRef();
  const emiRef = useRef();
  // const ratingRef = useRef();
  // const aboutDeveloperRef = useRef();
  // const similarProjectRef = useRef();
  const overviewScrollRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const [showAllConnectivity, setShowAllConnectivity] = useState(false);

  const connectivityItems = property?.sections?.connectivity || [];
  const visibleConnectivity = showAllConnectivity
    ? connectivityItems
    : connectivityItems.slice(0, 5);

  const amenities = property?.sections?.amenities || [];

  // Normalize the price list. `price` is now an array of objects whose value
  // lives in either `price` or `value` (with an optional `type`/`label`).
  const priceList = (Array.isArray(property?.price) ? property.price : [])
    .map((p) => ({
      type: p?.type || p?.label || "",
      value: p?.price ?? p?.value ?? "",
    }))
    .filter((p) => p.value !== "");

  // Whether the property has a map embed / map image — used to hide empty
  // location & connectivity-map blocks instead of rendering blank boxes.
  const hasLocationMap = Boolean(property?.map?.locationLink);
  const hasMapImage = Boolean(property?.map?.image);

  // Open the global contact popup for a price enquiry, attaching this property's
  // title + link so the team knows exactly which property the lead is about.
  const requestPrice = () => {
    const link = `${window.location.origin}/property/${property?.slug || property?.id}`;
    window.dispatchEvent(
      new CustomEvent("open-contact-popup", {
        detail: { title: property?.title, link },
      }),
    );
  };

  // "See distance from your Location": scroll to the Location section
  // (both desktop and mobile).
  const handleSeeDistance = () => {
    scrollToSection(locationRef, "location");
  };

  // Build a normalized floor-plan list supporting either a new `images` array
  // (or top-level `floorPlans` array) or the legacy single `floorPlan.image`.
  const floorPlans = (
    property?.floorPlan?.images?.length
      ? property.floorPlan.images
      : property?.floorPlans?.length
        ? property.floorPlans
        : property?.floorPlan?.image
          ? [property.floorPlan.image]
          : []
  ).filter(Boolean);

  const nextFloorPlan = () =>
    setActiveFloorPlan((prev) =>
      prev === floorPlans.length - 1 ? 0 : prev + 1,
    );
  const prevFloorPlan = () =>
    setActiveFloorPlan((prev) =>
      prev === 0 ? floorPlans.length - 1 : prev - 1,
    );

  // ===== "Call For Property" lead form (right panel) =====
  const [callData, setCallData] = useState({ name: "", phone: "", email: "" });
  const [callErrors, setCallErrors] = useState({});
  const [callLoading, setCallLoading] = useState(false);

  const validateCallForm = () => {
    const temp = {};
    if (!callData.name.trim()) temp.name = "Name is required";
    if (!callData.phone.trim()) temp.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(callData.phone))
      temp.phone = "Phone must be 10 digits";
    if (!callData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(callData.email))
      temp.email = "Invalid email format";
    setCallErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Mirrors GlobalContactPopup: POST the lead to the Google Sheet endpoint.
  const handleCallSubmit = async (e) => {
    e.preventDefault();
    if (!validateCallForm()) return;
    setCallLoading(true);
    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: callData.name,
          email: callData.email,
          phone: callData.phone,
          message: `Call request for property: ${property?.title} (ID ${property?.id})`,
        }),
      });
      setCallData({ name: "", phone: "", email: "" });
      alert("Thanks! Our team will contact you shortly.");
    } catch (err) {
      alert("Error occurred. Please try again.");
      console.log(err);
    } finally {
      setCallLoading(false);
    }
  };

  const [state, setState] = useState("Madhya Pradesh");
  const [fromUnit, setFromUnit] = useState("Square Meter");
  const [toUnit, setToUnit] = useState("Square Feet");
  const [value, setValue] = useState("1");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (value === "" || isNaN(value)) return setResult("");
    const valueInMeters = value * (unitConversions[fromUnit] || 1);
    const converted = valueInMeters / (unitConversions[toUnit] || 1);
    setResult(converted);
  }, [value, fromUnit, toUnit]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Reset the area converter back to its default value/units.
  const handleReset = () => {
    setValue("1");
    setFromUnit("Square Meter");
    setToUnit("Square Feet");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    // Reset the hero image when navigating between properties (same component).
    setMainImage(property?.images?.[0]);
    setActiveFloorPlan(0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    calculateEMI();
  }, [loan, rate, tenure]);

  // Scroll-spy: highlight the tab whose section is currently in view. Uses
  // getBoundingClientRect (viewport-relative) so it works regardless of how the
  // sections are nested inside positioned/flex containers.
  useEffect(() => {
    const sections = [
      { ref: overviewRef, key: "overview" },
      { ref: floorPlaneRef, key: "floor" },
      { ref: amenitiesRef, key: "amenities" },
      { ref: specificationRef, key: "specs" },
      { ref: projectDataRef, key: "proData" },
      { ref: locationRef, key: "location" },
      { ref: connectivityRef, key: "connectivity" },
      { ref: paymentRef, key: "payment" },
      { ref: emiRef, key: "emi" },
    ];

    const handleScroll = () => {
      // A section is "active" once its top passes this line below the sticky bar.
      const offset = 160;
      let current = sections[0]?.key;

      for (const sec of sections) {
        const el = sec.ref.current;
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = sec.key; // last section whose top has crossed the line
        }
      }

      // Near the page bottom, force-select the last section (its top may never
      // cross the line if it's short).
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].key;
      }

      setActiveTab((prev) => (prev === current ? prev : current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHighlight = (index) => {
    setOpenHighlight(openHighlight === index ? null : index);
  };

  const openAmenity = (index) => {
    setActiveAmenityIndex(index);
    setShowAmenityPopup(true);
  };

  const nextAmenity = () => {
    setActiveAmenityIndex((prev) =>
      prev === amenities.length - 1 ? 0 : prev + 1,
    );
  };

  const prevAmenity = () => {
    setActiveAmenityIndex((prev) =>
      prev === 0 ? amenities.length - 1 : prev - 1,
    );
  };

  const overviewImages = property?.images || [];

  const openOverview = (index) => {
    setActiveOverviewIndex(index);
    setShowOverviewPopup(true);
  };

  const nextOverview = () => {
    setActiveOverviewIndex((prev) =>
      prev === overviewImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevOverview = () => {
    setActiveOverviewIndex((prev) =>
      prev === 0 ? overviewImages.length - 1 : prev - 1,
    );
  };

  const calculateEMI = () => {
    const r = rate / 12 / 100;
    const n = tenure * 12;

    const emiValue = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setEmi(Math.round(emiValue));
  };

  const scrollLeft = () => {
    overviewScrollRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    overviewScrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const scrollToSection = (ref, tab) => {
    setActiveTab(tab);
    const el = ref.current;
    if (!el) return;
    // Offset for the sticky tab bar so the section heading isn't hidden under it.
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const getConnectivityIcon = (text) => {
    const t = text.toLowerCase();

    if (t.includes("metro") || t.includes("rail")) return <Train size={22} />;

    if (t.includes("bus")) return <Bus size={22} />;

    if (t.includes("airport")) return <Plane size={22} />;

    if (t.includes("school")) return <School size={22} />;

    if (t.includes("hospital")) return <Hospital size={22} />;

    if (t.includes("mall") || t.includes("market"))
      return <ShoppingBag size={22} />;

    if (t.includes("road")) return <MapPin size={22} />;

    return <Building2 size={22} />;
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = specificationRef.current;
    const glow1 = glow1Ref.current;
    const glow2 = glow2Ref.current;

    const moveGlow = (e) => {
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Smooth GSAP movement
      gsap.to(glow1, {
        x: x - 100,
        y: y - 100,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(glow2, {
        x: x - 50,
        y: y - 50,
        duration: 1,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", moveGlow);

    return () => {
      container.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  if (!property) return <div className="p-10">Property not found</div>;
  return (
    <div className="">
      {/* ================= HERO SECTION ================= */}
      <div className="mt-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="px-4 sm:px-6 md:px-10 py-4 text-sm sm:text-base"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-500">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-[#1e3447] transition-colors"
              >
                Home
              </button>
            </li>
            <li aria-hidden="true" className="text-gray-400">
              /
            </li>
            <li>
              <button
                onClick={() => navigate("/Properties")}
                className="hover:text-[#1e3447] transition-colors"
              >
                Properties
              </button>
            </li>
            {property?.propertyType && (
              <>
                <li aria-hidden="true" className="text-gray-400">
                  /
                </li>
                <li>
                  <button
                    onClick={() => navigate("/Properties")}
                    className="hover:text-[#1e3447] transition-colors"
                  >
                    {property.propertyType}
                  </button>
                </li>
              </>
            )}
            <li aria-hidden="true" className="text-gray-400">
              /
            </li>
            <li
              aria-current="page"
              className="font-medium text-[#1e3447] break-words"
            >
              {property.title}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 mb-8 gap-6 lg:gap-10 items-center">
          {/* LEFT LOGO IMAGE */}
          <div className="flex w-full lg:w-1/2 items-center justify-center">
            <img
              src={optimizeImage(property?.images?.[0], 1000)}
              fetchPriority="high"
              decoding="async"
              alt={property?.title}
              className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-contain rounded bg-slate-50 p-4"
            />
          </div>

          {/* PROPERTY INFO */}
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-800 leading-7 md:leading-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 font-serif">
              Property Name - {property?.title}
            </h2>
            <p>Details - {property?.description}</p>

            <div className="mt-4 text-gray-700">
              <strong>*Pricing details:</strong>
              {priceList.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {priceList.map((p, i) => (
                    <li key={i} className="flex flex-wrap gap-x-2">
                      {p.type && (
                        <span className="font-medium text-gray-800">
                          {p.type} -
                        </span>
                      )}
                      <span>{p.value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <button
                  type="button"
                  onClick={requestPrice}
                  className="mt-1 inline-block text-blue-600 underline underline-offset-2 font-medium hover:text-blue-800 transition-colors"
                >
                  Price on request
                </button>
              )}
              <p className="mt-2">Total Area: {property?.area}</p>
            </div>
            {hasLocationMap && (
              <button
                type="button"
                onClick={handleSeeDistance}
                className="text-blue-600 underline underline-offset-2 font-medium hover:text-blue-800 transition-colors text-left"
              >
                *See distance from your Location
              </button>
            )}
            {/* <p>*-- km from the Centre</p> */}
          </div>
        </div>

        {/* PROPERTY INFO */}
        {/* <div className="px-10 my-8 text-lg text-gray-800 leading-8">
          <h2 className="text-4xl font-semibold mb-3 font-serif">
            Property Name - {property?.title}
          </h2>
          <p>Details - {property?.description}</p>

          <p className="mt-4 text-gray-700">
            <strong>*Pricing details:</strong>
            <br />
            Price / sq ft - ₹ {property?.pricePerSqFt.toLocaleString()} / sq.ft{" "}
            <br />
            Total Area: {property?.area} <br />
            Total Price: ₹ {property?.price.toLocaleString()}
          </p>
          <p>*See distance from your Location</p>
          <p>*-- km from the Centre</p>
        </div> */}
      </div>

      <div className="sticky top-0 z-40 bg-[#19273A] shadow-md">
        <div className="flex items-center lg:justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-3 sm:py-4 md:py-5 overflow-x-auto no-scrollbar text-xs sm:text-sm font-medium">
          {[
            { label: "Overview", ref: overviewRef, key: "overview" },
            { label: "Floor Plan", ref: floorPlaneRef, key: "floor" },
            { label: "Amenities", ref: amenitiesRef, key: "amenities" },
            { label: "Highlights", ref: specificationRef, key: "specs" },
            { label: "Project Data", ref: projectDataRef, key: "proData" },
            ...(hasLocationMap
              ? [{ label: "Location", ref: locationRef, key: "location" }]
              : []),
            {
              label: "Connectivity",
              ref: connectivityRef,
              key: "connectivity",
            },
            { label: "Payment", ref: paymentRef, key: "payment" },
            { label: "EMI", ref: emiRef, key: "emi" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.ref, item.key)}
              className="relative cursor-pointer whitespace-nowrap flex-shrink-0 pb-1.5 transition-colors"
            >
              <span
                className={
                  activeTab === item.key
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                }
              >
                {item.label}
              </span>

              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#7cc933] rounded-full transition-all duration-300 ${
                  activeTab === item.key ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 max-w-[1400px] mx-auto gap-6 items-stretch lg:items-start mb-3 px-3">
        <div className="w-full lg:flex-1 min-w-0 bg-white  rounded-xl shadow-lg border">
          {/* =================More Image ================= */}

          <div
            ref={overviewRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28"
          >
            {/* HEADER */}
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Overview</h2>

            {/* SCROLLER WRAPPER */}
            <div className="relative">
              {/* SCROLL CONTAINER (IMPORTANT REF HERE) */}
              <div
                ref={overviewScrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
              >
                {property?.images.map((img, i) => (
                  <img
                    key={i}
                    src={optimizeImage(img, 700)}
                    loading="lazy"
                    onClick={() => openOverview(i)}
                    className="min-w-[220px] h-[180px] sm:min-w-[300px] sm:h-[260px]  object-contain rounded cursor-pointer  flex-shrink-0 hover:scale-105 transition"
                  />
                ))}
              </div>

              {/* LEFT BUTTON */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2  bg-white shadow-md p-2 rounded-full  hover:bg-gray-100 transition z-10"
              >
                <ChevronLeft size={22} />
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2  bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition z-10"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* ======== Floor Plane ======== */}
          <div
            ref={floorPlaneRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28 bg-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Floor Plan</h2>

            {floorPlans.length === 0 ? (
              <div className="bg-white p-10 rounded-lg shadow text-center text-gray-500">
                No floor plan available
              </div>
            ) : (
              <div className="relative bg-white rounded-lg shadow">
                <TransformWrapper key={activeFloorPlan} className="!w-full" initialScale={1} minScale={0.5} maxScale={3}>
                  <TransformComponent
                    wrapperClass="!w-full"
                    contentClass="!w-full"
                  >
                    <img
                      src={optimizeImage(floorPlans[activeFloorPlan], 1400)}
                      alt={`Floor Plan ${activeFloorPlan + 1}`}
                      className="w-full min-h-[260px] sm:min-h-[400px] md:min-h-[600px] max-h-[70vh] object-contain rounded"
                    />
                  </TransformComponent>
                </TransformWrapper>

                {/* Carousel controls — only when more than one floor plan */}
                {floorPlans.length > 1 && (
                  <>
                    <button
                      onClick={prevFloorPlan}
                      aria-label="Previous floor plan"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={nextFloorPlan}
                      aria-label="Next floor plan"
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition z-10"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {activeFloorPlan + 1} / {floorPlans.length}
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                      {floorPlans.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveFloorPlan(i)}
                          aria-label={`Go to floor plan ${i + 1}`}
                          className={`h-2.5 rounded-full transition-all ${
                            i === activeFloorPlan
                              ? "w-6 bg-[#1e3447]"
                              : "w-2.5 bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ================= AMENITIES ================= */}
          <div
            ref={amenitiesRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28"
          >
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Amenities</h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-h-[510px] p-2 overflow-y-auto no-scrollbar rounded-lg shadow-xl shadow-neutral-500">
              {amenities.map((a, i) => (
                <div
                  key={i}
                  onClick={() => openAmenity(i)}
                  className=" h-60 bg-white  rounded-xl  shadow-md  overflow-hidden  cursor-pointer transition-all  duration-300 hover:shadow-xl hover:-translate-y-1 "
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={optimizeImage(a?.img, 480)}
                      loading="lazy"
                      decoding="async"
                      alt={a?.title}
                      className=" w-full  h-48  object-cover  transition-transform  duration-500 hover:scale-110 "
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      {a?.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SPECIFICATION ================= */}
          <div
            ref={specificationRef}
            className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 scroll-mt-28 bg-gray-100 relative"
          >
            <div
              // ref={glow1Ref}
              className="pointer-events-none absolute w-40 h-40 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/20 rounded-full blur-2xl"
              style={{ top: 0, left: 0 }}
            />

            <div
              // ref={glow2Ref}
              className="pointer-events-none absolute w-28 h-28 bg-gradient-to-tr from-pink-400/30 to-blue-400/20 rounded-full blur-2xl"
              style={{ top: 0, left: 0 }}
            />
            {/* ================= TITLE ================= */}

            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-900">
              Highlights
            </h2>

            {/* ================= HIGHLIGHTS ================= */}

            <div className="space-y-5">
              {property?.keyHighlights?.map((item, i) => {
                const isOpen = openHighlight === i;

                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden bg-white shadow-md border transition duration-300 hover:shadow-lg"
                  >
                    {/* HEADER */}

                    <button
                      onClick={() => toggleHighlight(i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition duration-300"
                    >
                      <div className="flex items-center gap-3">
                        {/* ICON */}

                        <div className="p-2 bg-gray-100 rounded-xl">
                          <Star size={18} className="text-green-500" />
                        </div>

                        <h3 className="font-semibold text-lg text-gray-800">
                          {item.title}
                        </h3>
                      </div>

                      {/* ARROW */}

                      <ChevronDown
                        className={`transition-transform duration-500 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* CONTENT */}

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-gray-700">
                          {/* DESCRIPTION */}

                          {item.description && (
                            <p className="mb-4 text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          )}

                          {/* POINTS */}

                          {item.points && (
                            <ul className="space-y-2">
                              {item.points.map((p, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 animate-fadeIn"
                                >
                                  <CheckCircle
                                    size={16}
                                    className="text-green-500 mt-1"
                                  />

                                  <span className="text-gray-700">{p}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PROJECT DATA */}

          <div
            ref={(el) => {
              containerRef.current = el;
              projectDataRef.current = el;
            }}
            onMouseMove={handleMouseMove}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28 overflow-hidden"
          >
            {/* Cursor-follow blur */}
            <motion.div
              className="pointer-events-none absolute w-48 h-48 bg-gradient-to-tr from-blue-400/30 to-green-400/20 rounded-full blur-xl"
              // animate={{
              //   x: pos.x - 100,
              //   y: pos.y - 100,
              // }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            <h2 className="text-2xl md:text-3xl font-serif mb-6">Project Data</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {property?.projectData?.map((d, i) => (
                <div key={i} className="bg-white p-3 rounded">
                  <p className="text-gray-500">{d.label}</p>
                  <p>{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MAP & LANDMARKS ================= */}
          {hasLocationMap && (
            <div
              ref={locationRef}
              className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28 bg-gray-100"
            >
              <div className="text-2xl md:text-3xl font-serif mb-6">
                Location
              </div>
              <div className=" bg-white rounded-xl shadow-sm border overflow-hidden ">
                {/* Map */}
                <div className="w-full h-[400px]">
                  <iframe
                    src={property?.map?.locationLink}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Location"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ========== Connectivity =========== */}
          <div
            ref={connectivityRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Connectivity</h2>

            <div
              className={`grid grid-cols-1 gap-5 ${
                hasMapImage ? "sm:grid-cols-2" : ""
              }`}
            >
              <div>
                <div className="grid grid-cols-1 gap-5">
                  {visibleConnectivity.map((c, i) => (
                    <div
                      key={i}
                      className="group bg-white border rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 group-hover:bg-blue-50 group-hover:text-green-600 transition">
                        {getConnectivityIcon(c)}
                      </div>

                      <p className="text-sm md:text-base text-gray-700">{c}</p>
                    </div>
                  ))}
                </div>

                {connectivityItems.length > 7 && (
                  <button
                    onClick={() => setShowAllConnectivity(!showAllConnectivity)}
                    className="mt-5 px-5 py-2 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition"
                  >
                    {showAllConnectivity ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>

              {hasMapImage && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="w-full h-full">
                    <TransformWrapper>
                      <TransformComponent>
                        <img
                          src={property?.map?.image}
                          alt="Location Map"
                          className="rounded w-full h-[300px] md:h-[500px] object-cover"
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= PAYMENT ================= */}
          <div
            ref={paymentRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 scroll-mt-28 bg-gray-100"
          >
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Payment Details
            </h2>

            {/* Table Card */}
            <div className="  bg-white border rounded-xl shadow-sm overflow-hidden ">
              {/* Desktop Table */}
              <div className="hidden md:block">
                {/* Header */}
                <div className=" grid grid-cols-4  bg-gray-50 text-sm font-medium  text-gray-600 p-4">
                  <span>Unit Type</span>
                  <span>Size (Sq. Ft.)</span>
                  <span>Price</span>
                  <span>Booking</span>
                </div>

                {/* Rows — one per price entry, mirroring the PROPERTY INFO pricing */}
                {priceList.length > 0 ? (
                  priceList.map((p, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 p-4 text-gray-800 border-t  hover:bg-gray-50 transition"
                    >
                      <span className="font-medium">
                        {p.type || property?.bhk}
                      </span>

                      <span>{property?.area} Carpet</span>

                      <span>{p.value}</span>

                      <span className="text-green-600 font-medium">10%</span>
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-4 p-4 text-gray-800 border-t  hover:bg-gray-50 transition">
                    <span className="font-medium">{property?.bhk}</span>

                    <span>{property?.area} Carpet</span>

                    <button
                      type="button"
                      onClick={requestPrice}
                      className="text-left text-blue-600 underline underline-offset-2 font-medium hover:text-blue-800 transition-colors"
                    >
                      Price on request
                    </button>

                    <span className="text-green-600 font-medium">10%</span>
                  </div>
                )}
              </div>

              {/* Mobile Card Layout */}
              <div className="md:hidden p-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Unit Type</span>
                  <span className="font-medium">{property?.bhk}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Size</span>
                  <span>{property?.area} Carpet</span>
                </div>

                {priceList.length > 0 ? (
                  priceList.map((p, i) => (
                    <div key={i} className="flex justify-between gap-3">
                      <span className="text-gray-500">{p.type || "Price"}</span>
                      <span className="text-right">{p.value}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price</span>
                    <button
                      type="button"
                      onClick={requestPrice}
                      className="text-blue-600 underline underline-offset-2 font-medium hover:text-blue-800 transition-colors"
                    >
                      Price on request
                    </button>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-500">Booking</span>
                  <span className="text-blue-600 font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= EMI + REVIEWS ================= */}
          <div
            ref={emiRef}
            className="p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 max-w-6xl w-full mx-auto"
          >
            <div className="bg-white  md:p-6 md:rounded md:shadow w-full lg:max-w-md">
              <h2 className="text-xl mb-4">EMI Calculator</h2>

              <label>Loan Amount</label>
              <input
                type="number"
                value={loan}
                onChange={(e) => setLoan(Number(e.target.value))}
                className="w-full border p-2 mb-3"
              />

              <label>Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full border p-2 mb-3"
              />

              <label>Tenure (Years)</label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full border p-2 mb-3"
              />

              <div className="mt-4 text-lg font-semibold">
                EMI: ₹ {emi.toLocaleString()}
              </div>

              {/* <button className="w-full text-center mt-4 p-2 rounded-lg bg-[#1e3447] hover:bg-green-600 transition-all duration-200 ease-in-out delay-100 text-white">
                Also Calculate Finance
              </button> */}
            </div>
            {/* GALLERIES */}
            {/* <div className="flex flex-col items-center justify-center">
              {property?.galleries?.map((g, i) => {
                const images = g.images;
                const extraCount = images.length - 4;

                return (
                  <div key={i} className="mb-6">
                    <h2 className="text-xl mb-3">{g?.title}</h2>

                    <div className="grid grid-cols-2 gap-3">
                      {images.slice(0, 4).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative cursor-pointer"
                          onClick={() => {
                            setActiveGallery(images);
                            setShowGallery(true);
                          }}
                        >
                          <img
                            src={optimizeImage(img, 480)}
                            loading="lazy"
                            decoding="async"
                            className="w-60 h-40 object-cover rounded transition-transform duration-300 hover:scale-105"
                          />

                         
                          {idx === 3 && extraCount > 0 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold rounded">
                              +{extraCount} more
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div> */}
    {/* <AreaConverter /> */}
            <div className=" ">
            <h2 className="text-xl md:hidden">
  Area Calculator
</h2>


<div className="w-full space-y-6 lg:max-w-md ">


              {/* State Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select State
                </label>
                <SearchableStateInput
                  value={state}
                  onChange={setState}
                  options={states}
                />
              </div>

              {/* Value Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Value
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter value"
                  className="w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 text-gray-700 font-medium shadow-sm"
                />
              </div>

              {/* Unit Conversions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Conversion Units
                  </label>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition"
                    title="Reset"
                    aria-label="Reset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-3 items-end flex-wrap">
                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">
                      From
                    </label>
                    <CustomDropdown
                      value={fromUnit}
                      onChange={setFromUnit}
                      options={Object.keys(unitConversions)}
                    />
                  </div>

                  <button
                    onClick={handleSwap}
                    className="p-3 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
                    title="Swap units"
                  >
                    <MdSwapHoriz className="w-6 h-6" />
                  </button>

                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">
                      To
                    </label>
                    <CustomDropdown
                      value={toUnit}
                      onChange={setToUnit}
                      options={Object.keys(unitConversions)}
                    />
                  </div>
                </div>
              </div>

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-xl shadow-lg relative"
                >
                  <div>
                    <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide font-semibold">
                      Result
                    </p>
                    <p className="text-lg md:text-xl text-gray-800">
                      <span className="font-bold">
                        {value} {fromUnit}
                      </span>
                      <span className="mx-2 text-green-500">=</span>
                      <span className="font-semibold text-green-600">
                        {result.toFixed(6)} {toUnit}
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

        

</div>


          </div>

          <div className="max-w-7xl mx-auto flex justify-center sm:justify-end mt-6 px-4 sm:px-8 scroll-mt-28">
            <button
              onClick={() =>
                navigate("/Contact", {
                  state: { openTab: "listing", scrollTo: "contact-Us" },
                })
              }
              className="bg-[#1e3447] text-white w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg"
            >
              Book your Appointment
            </button>
          </div>

          {/* ================= FOOTER SECTIONS ================= */}

          <div className=" flex flex-col gap-12 py-12  scroll-mt-28">
            {/* ================= ABOUT DEVELOPER ================= */}

            {property?.developer && (
              <div
                className="
      bg-white
      border
      rounded-xl
      shadow-sm
      max-w-4xl mx-auto px-6 md:px-10 py-5
    "
              >
                {/* Heading */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="
          w-10 h-10
          flex items-center justify-center
          bg-gray-100
          rounded-lg
        "
                  >
                    <Building2 size={22} />
                  </div>

                  <h2 className="text-2xl font-semibold">About Developer</h2>
                </div>

                {/* Developer Info */}
                <div className="space-y-3 text-gray-700">
                  <p className="font-medium text-lg">
                    {property?.developer?.name}
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    {property?.developer?.description}
                  </p>
                </div>

                {/* Vision Section */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="
            w-10 h-10
            flex items-center justify-center
            bg-gray-100
            rounded-lg
          "
                    >
                      <Eye size={22} />
                    </div>

                    <h3 className="text-xl font-semibold">Vision</h3>
                  </div>

                  <div
                    className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
                  >
                    {property?.sections?.vision?.map((v, i) => (
                      <div
                        key={i}
                        className="
                flex
                items-start
                gap-3
                bg-gray-50
                p-4
                rounded-lg
                text-sm
                text-gray-700
                transition
                hover:bg-gray-100
              "
                      >
                        <CheckCircle
                          size={18}
                          className="text-green-600 mt-1"
                        />

                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= SIMILAR PROJECTS ================= */}
            {similarProperties.length > 0 && (
              <div className=" bg-gray-100">
                <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm  px-6 md:px-6 py-6 my-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Similar Projects
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {similarProperties.map((item) => {
                      const sameDeveloper =
                        currentDeveloper &&
                        norm(item.developer?.name) === currentDeveloper;
                      return (
                        <a
                          key={item.id}
                          href={`/property/${item.slug || item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block border rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
                        >
                          {/* Image */}
                          <div className="relative h-40 bg-gray-200">
                            {item.images?.[0] && (
                              <img
                                src={optimizeImage(item.images[0], 500)}
                                alt={item.title}
                                loading="lazy"
                                className="h-40 w-full object-cover"
                              />
                            )}
                            {sameDeveloper && (
                              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                Same Developer
                              </span>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h3 className="font-medium line-clamp-1">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                              {item.location}
                            </p>

                            {item.propertyType && (
                              <p className="text-xs text-gray-400 mt-1">
                                {item.propertyType}
                              </p>
                            )}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ================= DISCLAIMER ================= */}

            <div className="bg-gray-50 max-w-4xl mx-auto border rounded-xl p-6 md:p-8 ">
              <h2 className="text-lg font-semibold mb-3">Disclaimer</h2>

              <p className="text-sm text-gray-600 leading-relaxed ">
                {property?.disclaimer}
              </p>
            </div>
          </div>

          {showGallery && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-5 right-5 text-white text-3xl"
              >
                ✕
              </button>

              {/* IMAGE GRID */}
              <div className="bg-white p-4 rounded max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl mb-4">Gallery</h2>

                <div className="grid md:grid-cols-3 gap-4">
                  {activeGallery.map((img, i) => (
                    <img
                      key={i}
                      src={optimizeImage(img, 480)}
                      loading="lazy"
                      className="w-full h-40 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT CONTACT PANEL */}
        <div
          className={`w-full lg:w-[360px] lg:sticky ${showNavbar ? "lg:top-24" : "lg:top-2"} self-start`}
        >
          <form onSubmit={handleCallSubmit} className="flex flex-col w-full">
            {/* Contact Form */}
            <div className="bg-white rounded-md shadow border">
              <img
                alt="img"
                src={optimizeImage(property?.images[0], 400)}
                loading="lazy"
                className="h-36 w-full object-contain rounded-t-md"
              />
              <h1 className="text-xl font-serif pt-2 px-2">
                Call For Property{" "}
              </h1>
              <div className="px-2 pt-2">
                <label className="text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  value={callData.name}
                  onChange={(e) =>
                    setCallData({ ...callData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
                {callErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{callErrors.name}</p>
                )}
              </div>

              <div className="px-2 pt-2">
                <label className="text-sm text-gray-600">Contact No.</label>
                <input
                  name="phone"
                  type="tel"
                  value={callData.phone}
                  onChange={(e) =>
                    setCallData({ ...callData, phone: e.target.value })
                  }
                  placeholder="10-digit number"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
                {callErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{callErrors.phone}</p>
                )}
              </div>

              <div className="px-2 pt-2 mb-2">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  type="email"
                  value={callData.email}
                  onChange={(e) =>
                    setCallData({ ...callData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
                {callErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{callErrors.email}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={callLoading}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-lg font-semibold transition disabled:opacity-70 disabled:cursor-wait"
            >
              {callLoading ? "Submitting..." : "Get a Call"}
            </button>
          </form>
        </div>
      </div>
      
      {showAmenityPopup && (
        <div
          className="
    fixed 
    inset-0 
    bg-black/90 
    z-50 
    flex 
    items-center 
    justify-center
    p-6
  "
        >
          {/* Close Button */}
          <button
            onClick={() => setShowAmenityPopup(false)}
            className="
        absolute 
        top-6 
        right-6 
        text-white
        hover:scale-110
        transition
      "
          >
            <X size={32} />
          </button>

          {/* Left Button */}
          <button
            onClick={prevAmenity}
            className="
        absolute 
        left-6 
        text-white
        hover:scale-110
        transition
      "
          >
            <ChevronLeft size={40} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextAmenity}
            className="
        absolute 
        right-6 
        text-white
        hover:scale-110
        transition
      "
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl w-full text-center">
            <img
              src={optimizeImage(amenities[activeAmenityIndex]?.img, 1200)}
              alt={amenities[activeAmenityIndex]?.title}
              className="
          w-full 
          max-h-[75vh] 
          object-contain 
          rounded-lg 
          shadow-lg
          animate-fadeIn
        "
            />

            {/* Title */}
            <h2
              className="
        text-white
        text-xl
        md:text-2xl
        mt-6
      "
            >
              {amenities[activeAmenityIndex]?.title}
            </h2>
          </div>
        </div>
      )}

      {/* ================= OVERVIEW IMAGE POPUP ================= */}
      {showOverviewPopup && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          {/* Close Button */}
          <button
            onClick={() => setShowOverviewPopup(false)}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          {/* Left Button */}
          <button
            onClick={prevOverview}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextOverview}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full text-center">
            <img
              src={overviewImages[activeOverviewIndex]}
              alt={`${property?.title} image ${activeOverviewIndex + 1}`}
              className="w-full max-h-[75vh] object-contain rounded-lg shadow-lg animate-fadeIn"
            />

            {/* Counter */}
            <p className="text-white/80 text-sm mt-4">
              {activeOverviewIndex + 1} / {overviewImages.length}
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 justify-center mt-4 overflow-x-auto no-scrollbar">
              {overviewImages.map((img, i) => (
                <img
                  key={i}
                  src={optimizeImage(img, 200)}
                  loading="lazy"
                  onClick={() => setActiveOverviewIndex(i)}
                  className={`h-16 w-24 object-cover rounded cursor-pointer flex-shrink-0 transition ${
                    i === activeOverviewIndex
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailSkeleton = () => (
  <div className="min-h-screen pt-28 px-4 sm:px-6 md:px-10 animate-pulse" aria-busy="true">
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2 h-[260px] sm:h-[380px] bg-slate-100 rounded-xl" />
      <div className="lg:w-1/2 space-y-4">
        <div className="h-8 w-2/3 bg-slate-100 rounded" />
        <div className="h-5 w-1/2 bg-slate-100 rounded" />
        <div className="h-24 bg-slate-100 rounded" />
        <div className="h-12 w-40 bg-slate-100 rounded" />
      </div>
    </div>
    <div className="mt-10 h-40 bg-slate-100 rounded-xl" />
  </div>
);

// Real, shareable URL: /property/<slug>. The property loads from MongoDB via the
// API as soon as the page opens; similar projects load afterwards so they never
// delay the main content. Keyed by slug so navigating resets all page state.
const PropertyDetails = () => {
  const { slug } = useParams();
  const [state, setState] = useState({ slug: null, property: null, error: "" });
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    let cancelled = false;
    window.scrollTo(0, 0);
    api
      .getProperty(slug)
      .then((property) => {
        if (cancelled) return;
        setState({ slug, property, error: "" });
        // Non-blocking: similar projects fill in once ready.
        api
          .getSimilar(property.id)
          .then((items) => !cancelled && setSimilar(items))
          .catch(() => {});
      })
      .catch((err) => {
        if (!cancelled) setState({ slug, property: null, error: err.message });
      });
    return () => {
      cancelled = true;
      setSimilar([]);
    };
  }, [slug]);

  // Per-property tab title + description (helps sharing and search results).
  const property = state.slug === slug ? state.property : null;
  useEffect(() => {
    if (!property) return;
    const previousTitle = document.title;
    document.title = `${property.title}${property.developer?.name ? ` by ${property.developer.name}` : ""} | Roots & Roofs`;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    if (meta && property.description) meta.setAttribute("content", property.description.slice(0, 160));
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription != null) meta.setAttribute("content", previousDescription);
    };
  }, [property]);

  if (state.slug !== slug) return <DetailSkeleton />;
  if (state.error || !state.property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
        <h1 className="text-2xl font-bold text-slate-800">Property not found</h1>
        <p className="text-slate-600">{state.error || "This property is no longer available."}</p>
        <a href="/" className="px-6 py-3 bg-[#7cc933] text-white rounded-lg font-medium">Browse properties</a>
      </div>
    );
  }
  return <PropertyDetailsView key={slug} property={state.property} similarProperties={similar} />;
};

// Old links (/propertyDetails/209) redirect to the real URL (/property/<slug>).
export const LegacyPropertyRedirect = () => {
  const { id } = useParams();
  const [target, setTarget] = useState(null);
  useEffect(() => {
    api
      .getProperty(id)
      .then((p) => setTarget(`/property/${p.slug}`))
      .catch(() => setTarget("/"));
  }, [id]);
  return target ? <Navigate to={target} replace /> : <DetailSkeleton />;
};

export default PropertyDetails;
