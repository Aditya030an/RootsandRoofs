import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImage from "./photos/abou1.jpeg";
import { useLocation } from "react-router-dom";

// const GOOGLE_SHEET_URL = 
//   "https://script.google.com/macros/s/AKfycbxG1QObuvp4PQUoVfysygo5Kn5Tho_AUlJWKxwrzAnMdWnkyziHdI-EqphokuY4gOsd/exec";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactUs = () => {
  const [activeForm, setActiveForm] = useState("contact");
  const location = useLocation();

  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, []);

  useEffect(() => {
    if (location.state?.openTab) {
      setActiveForm(location.state.openTab);
    }
  }, [location]);

  return (
    <div className="bg-gradient-to-br from-[#0e2338] via-[#1c3c59] to-[#274b6d] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={contactImage}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Contact us directly or list your property with Roots & Roofs.
          </motion.p>
        </div>
      </section>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mt-10">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeForm === "contact"
              ? "bg-indigo-700 text-white"
              : "bg-white text-indigo-700"
          }`}
          onClick={() => setActiveForm("contact")}
        >
          Contact Form
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeForm === "listing"
              ? "bg-indigo-700 text-white"
              : "bg-white text-indigo-700"
          }`}
          onClick={() => setActiveForm("listing")}
        >
          Property Listing Form
        </button>
      </div>

      {/* Forms Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div className="space-y-8">
            {/* <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Visit Us"
              text="123 Luxury Street\nIndore, MP 452001"
            /> */}
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Call Us"
              text="+91 98765 43210"
            />
            <InfoCard
              icon={<FaEnvelope />}
              title="Email Us"
              text="support@rootsandroofs.com"
            />
          </motion.div>

          {/* Animated Form Section */}
          <motion.div
            key={activeForm}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {activeForm === "contact" ? (
                <ContactForm />
              ) : (
                <ModernListingForm />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* ============== INFO CARD ============== */
const InfoCard = ({ icon, title, text }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    className="flex items-start bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
  >
    <div className="text-indigo-300 text-2xl mr-4">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
      <p className="text-gray-200 whitespace-pre-line">{text}</p>
    </div>
  </motion.div>
);

/* ============== CONTACT FORM ============== */

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ⭐ Add your script URL

  const validateForm = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Name is required";

    if (!formData.phone.trim()) temp.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      temp.phone = "Phone must be 10 digits";

    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Invalid email format";

    if (!formData.message.trim()) temp.message = "Message is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

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
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      alert("Submitted Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Error occured. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Quick Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Message"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message}</p>
      )}

      <button
        type="submit"
        className={`w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition ${loading ? "cursor-wait" : "cursor-pointer"}`}
      >
         {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span className="ml-2">Submitting...</span>
          </div>
        ) : (
          "Submit"
        )}
       
      </button>
    </form>
  );
};

