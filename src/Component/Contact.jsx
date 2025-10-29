


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import contactImage from "./photos/abou1.jpeg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const ContactUs = () => {
//   const [activeForm, setActiveForm] = useState("contact");

//   return (
//     <div className="bg-gradient-to-br from-[#0e2338] via-[#1c3c59] to-[#274b6d] text-white min-h-screen">
//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <motion.img
//           src={contactImage}
//           alt="Contact"
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//         />
//         <div className="relative z-10 text-center px-6">
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p
//             className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             custom={2}
//           >
//             Contact us directly or list your property with Roots & Roofs.
//           </motion.p>
//         </div>
//       </section>

//       {/* Toggle Buttons */}
//       <div className="flex justify-center space-x-4 mt-10">
//         <button
//           className={`px-6 py-2 rounded-full font-semibold transition ${
//             activeForm === "contact"
//               ? "bg-indigo-700 text-white"
//               : "bg-white text-indigo-700"
//           }`}
//           onClick={() => setActiveForm("contact")}
//         >
//           Contact Form
//         </button>
//         <button
//           className={`px-6 py-2 rounded-full font-semibold transition ${
//             activeForm === "listing"
//               ? "bg-indigo-700 text-white"
//               : "bg-white text-indigo-700"
//           }`}
//           onClick={() => setActiveForm("listing")}
//         >
//           Property Listing Form
//         </button>
//       </div>

//       {/* Forms Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Info cards */}
//           <motion.div className="space-y-8">
//             <InfoCard
//               icon={<FaMapMarkerAlt />}
//               title="Visit Us"
//               text="123 Luxury Street\nIndore, MP 452001"
//             />
//             <InfoCard
//               icon={<FaPhoneAlt />}
//               title="Call Us"
//               text="+91 98765 43210"
//             />
//             <InfoCard
//               icon={<FaEnvelope />}
//               title="Email Us"
//               text="support@rootsandroofs.com"
//             />
//           </motion.div>

//           {/* Right Side Animated Form */}
//           <motion.div
//             key={activeForm}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 overflow-hidden"
//           >
//             <AnimatePresence mode="wait">
//               {activeForm === "contact" ? <ContactForm /> : <ListingForm />}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// /* ======================= COMPONENTS ======================= */

// const InfoCard = ({ icon, title, text }) => (
//   <motion.div
//     variants={fadeInUp}
//     initial="hidden"
//     whileInView="visible"
//     className="flex items-start bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
//   >
//     <div className="text-indigo-300 text-2xl mr-4">{icon}</div>
//     <div>
//       <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
//       <p className="text-gray-200 whitespace-pre-line">{text}</p>
//     </div>
//   </motion.div>
// );

// // Contact Form
// const ContactForm = () => {
//   return (
//     <form className="space-y-4">
//       <h3 className="text-2xl font-bold mb-4 text-indigo-800">
//         Quick Contact
//       </h3>
//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//       />
//       <textarea
//         placeholder="Your Message"
//         rows="4"
//         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//       />
//       <button className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
//         Send Message
//       </button>
//     </form>
//   );
// };

// // Property Listing Form
// const ListingForm = () => {
//   return (
//     <form className="space-y-6 max-h-[450px] overflow-y-auto pr-2">
//       <h3 className="text-2xl font-bold mb-4 text-indigo-800">
//         Property Listing Form
//       </h3>

//       {/* Owner Details */}
//       <Section title="Owner / Agent Details">
//         <Input label="Full Name" required />
//         <Input label="Phone Number" required />
//         <Input label="Email Address" type="email" required />
//         <Select label="Are you the:" options={["Property Owner","Broker/Agent","Developer/Builder"]} />
//       </Section>

//       {/* Property Details */}
//       <Section title="Property Details">
//         <Input label="Property Title" />
//         <Select label="Property Type" options={["Apartment/Flat","Villa","Bungalow","Commercial Space","Plot/Land"]} />
//         <Select label="Category" options={["For Sale","For Rent"]} />
//         <Input label="BHK/Configuration" />
//         <Input label="Total Area (sq.ft.)" />
//         <Input label="Carpet Area (sq.ft.)" />
//         <Input label="Number of Bathrooms" />
//         <Input label="Balconies" />
//         <Select label="Furnishing Status" options={["Fully Furnished","Semi Furnished","Unfurnished"]} />
//         <Input label="Floor Number / Total Floors" />
//         <Select label="Age of Property" options={["New / Under Construction","0–1 Year","1–5 Years","5–10 Years","10+ Years"]} />
//       </Section>

