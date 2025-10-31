  import { useState, useEffect, useRef } from "react";
  import { FaArrowRight, FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
  import { motion, AnimatePresence } from "framer-motion";
  import contactImg from "./photos/banner.png"; // Or update path if needed
  import FAQSection from "./FAQ";
  import Onestop from "./Onestop";
  import EMICalculator from "../Component/EMICalculator"; // Make sure this exists
  import HomeLoanEligiblityCalculator from "./HomeLoanEligiblityCalculator";
  import {
    FaWrench,
    FaKey,
    FaHandshake,
    FaRegSmile,
    FaUserCheck,
    FaChartLine,
  } from "react-icons/fa";
  import AreaConverter from "./AreaConverter";
  import ComparisonTable from "./ComparisonTable"
  import { useLocation } from "react-router-dom";


  const features = [
    {
      title: "Upkeep & Maintenance",
      description:
        "From fresh paint and renovations to minor fixes, we handle it all with full cost transparency. You only pay the actual billed amount.",
      icon: <FaWrench className="text-5xl text-[#0e2338]" />,
    },
    {
      title: "Rental Assistance",
      description:
        "We help you find reliable tenants — from showcasing your property to closing the deal, we ensure a smooth experience.",
      icon: <FaKey className="text-5xl text-[#0e2338]" />,
    },
    {
      title: "Fair Brokerage",
      description:
        "We maintain transparency by charging a one-month brokerage fee from both owner and tenant — fair and balanced.",
      icon: <FaHandshake className="text-5xl text-[#0e2338]" />,
    },
    {
      title: "Peace of Mind",
      description:
        "No need for frequent travel. Hand over your property once, and we’ll manage it as if it were our own.",
      icon: <FaRegSmile className="text-5xl text-[#0e2338]" />,
    },
    {
      title: "KYC-Verified Tenants",
      description:
        "Our thorough KYC and verification process ensures only trustworthy, quality tenants occupy your property.",
      icon: <FaUserCheck className="text-5xl text-[#0e2338]" />,
    },
    {
      title: "Unparalleled Expertise",
      description:
        "With 8+ years in the real estate industry, we currently oversee transactions worth ₹2000+ Crore.",
      icon: <FaChartLine className="text-5xl text-[#0e2338]" />,
    },
  ];

  const expertiseData = [
    {
      title: "Architecture",
      number: "01/",
      items: [
        "3D Visualization & Rendering",
        "VR Services",
        "Architectural Design",
        "Construction Documentation",
        "BIM & Digital Modeling",
        "Site Planning & Master Planning",
        "Spatial Layout & Optimization",
      ],
    },
    {
      title: "Interior & Experience",
      number: "02/",
      items: [
        "Space Planning & Flow",
        "Furniture & Fixture Selection",
        "Material & Texture Curation",
        "Lighting & Ambience Design",
        "Art & Accessory Styling",
        "Custom Cabinetry & Millwork",
        "Indoor Greenery & Biophilic Design",
      ],
    },
    {
      title: "Strategic Consulting",
      number: "03/",
      items: [
        "Site & Building Code Guidance",
        "Design & Concept Advisory",
        "Budgeting & Cost Estimation",
        "Sustainability & Efficiency Planning",
        "Technical Consulting & Feasibility Analysis",
        "On-on-One Personalized Consultation",
      ],
    },
    {
      title: "Project Leadership & Management",
      number: "04/",
      items: [
        "Construction Strategy & Planning",
        "Site Supervision & Quality",
        "Budget & Resource Optimization",
        "Scheduling & Milestone",
        "Contractor & Vendor",
        "Final Inspection & Project Handover",
      ],
    },
  ];

  const ExpertiseSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef(null);
    const [showEmiForm , setShowEmiForm] = useState(false);
    const location = useLocation();

    useEffect(()=>{
      if(location?.state?.scrollTo){
        const sectionId = location?.state?.scrollTo;

        setTimeout(()=>{
            const element = document.getElementById(sectionId);
            if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        } , 300)
      }
    } , [location]);


    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
    });

    useEffect(() => {
      if (!showEmiForm) {
        const interval = setInterval(() => {
          setShowPopup(true);
        }, 20000);
        return () => clearInterval(interval);
      }
    }, [showEmiForm]);

    useEffect(() => {
      if (showPopup) {
        const timeout = setTimeout(() => setShowPopup(false), 5000); // hide after 5 seconds
        return () => clearTimeout(timeout);
      }
    }, [showPopup]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const dataToSend = {
        formType: "ExpertiseCallback",
        name: formData.name || "",
        surname: "",
        email: formData.email || "",
        message: "",
        phone: formData.phone || "",
        subject: "",
        contactUsType: "",
      };

      try {
        const res = await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        console.log("Response:", res);
        alert("Form submitted successfully!");
        setSubmitted(true); // ✅ Keep this true permanently
        setShowPopup(false);
        setShowEmiForm(true); // Show EMI Calculator after submission
        setFormData({ name: "", phone: "", email: "" });

        // 🔴 REMOVE THIS LINE:
        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        console.error("Submission failed", error);
      }
    };

    const handleEmiClick = () => {
      if (!showEmiForm) {
        // Scroll to the form
        const formElement = document.getElementById("lets-talk");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    return (
      <>
  



        <section className="relative bg-gradient-to-br from-[#f8fafc] via-[#eef3f9] to-[#dbeafe] py-28 px-6 md:px-20 overflow-hidden">
    {/* Decorative Background Orbs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#0e2338] via-[#1e3a8a] to-[#2563eb] rounded-full opacity-20 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/20 rounded-full blur-3xl"></div>

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative text-center mb-20 z-10"
    >
      <h2 className="text-5xl md:text-6xl font-[tinos] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0e2338] via-[#1e3a8a] to-[#2563eb] drop-shadow-md">
        Apki Property, Humari Zimmedari
      </h2>
      <p className="text-xl font-[tinos] text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
        Complete Property Care & Rental Management with <span className="font-semibold text-[#0e2338]">Trust & Transparency</span>.
      </p>
    </motion.div>

    {/* Features Grid */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group relative flex items-start gap-6 p-8 rounded-3xl 
                    bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    border border-white/40 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] 
                    transition-all duration-500 hover:-translate-y-2"
        >
          {/* Floating Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

          {/* Icon */}
          <div className="relative z-10 p-6 border-2 border-[#0e2338]/20 rounded-2xl 
                          bg-gradient-to-br from-white/70 to-gray-50/50 shadow-lg 
                          group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <div className="text-4xl text-[#0e2338]">{feature.icon}</div>
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-2xl font-[tinos] font-semibold text-[#0e2338] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>


  <Onestop/>


        {/* EMI Calculator Section */}
        <section id="emi-calculator" className={`mt-10 relative max-w-4xl mx-auto px-6  `}>
          {!showEmiForm && (
            <div className="absolute z-50  left-0 h-full flex flex-col gap-2 items-center justify-center top-0 text-center w-full">
              <p className="text-red-600 font-semibold">
                ⚠️ Please fill the Lets Talk form above to access the EMI
                Calculator
              </p>
              <button
                onClick={handleEmiClick}
                className="cursor-pointer bg-yellow-700 text-white  px-2 py-2 rounded-[8px]"
              >
                Click to go on form
              </button>
            </div>
          )}
          <div
            className={`transition-all duration-500 relative ${
              !showEmiForm ? "blur-sm pointer-events-none select-none" : "blur-0"
            }`}
          >
            <EMICalculator />
          </div>
        </section>

  <section id="loan-calculator">
          <HomeLoanEligiblityCalculator/>
  </section>

  <section id="area-calculator">
          <AreaConverter/>
  </section>

          <ComparisonTable/>

        {/* FAQ Section */}
        <FAQSection />


        <section className="bg-white text-slate-900 py-20 px-6 md:px-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="bg-slate-900 text-white rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">Our Expertise</h3>
                <p className="mt-2 text-sm md:text-base text-slate-300 max-w-md">
                  Bringing vision to life with precision, creativity, and
                  innovation.
                </p>
              </div>
              <button className="mt-6 md:mt-0 flex items-center gap-2 bg-white text-slate-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
                Explore our services <FaArrowRight className="text-blue-600" />
              </button>
            </div>

            <div className="grid gap-12">
              {expertiseData.map((item, idx) => (
                <div key={idx} className="md:flex items-start gap-12">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <p className="text-lg text-slate-400">{item.number}</p>
                    <h4 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <div className="md:w-3/4 flex flex-wrap gap-2">
                    {item.items.map((service, i) => (
                      <span
                        key={i}
                        className="text-sm bg-slate-700 hover:bg-slate-600 transition px-3 py-1 rounded-md"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AnimatePresence>
            {showPopup && !showEmiForm && (
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-xl border border-green-200 p-4 rounded-xl"
              >
                <p className="text-sm text-gray-800">
                  👋 Please fill out the Let's Talk form to access the EMI
                  Calculator.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>


        {/* FORM SECTION */}
        <section
          ref={formRef}
          id="lets-talk"
          className="relative mt-24 max-w-6xl mx-auto px-4 md:px-10"
        >
          {/* Background Blobs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-72 h-72 bg-green-300/30 rounded-full blur-3xl z-0"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl z-0"
          />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Left Image */}
            <div className="hidden md:block col-span-1 relative">
              <img
                src={contactImg}
                alt="Contact"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 via-transparent to-transparent" />
            </div>

            {/* Center Text */}
            <div className="col-span-1 px-6 py-10 md:py-16 flex flex-col justify-center text-center md:text-left bg-white/40 backdrop-blur-md">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-extrabold text-gray-800 leading-tight"
              >
                Let’s Talk
              </motion.h2>
              <p className="mt-4 text-gray-600 text-lg">
                Share your details and we'll call you back shortly.
              </p>
              <div className="mt-6 hidden md:block">
                <div className="w-20 h-1 bg-green-500 rounded-full" />
              </div>
            </div>

            {/* Form */}
            <div className="col-span-1 px-6 py-10 md:py-16 bg-white/60 backdrop-blur-md">
              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="space-y-6"
              >
                {/* Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="relative group"
                >
                  <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="relative group"
                >
                  <FaPhoneAlt className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="relative group"
                >
                  <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                  />
                </motion.div>

                {/* Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-300 transition-all"
                  >
                    Request Callback
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>

          {/* ✅ Success Popup */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="fixed inset-0 flex items-center justify-center z-50"
              >
                <div className="bg-white rounded-2xl shadow-2xl px-10 py-8 text-center border border-green-200">
                  <motion.div
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-5xl mb-4 text-green-500"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">We'll call you back shortly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </>
    );
  };

  export default ExpertiseSection;