/* ============== MODERN PROPERTY LISTING FORM ============== */
const ModernListingForm = () => {
  const [ownerName, setOwnerName] = useState("");
  const [lookingFor, setLookingFor] = useState("Rent Out");
  const [propertyType, setPropertyType] = useState("Individual");
  const [propertySize, setPropertySize] = useState("");
  const [agree, setAgree] = useState(true);
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 🏙 Popular Indore locations
  const indoreLocations = [
    "Vijay Nagar",
    "Bhawarkua",
    "Palasia",
    "Rajendra Nagar",
    "Rau",
    "Nipania",
    "Scheme No. 78",
    "Khajrana",
    "Tilak Nagar",
    "Annapurna",
    "Sudama Nagar",
    "AB Road",
    "LIG Colony",
    "MG Road",
    "Old Palasia",
    "New Palasia",
    "Yeshwant Club Road",
    "Pipliyahana",
    "Bhawrasla",
    "Chhoti Gwaltoli",
  ];

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocation(input);

    // If input is empty → show top localities
    if (input.trim() === "") {
      setFilteredLocations(indoreLocations.slice(0, 5)); // show top 5
      setShowSuggestions(true);
      return;
    }

    // Otherwise → filter by input
    const filtered = indoreLocations.filter((loc) =>
      loc.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredLocations(filtered);
    setShowSuggestions(true);
  };

  const handleSelectLocation = (loc) => {
    setLocation(loc); // fill input
    setShowSuggestions(false);
  };

  const validateForm = () => {
    let temp = {};
    if (!ownerName.trim())
      temp.ownerName = "Name of the property owner is required";
    if (!location.trim()) temp.location = "Property location is required";
    if (!propertySize) temp.propertySize = "Please select property size";
    if (!phone.trim()) temp.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(phone))
      temp.phone = "Phone number must be 10 digits";
    if (!email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Email is invalid";
    if (!agree) temp.agree = "You must agree before continuing";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const formData = {
      formType: "property",
      ownerName,
      lookingFor,
      propertyType,
      propertySize,
      city: "Indore",
      location,
      phone,
      email,
      agree: agree ? "Yes" : "No",
    };

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Form submitted successfully!");
      // Reset form
      setOwnerName("");
      setLookingFor("Rent Out");
      setPropertyType("Individual");
      setPropertySize("");
      setLocation("");
      setPhone("");
      setEmail("");
      setAgree(true);
      setFilteredLocations([]);
      setShowSuggestions(false);
      setErrors({});
    } catch (error) {
      alert("Error submitting form. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative">
      <h3 className="text-2xl font-bold mb-4 text-indigo-800">
        Property Listing Form
      </h3>

      {/* Owner Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name of the Property Owner
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {errors.ownerName && (
          <p className="text-red-500 text-sm">{errors.ownerName}</p>
        )}
      </div>

      {/* Looking For */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">Looking for</p>
        <div className="flex gap-3">
          {["Rent Out", "Sell"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setLookingFor(opt)}
              className={`flex-1 py-2 rounded-full border transition ${
                lookingFor === opt
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Choose your Property type
        </p>
        <div className="flex gap-3 flex-wrap">
          {["Apartment", "Individual", "Plot", "Commercial"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPropertyType(opt)}
              className={`flex-1 py-2 px-4 rounded-full border transition ${
                propertyType === opt
                  ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Area Size */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Size of area in the property
        </p>
        <div className="flex gap-3">
          {["1", "2", "3", "4+"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPropertySize(num)}
              className={`flex-1 py-2 rounded-full border transition ${
                propertySize === num
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
        {errors.propertySize && (
          <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-mediumtext-gray-700 mb-1">
          Select located city
        </label>
        <select
          value="Indore"
          disabled
          className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option>Indore</option>
        </select>
      </div>

      {/* Location Search */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Where is your property located?
        </label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Search Locality, Landmark or Tech Park"
          required
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
          onFocus={() => {
            if (location.trim() === "") {
              setFilteredLocations(indoreLocations.slice(0, 5));
            }
            setShowSuggestions(true);
          }}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location}</p>
        )}

        {/* Suggestions Dropdown */}
        {showSuggestions && filteredLocations.length > 0 && (
          <ul className="absolute z-10 bg-white border rounded-lg mt-1 w-full shadow-lg max-h-40 overflow-y-auto">
            {filteredLocations.map((loc) => (
              <li
                key={loc}
                onClick={() => handleSelectLocation(loc)}
                className="p-2 hover:bg-indigo-100 cursor-pointer w-full text-gray-700"
              >
                {loc}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Phone */}
      <div className="w-full">
        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
          Enter your phone no.{" "}
          <span className="block sm:inline text-gray-500 text-xs sm:text-sm">
            (should be available for calls & WhatsApp)
          </span>
        </label>

        <div className="flex flex-col sm:flex-row gap-2">
          <span className="flex items-center justify-center px-4 py-3 border rounded-lg bg-gray-50 border-gray-300 text-gray-700 text-sm sm:text-base">
            +91
          </span>

          <input
            type="tel"
            placeholder="Enter valid phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email ID
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mt-1 accent-indigo-600"
        />
        <p className="text-gray-600">
          I agree to be contacted by Roots & Roofs as per{" "}
          <a href="#" className="text-indigo-600 underline">
            Roots & Roofs Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 underline">
            T&C
          </a>
          .
        </p>
      </div>
      {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

      {/* Continue Button */}
      <button
        disabled={!agree}
        type="submit"
        className={`w-full py-3 rounded-full font-semibold ${
          agree
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }  ${loading ? "cursor-wait" : "cursor-pointer"}`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          "CONTINUE"
        )}
      </button>
    </form>
  );
};

export default ContactUs;
