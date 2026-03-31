import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import propertyList from "../utils/propertyList";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyList.find((item) => item.id === Number(id));
  console.log("property", property);

  const [mainImage, setMainImage] = useState(property?.images[0]);
  const [activeTab, setActiveTab] = useState("overview");

  const [showGallery, setShowGallery] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);

  // EMI States
  const [loan, setLoan] = useState(property?.price || 1000000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showAmenityPopup, setShowAmenityPopup] = useState(false);
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);

  const [openHighlight, setOpenHighlight] = useState(null);

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

  const amenities = property?.sections?.amenities || [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
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

      const scrollY = window.scrollY + 150;

      for (let sec of sections) {
        const top = sec.ref.current?.offsetTop;
        const height = sec.ref.current?.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveTab(sec.key);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

  if (!property) return <div className="p-10">Property not found</div>;
  return (
    <div className="">
      {/* ================= HERO SECTION ================= */}
      <div className="mt-20">
        {/* Breadcrumb */}
        <div className="px-10 py-4 text-gray-700 text-lg">
          Home &gt; Villas &gt; {property.title}
        </div>

        <div className="flex px-10 mb-8">
          {/* LEFT IMAGES */}
          <div className="flex w-[60%] items-center gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto w-1/5">
              {property?.images?.slice(0, 5).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`min-w-32 h-20 object-cover rounded cursor-pointer border-2 border-solid ${mainImage == img ? "border-neutral-500" : " border"}`}
                />
              ))}
            </div>

            {/* Main Image */}
            <img
              src={mainImage}
              className=" w-4/5 h-[300px] md:h-[450px] object-cover rounded"
            />
          </div>

          {/* PROPERTY INFO */}
          <div className="w-[40%] px-10 text-lg text-gray-800 leading-8">
            <h2 className="text-4xl font-semibold mb-3 font-serif">
              Property Name - {property?.title}
            </h2>
            <p>Details - {property?.description}</p>

            <p className="mt-4 text-gray-700">
              <strong>*Pricing details:</strong>
              <br />
              Price / sq ft - ₹ {property?.pricePerSqFt.toLocaleString()} /
              sq.ft <br />
              Total Area: {property?.area} <br />
              Total Price: ₹ {property?.price.toLocaleString()}
            </p>
            <p>*See distance from your Location</p>
            <p>*-- km from the Centre</p>
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

      <div className="sticky top-0 z-40 bg-[#19273A]  shadow-md">
        <div className="flex items-center justify-center gap-8 px-6 py-6 overflow-x-auto no-scrollbar text-sm font-medium">
          {[
            { label: "Overview", ref: overviewRef, key: "overview" },
            { label: "Floor Plan", ref: floorPlaneRef, key: "floor" },
            { label: "Amenities", ref: amenitiesRef, key: "amenities" },
            { label: "Specifications", ref: specificationRef, key: "specs" },
            { label: "Project Data", ref: projectDataRef, key: "proData" },
            { label: "Location", ref: locationRef, key: "location" },
            {
              label: "Connectivity",
              ref: connectivityRef,
              key: "connectivity",
            },
            { label: "Payment", ref: paymentRef, key: "payment" },
            { label: "EMI", ref: emiRef, key: "emi" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => scrollToSection(item.ref, item.key)}
              className="relative cursor-pointer whitespace-nowrap"
            >
              <span
                className={`pb-2 ${
                  activeTab === item.key
                    ? "text-white font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </span>

              {/* Animated Underline */}
              {activeTab === item.key && (
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-400 transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-10 max-w-[1400px] mx-auto gap-6 items-start mb-3 px-3">
        <div className="flex-1 min-w-0 bg-white  rounded-xl shadow-lg border">
          {/* =================More Image ================= */}

          <div
            ref={overviewRef}
            className="max-w-7xl mx-auto px-10 py-10 scroll-mt-28"
          >
            {/* HEADER */}
            <h2 className="text-3xl font-serif mb-6">Overview</h2>

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
                    src={img}
                    onClick={() => setMainImage(img)}
                    className="min-w-[300px] h-[260px]  object-cover rounded cursor-pointer  flex-shrink-0 hover:scale-105 transition"
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
            className="max-w-7xl mx-auto px-10 py-10 scroll-mt-28 bg-gray-100"
          >
            <h2 className="text-3xl font-serif mb-6">Floor Plan</h2>

            <div className="bg-white p-6 rounded-lg shadow">
              <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    {/* Controls */}

                    {/* Image */}
                    <div className=" max-h-full flex justify-center">
                      <TransformComponent>
                        <img
                          src={property?.floorPlan?.image}
                          alt="Floor Plan"
                          className="min-w-screen w-full min-h-[600px] object-contain rounded "
                        />
                      </TransformComponent>
                    </div>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>

          {/* ================= AMENITIES ================= */}
          <div
            ref={amenitiesRef}
            className="max-w-7xl mx-auto px-6 md:px-10 py-10 scroll-mt-28"
          >
            {/* Heading */}
            <h2 className="text-3xl font-serif mb-6">Amenities</h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 h-[510px] p-2 overflow-y-auto no-scrollbar rounded-lg shadow-xl shadow-neutral-500">
              {amenities.map((a, i) => (
                <div
                  key={i}
                  onClick={() => openAmenity(i)}
                  className=" h-60 bg-white  rounded-xl  shadow-md  overflow-hidden  cursor-pointer transition-all  duration-300 hover:shadow-xl hover:-translate-y-1 "
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={a?.img}
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
            className="max-w-6xl mx-auto px-6 py-12 scroll-mt-28 bg-gray-100 relative"
          >
            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-pink-400/30 to-blue-400/20 rounded-full blur-xl"></div>
            {/* ================= TITLE ================= */}

            <h2 className="text-4xl font-serif mb-8 text-gray-900">
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
            ref={projectDataRef}
            className="relative max-w-7xl mx-auto px-10 py-10 scroll-mt-28"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/30 to-green-400/20 rounded-full blur-xl"></div>
            <h2 className="text-3xl font-serif mb-6">Project Data</h2>
            <div className="grid grid-cols-4 gap-3 mt-6">
              {property?.projectData?.map((d, i) => (
                <div key={i} className="bg-white p-3 rounded">
                  <p className="text-gray-500">{d.label}</p>
                  <p>{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MAP & LANDMARKS ================= */}
          <div
            ref={locationRef}
            className="max-w-7xl mx-auto px-10 py-10 scroll-mt-28 bg-gray-100"
          >
            <div className="text-3xl font-serif mb-6">Location</div>
            <div className=" bg-white rounded-xl shadow-sm border overflow-hidden ">
              {/* Title */}
              <div className="px-6 py-4 border-b bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800">
                  Google Map for Location (VR View)
                </h2>
              </div>

              {/* Map */}

              <div className="w-full h-[340px]">
                {property?.map?.locationLink && (
                  <iframe
                    src={property?.map?.locationLink}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Location"
                  />
                )}
              </div>
            </div>
          </div>

          {/* ========== Connectivity =========== */}
          <div
            ref={connectivityRef}
            className="max-w-7xl mx-auto px-6 md:px-10 py-10 scroll-mt-28"
          >
            {/* Heading */}
            <h2 className="text-3xl font-serif mb-6 ">Connectivity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Grid */}
              <div className="grid grid-cols-1 gap-5">
                {property?.sections?.connectivity?.map((c, i) => (
                  <div
                    key={i}
                    className=" group  bg-white border rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className=" w-10 h-10 flex items-center justify-center  bg-gray-100 rounded-lg  text-gray-700  group-hover:bg-blue-50  group-hover:text-green-600 transition ">
                      {getConnectivityIcon(c)}
                    </div>

                    {/* Text */}
                    <p className="text-sm md:text-base text-gray-700">{c}</p>
                  </div>
                ))}
              </div>
              <div className=" bg-white rounded-xl shadow-sm border overflow-hidden ">
                {/* Title */}

                <div className="px-6 py-4 border-b bg-green-500">
                  <h2 className="text-lg font-semibold text-white">
                    Google Map for Location (VR View)
                  </h2>
                </div>

                {/* Map */}

                <div className="w-full h-[340px]">
                  {property?.map?.image && (
                    <TransformWrapper>
                      <TransformComponent>
                        <img
                          src={property?.map?.image}
                          className="rounded h-[400px]"
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= PAYMENT ================= */}
          <div
            ref={paymentRef}
            className="max-w-7xl mx-auto px-6 md:px-10 py-10 scroll-mt-28 bg-gray-100"
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
                <div className=" grid grid-cols-5  bg-gray-50 text-sm font-medium  text-gray-600 p-4">
                  <span>Unit Type</span>
                  <span>Size (Sq. Ft.)</span>
                  <span>Price / Sq. Ft.</span>
                  <span>Total Amount</span>
                  <span>Booking</span>
                </div>

                {/* Row */}
                <div className="grid grid-cols-5 p-4 text-gray-800 border-t  hover:bg-gray-50 transition">
                  <span className="font-medium">{property?.bhk}</span>

                  <span>{property?.area} Carpet</span>

                  <span>₹ {property?.pricePerSqFt}</span>

                  <span className="font-semibold">
                    ₹ {property?.price?.toLocaleString()}
                  </span>

                  <span className="text-green-600 font-medium">10%</span>
                </div>
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

                <div className="flex justify-between">
                  <span className="text-gray-500">Price / Sq.Ft.</span>
                  <span>₹ {property?.pricePerSqFt}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Total Amount</span>
                  <span className="font-semibold">
                    ₹ {property?.price?.toLocaleString()}
                  </span>
                </div>

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
            className="p-10 flex items-center justify-between gap-4 max-w-6xl w-full mx-auto"
          >
            <div className="bg-white p-6 rounded shadow max-w-md">
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

              <button className="w-full text-center mt-4 p-2 rounded-lg bg-[#1e3447] hover:bg-green-600 transition-all duration-200 ease-in-out delay-100 text-white">
                Also Calculate Finance
              </button>
            </div>
            {/* GALLERIES */}
            <div className="flex flex-col items-center justify-center">
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
                            src={img}
                            className="w-60 h-40 object-cover rounded transition-transform duration-300 hover:scale-105"
                          />

                          {/* +MORE OVERLAY */}
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
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex justify-end mt-6 px-8 scroll-mt-28">
            <button className="bg-[#1e3447] text-white px-10 py-4 rounded-full text-lg">
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
            <div className=" bg-gray-100">
              <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm  px-6 md:px-6 py-6 my-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Similar Projects
                </h2>

                {/* Placeholder Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/* Example Cards (Replace Later With Real Data) */}

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="border rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
                    >
                      {/* Image */}
                      <div className="h-40 bg-gray-200" />

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-medium">Project Name</h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Location • ₹ Price Range
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                      src={img}
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
          className={`w-[360px] sticky ${showNavbar ? "top-24" : "top-2"} self-start`}
        >
          <div className="flex flex-col w-full">
            {/* Contact Form */}
            <div className="bg-white rounded-md shadow border">
              <img
                alt="img"
                src={property?.images[0]}
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <h1 className="text-xl font-serif pt-2 px-2">
                Call For Property{" "}
              </h1>
              <div className="px-2 pt-2">
                <label className="text-sm text-gray-600">Name</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>

              <div className="px-2">
                <label className="text-sm text-gray-600">Contact No.</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>

              <div className=" px-2 mb-2">
                <label className="text-sm text-gray-600">Email</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>
            </div>

            <button className="mt-4 bg-green-500 text-white py-3 rounded-md text-lg font-semibold">
              Get a Call
            </button>
          </div>
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
              src={amenities[activeAmenityIndex]?.img}
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
    </div>
  );
};

export default PropertyDetails;