//       {/* Location */}
//       <Section title="Location">
//         <Input label="Full Address" />
//         <Input label="City" />
//         <Input label="State" />
//         <Input label="Pin Code" />
//         <Input label="Google Map Link" />
//       </Section>

//       {/* Pricing */}
//       <Section title="Pricing Details">
//         <Input label="Expected Price (₹)" />
//         <Checkbox label="Price negotiable?" />
//         <Checkbox label="Include maintenance charges in price?" />
//       </Section>

//       {/* Upload */}
//       <Section title="Upload Media">
//         <Input type="file" label="Upload Photos (max 10)" multiple />
//         <Input type="file" label="Upload Video (optional)" />
//       </Section>

//       {/* Additional */}
//       <Section title="Additional Information">
//         <Textarea label="Description" />
//         <div className="grid grid-cols-2 gap-2">
//           {["Parking","Lift","Security","Garden","Power Backup","Swimming Pool","Gym","Clubhouse"].map((item) => (
//             <Checkbox key={item} label={item} />
//           ))}
//         </div>
//         <Textarea label="Message (optional)" />
//       </Section>

//       {/* Declaration */}
//       <Section title="Declaration & Consent">
//         <Checkbox label="I confirm that I am authorized to list this property." />
//         <Checkbox label="I agree to the Privacy Policy and Terms & Conditions." />
//       </Section>

//       <button className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
//         Submit Listing
//       </button>
//     </form>
//   );
// };

// /* ========== SMALL INPUT COMPONENTS ========== */
// const Section = ({ title, children }) => (
//   <div>
//     <h4 className="text-lg font-semibold mb-2 text-indigo-700">{title}</h4>
//     <div className="space-y-3">{children}</div>
//   </div>
// );

// const Input = ({ label, type = "text", ...props }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input
//       type={type}
//       {...props}
//       className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//     />
//   </div>
// );

// const Textarea = ({ label }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <textarea
//       rows="4"
//       className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//     ></textarea>
//   </div>
// );

// const Select = ({ label, options }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
//       {options.map((opt) => (
//         <option key={opt}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// const Checkbox = ({ label }) => (
//   <label className="flex items-center space-x-2 text-sm">
//     <input type="checkbox" className="accent-indigo-600" />
//     <span>{label}</span>
//   </label>
// );

// export default ContactUs;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import contactImage from "./photos/abou1.jpeg";

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
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Visit Us"
              text="123 Luxury Street\nIndore, MP 452001"
            />
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
              {activeForm === "contact" ? <ContactForm /> : <ModernListingForm />}
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
const ContactForm = () => (
  <form className="space-y-4">
    <h3 className="text-2xl font-bold mb-4 text-indigo-800">Quick Contact</h3>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
    />
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
    />
    <button className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
      Send Message
    </button>
  </form>
);

/* ============== MODERN PROPERTY LISTING FORM ============== */
const ModernListingForm = () => {
  const [lookingFor, setLookingFor] = useState("Rent Out");
  const [propertyType, setPropertyType] = useState("Individual");
  const [bedrooms, setBedrooms] = useState("");
  const [agree, setAgree] = useState(true);

  return (
    <form className="space-y-4">
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
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
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
        <div className="flex gap-3">
          {["Apartment", "Individual" , "Plot" , "Commercial"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPropertyType(opt)}
              className={`flex-1 py-2 rounded-full border transition ${
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

      {/* Bedrooms */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">
        Size of area in the property
        </p>
        <div className="flex gap-3">
          {["1", "2", "3", "4+"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setBedrooms(num)}
              className={`flex-1 py-2 rounded-full border transition ${
                bedrooms === num
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select located city
        </label>
        <select className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Pune</option>
          <option>Hyderabad</option>
        </select>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Where is your property located?
        </label>
        <input
          type="text"
          placeholder="Search Locality, Landmark or Tech Park"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter your phone no. (should be available for calls & Whatsapp)
        </label>
        <div className="flex gap-2">
          <span className="flex items-center px-3 border rounded-lg bg-gray-50 border-gray-300">
            +91
          </span>
          <input
            type="tel"
            placeholder="Enter valid phone number"
            className="flex-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email ID
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
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
          I agree to be contacted by Nestaway as per{" "}
          <a href="#" className="text-indigo-600 underline">
            Nestaway's Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 underline">
            T&C
          </a>
          .
        </p>
      </div>

      {/* Continue Button */}
      <button
        disabled={!agree}
        className={`w-full py-3 rounded-full font-semibold ${
          agree
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        CONTINUE
      </button>
    </form>
  );
};

export default ContactUs;