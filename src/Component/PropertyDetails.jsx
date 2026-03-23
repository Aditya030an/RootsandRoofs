import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { useParams } from "react-router-dom";
import propertyList from "../utils/propertyList";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  const calculateEMI = () => {
    const r = rate / 12 / 100;
    const n = tenure * 12;

    const emiValue = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setEmi(Math.round(emiValue));
  };

  useEffect(() => {
    calculateEMI();
  }, [loan, rate, tenure]);

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

  const scrollToSection = (ref, tab) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  if (!property) return <div className="p-10">Property not found</div>;
  return (
    <div className="w-full min-h-screen bg-[#f4f4f4]">
      {/* ================= HERO SECTION ================= */}
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="px-10 py-4 text-gray-700 text-lg">
          Home &gt; Villas &gt; {property.title}
        </div>

        <div className="flex px-10 gap-8">
          {/* LEFT IMAGES */}
          <div className="flex gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto">
              {property?.images?.slice(0, 5).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className="w-20 h-20 object-cover rounded cursor-pointer border"
                />
              ))}
            </div>

            {/* Main Image */}
            <img
              src={mainImage}
              className="w-full md:w-[420px] h-[300px] md:h-[520px] object-cover rounded"
            />
          </div>

          {/* RIGHT CONTACT PANEL */}
          <div className="flex flex-col w-[360px] ml-auto">
            <div className="flex justify-end mb-2">
              <Heart size={30} className="text-[#1e3447]" />
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-md shadow p-5 border">
              <div className="mb-4">
                <label className="text-sm text-gray-600">Name</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-600">Contact No.</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-600">Email</label>
                <input className="w-full border rounded-md px-3 py-2 mt-1" />
              </div>
            </div>

            <button className="mt-4 bg-green-500 text-white py-3 rounded-md text-lg font-semibold">
              Get a Call
            </button>

            <button className="mt-8 bg-[#1e3447] text-white py-4 rounded-full text-lg">
              Get 360° view
            </button>

            <div className="flex gap-6 mt-5">
              <button className="bg-[#1e3447] text-white px-6 py-3 rounded-full">
                Book a Visit
              </button>

              <button className="bg-[#1e3447] text-white px-6 py-3 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* PROPERTY INFO */}
        <div className="px-36 mt-8 text-lg text-gray-800 leading-8">
          <h2 className="text-2xl font-semibold mb-3">
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
        </div>
      </div>

      {/* ================= NAVIGATION TABS ================= */}
      <div className="sticky top-0 z-50 bg-[#19273A]  shadow-md">
        <div className="flex items-center justify-center gap-8 px-6 py-6 overflow-x-auto no-scrollbar text-sm font-medium">
          {[
            { label: "Overview", ref: overviewRef, key: "overview" },
            { label: "Floor Plan", ref: floorPlaneRef, key: "floor" },
            { label: "Amenities", ref: amenitiesRef, key: "amenities" },
            { label: "Specifications", ref: specificationRef, key: "specs" },
            { label: "Project Data", ref: projectDataRef, key: "proData" },
            { label: "Location", ref: locationRef, key: "location" },
            { label: "Connectivity", ref: connectivityRef, key: "connectivity" },
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

      {/* ================= FLOOR PLAN ================= */}
      {/* <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-12">
         <div className="h-[260px] bg-[#1e3447]"></div>
         <div className="h-[260px] bg-[#1e3447]"></div>
         <div className="h-[260px] bg-[#1e3447]"></div>
       </div> */}

      <div
        ref={overviewRef}
        className="max-w-7xl mx-auto px-10 py-10 scroll-mt-28"
      >
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {property?.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className="min-w-[300px] h-[260px] object-cover rounded cursor-pointer flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* ======== Floor Plane ======== */}
      <div
        ref={floorPlaneRef}
        className="max-w-7xl mx-auto px-10 py-10 scroll-mt-28"
      >
        <h2 className="text-3xl font-serif mb-6">Floor Plan</h2>

        <div className="bg-white p-6 rounded-lg shadow">
          {/* Top Controls */}
          {/* <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3">
              <button
                onClick={() => zoomIn()}
                className="bg-[#1e3447] text-white px-4 py-2 rounded"
              >
                Zoom In +
              </button>

              <button
                onClick={() => zoomOut()}
                className="bg-[#1e3447] text-white px-4 py-2 rounded"
              >
                Zoom Out -
              </button>

              <button
                onClick={() => resetTransform()}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Reset
              </button>
            </div>

           
            <a
              href={property.floorPlan.pdf}
              download
              className="bg-green-500 text-white px-5 py-2 rounded"
            >
              Download PDF
            </a>
          </div> */}

          {/* Zoomable Floor Plan */}
          {/* <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    src={property.floorPlan.image}
                    alt="Floor Plan"
                    className="w-full max-h-[600px] object-contain rounded"
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper> */}

          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Controls */}
                {/* <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-3">
                    <button
                      onClick={zoomIn}
                      className="bg-[#1e3447] text-white px-4 py-2 rounded"
                    >
                      Zoom In +
                    </button>

                    <button
                      onClick={zoomOut}
                      className="bg-[#1e3447] text-white px-4 py-2 rounded"
                    >
                      Zoom Out -
                    </button>

                    <button
                      onClick={resetTransform}
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Reset
                    </button>
                  </div>

                  <a
                    href={property.floorPlan.pdf}
                    download
                    className="bg-green-500 text-white px-5 py-2 rounded"
                  >
                    Download PDF
                  </a>
                </div> */}

                {/* Image */}
                <div className=" max-h-[300px] overflow-y-auto flex justify-center">
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

      {/* <div ref={floorPlaneRef} className="p-10">
        {property?.floorPlan?.image && (
          <TransformWrapper>
            <TransformComponent>
              <img src={property.floorPlan.image} />
            </TransformComponent>
          </TransformWrapper>
        )}
      </div> */}

      {/* ================= AMENITIES ================= */}
      <div
        ref={amenitiesRef}
        className="max-w-7xl mx-auto px-10 mt-6 scroll-mt-28"
      >
        <div className="bg-gray-300 h-[260px]  font-serif p-2 flex flex-col items-center justify-center">
          <h2 className="text-4xl mb-4">Amenities (Scroll, specific)</h2>
          <div className="grid grid-cols-3 gap-3">
            {property?.sections?.amenities?.map((a, i) => (
              <div key={i} className="bg-white p-2 rounded text-xl">
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===specification ==== */}
      {/* <div
        ref={specificationRef}
        className="max-w-7xl mx-auto px-10  pb-10 scroll-mt-28"
      >
        <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {property?.keyHighlights.map((item, i) => (
            <li key={i} className="bg-white p-3 rounded shadow text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </div> */}

      <div ref={specificationRef} className="p-10">
        <h2 className="text-xl mb-4">Highlights</h2>

        {property?.keyHighlights?.map((item, i) => (
          <div key={i} className="bg-white p-4 mb-3 rounded shadow">
            <h3 className="font-semibold">{item.title}</h3>

            {item.description && <p>{item.description}</p>}

            {item.points && (
              <ul className="list-disc pl-5">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="bg-gray-300  p-2">
          <h2 className="text-lg font-medium">Specification</h2>
          <div className="grid grid-cols-4 gap-3">
            {property?.sections?.specifications?.map((v, i) => (
              <div key={i} className="bg-white p-1 rounded text-md">
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT DATA */}
      <div ref={projectDataRef} className="p-8">
        <h2 className="text-lg font-medium">Project Data</h2>
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
        className="max-w-7xl mt-8 mx-auto grid grid-cols-2 gap-8 px-8 scroll-mt-28"
      >
        <div className="bg-green-500 h-[400px] flex flex-col items-center justify-center text-white text-xl font-semibold text-center p-2">
          <h2>Google Map for Location (VR View)</h2>
          {property?.map?.image && (
            <TransformWrapper>
              <TransformComponent>
                <img src={property?.map?.image} className="rounded" />
              </TransformComponent>
            </TransformWrapper>
          )}
        </div>

        <div className="bg-gray-300 h-[400px] flex flex-col items-start justify-center text-center p-2 text-lg font-medium">
          <h2> Landmarks</h2>
          {property?.map?.image && (
            <TransformWrapper>
              <TransformComponent>
                <img src={property?.floorPlan?.image} className="rounded" />
              </TransformComponent>
            </TransformWrapper>
            // <img src={property.map.image} className="rounded" />
          )}
        </div>
      </div>

      <div ref={connectivityRef} className="max-w-7xl w-full mx-auto mt-8 p-2">
        <h2 className="text-xl font-medium">Connectivity</h2>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {property?.sections?.connectivity?.map((c, i) => (
            <div key={i} className="bg-white p-1 rounded text-md">
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* <div ref={locationRef} className="p-10">
        <h2 className="text-xl mb-4">Location</h2>
        {property?.map?.image && (
          <img src={property.map.image} className="rounded" />
        )}
      </div> */}

      {/* ================= PAYMENT ================= */}
      <div
        ref={paymentRef}
        className="max-w-7xl mx-auto px-10 mt-8 pb-10 scroll-mt-28"
      >
        <div className="bg-gray-300 p-8">
          <h3 className="text-lg mb-8">Payment</h3>

          <div className="grid grid-cols-5 text-sm font-medium mb-6">
            <span>Unit Type</span>
            <span>Size(Sq. Ft.)</span>
            <span>Price(Sq. Ft.)</span>
            <span>Amount</span>
            <span>Booking Amount</span>
          </div>

          <div className="grid grid-cols-5 text-sm">
            <span>{property?.bhk}</span>
            <span>{property?.area} (Carpet Area)</span>
            <span>₹ {property?.pricePerSqFt}</span>
            <span>₹ {property?.price}</span>
            <span>₹ 10%</span>
          </div>
        </div>
      </div>

      {/* <div ref={paymentRef} className="p-10">
        <div className="bg-white p-6 rounded">
          <h2>Payment</h2>
          <p>Price: ₹ {property?.price}</p>
        </div>
      </div> */}
      {/* ================= EMI + REVIEWS ================= */}
      {/* <div
        ref={emiRef}
        className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-10 px-8 scroll-mt-28"
      >
        <div className="bg-gray-300 h-[300px] p-6">
          <h3 className="font-semibold text-lg mb-4">EMI</h3>
          <p className="text-sm">
            Calculator <br />
            (mandatory contact form for using calculator)
          </p>
        </div>

        <div className="bg-gray-300 col-span-2 h-[300px] p-6">
          <h3 className="font-semibold text-lg">Ratings & Reviews</h3>
        </div>
      </div> */}

      <div
        ref={emiRef}
        className="p-10 flex items-center justify-between  max-w-6xl w-full mx-auto"
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
      <div className="max-w-7xl mx-auto flex flex-col gap-6 py-12 px-8 scroll-mt-28">
        {/* <div className="bg-gray-300 p-8">
          <h2 className="text-lg font-medium">About Developer</h2>
        </div> */}

        {property?.developer && (
          <div className="">
            <div className="bg-gray-300 p-2 ">
              <h2 className="text-lg font-medium">About Developer</h2>
              <p>{property?.developer?.name}</p>
              <p>{property?.developer?.description}</p>
            </div>
            <div className="bg-gray-300  p-2">
              <h2 className="text-lg font-medium">Vision</h2>
              <div className="grid grid-cols-4 gap-3">
                {property?.sections?.vision?.map((v, i) => (
                  <div key={i} className="bg-white p-1 rounded text-md">
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-300 p-8">
          <h2 className="text-lg font-medium">Similar Projects</h2>
        </div>

        <div className="bg-gray-300 p-8 h-[160px]">
          <h2 className="text-lg font-medium">Disclaimer</h2>
          <p>{property?.disclaimer}</p>
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
  );
};

export default PropertyDetails;
