// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHome,
//   FaSearch,
//   FaFileContract,
//   FaHandshake,
//   FaMoneyCheckAlt,
//   FaKey,
//   FaHandsHelping,
//   FaRegSmile,
// } from "react-icons/fa";

// // Steps Data
// const steps = [
//   { title: "Plan Your Dream Home", description: "Define your budget, style, and location with confidence.", icon: <FaHome /> },
//   { title: "Explore & Shortlist", description: "Browse the best options and narrow down what suits you.", icon: <FaSearch /> },
//   { title: "Legal Safety Checks", description: "We verify all documents to ensure a secure investment.", icon: <FaFileContract /> },
//   { title: "Seal the Deal", description: "Fair, transparent agreements to finalize your dream home.", icon: <FaHandshake /> },
//   { title: "Easy Loan Help", description: "Simple guidance and loan support for a smooth purchase.", icon: <FaMoneyCheckAlt /> },
//   { title: "Officially Yours", description: "Get the keys and make it officially your home.", icon: <FaKey /> },
//   { title: "Welcome Home!", description: "Move in easily — we’ll help make it seamless.", icon: <FaHandsHelping /> },
//   { title: "We’re Still With You", description: "After the handover, we remain for support and care.", icon: <FaRegSmile /> },
// ];

// export default function StepsSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-28 px-6 md:px-20">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mb-24"
//       >
//         <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
//           Your Home Journey
//         </h2>
//         <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
//           From planning to moving in —{" "}
//           <span className="font-semibold text-gray-900">Roots & Roofs</span> walks with you every step.
//         </p>
//       </motion.div>

//       {/* Steps Grid */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="relative group w-full h-48 cursor-pointer [perspective:1200px]"
//             initial={{ opacity: 0, rotateY: 90 }}
//             whileInView={{ opacity: 1, rotateY: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
//             viewport={{ once: true }}
//           >
//             {/* Inner Flip Container */}
//             <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//               {/* Front Face */}
//               <div className="absolute inset-0 flex items-center gap-6 p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-200 [backface-visibility:hidden]">
//                 <div className="flex-shrink-0 text-4xl text-white bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-xl shadow-md">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {step.title}
//                 </h3>
//               </div>

//               {/* Back Face */}
//               <div className="absolute inset-0 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg border border-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                 <p className="text-center text-lg leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="mt-28 text-center"
//       >
//         <h3 className="text-2xl md:text-3xl font-semibold mb-6">
//           Ready to Begin Your Journey?
//         </h3>
//         <motion.button
//           whileHover={{ scale: 1.08, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-medium px-12 py-4 rounded-2xl shadow-lg transition-all"
//         >
//           Connect with Us
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaSearch,
  FaFileContract,
  FaHandshake,
  FaMoneyCheckAlt,
  FaKey,
  FaHandsHelping,
  FaRegSmile,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const steps = [
  { title: "Plan Your Dream Home", description: "Define your budget, style, and location with confidence.", icon: <FaHome /> },
  { title: "Explore & Shortlist", description: "Browse the best options and narrow down what suits you.", icon: <FaSearch /> },
  { title: "Legal Safety Checks", description: "We verify all documents to ensure a secure investment.", icon: <FaFileContract /> },
  { title: "Seal the Deal", description: "Fair, transparent agreements to finalize your dream home.", icon: <FaHandshake /> },
  { title: "Easy Loan Help", description: "Simple guidance and loan support for a smooth purchase.", icon: <FaMoneyCheckAlt /> },
  { title: "Officially Yours", description: "Get the keys and make it officially your home.", icon: <FaKey /> },
  { title: "Welcome Home!", description: "Move in easily — we'll help make it seamless.", icon: <FaHandsHelping /> },
  { title: "We're Still With You", description: "After the handover, we remain for support and care.", icon: <FaRegSmile /> },
];

export default function StepsSection() {
  const [flipped, setFlipped] = useState({});
  const navigate = useNavigate();

  const handleFlip = (index, isHovering) => {
    setFlipped(prev => ({
      ...prev,
      [index]: isHovering
    }));
  };

  return (
    <section className="relative overflow-hidden py-32 px-6 md:px-20 bg-[#1a2a3a] min-h-screen">
      {/* ===== Professional Dark Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238]"></div>

      {/* ===== Glassmorphic Circular Accents - Full Page ===== */}
      {/* Top Left Blue Circle */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 30%, #3b82f6, #1e40af)"
        }}
      />

      {/* Right Middle Blue Circle */}
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 70%, #60a5fa, #1e3a8a)"
        }}
      />

      {/* Bottom Left Blue Circle */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 40% 60%, #0ea5e9, #0369a1)"
        }}
      />

      {/* Bottom Right Blue Circle */}
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0ea5e9, #1e40af)"
        }}
      />

      {/* Center Light Blue Accent */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[130px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7cc933, #3b82f6)"
        }}
      />

      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center mb-20 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Your Home Journey
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
          From planning to moving in — <span className="font-semibold text-[#7cc933]">Roots & Roofs</span> walks with you every step.
        </p>
      </motion.div>

      {/* ===== Steps Grid ===== */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10 mb-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="h-48 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => handleFlip(index, true)}
            onMouseLeave={() => handleFlip(index, false)}
          >
            {/* 3D Flip Container */}
            <motion.div
              className="relative w-full h-full [perspective:1200px]"
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* Front Face */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-6 flex items-start gap-5"
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#7cc933] to-[#5fa02b] flex items-center justify-center text-white text-xl shadow-lg">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2">Hover to see details</p>
                </div>
              </motion.div>

              {/* Back Face */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6]/30 via-[#1e40af]/30 to-[#0369a1]/30 backdrop-blur-xl border border-white/20 shadow-xl p-6 flex items-center justify-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <div className="text-center">
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base font-medium">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-4">Hover away to flip back</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ===== Connection Line ===== */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-0 top-96 bottom-0 w-1 bg-gradient-to-b from-[#7cc933] via-[#3b82f6]/30 to-transparent"></div>

      {/* ===== CTA Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center z-10 pt-12 border-t border-white/10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
          Ready to Begin Your Journey?
        </h3>
        <p className="text-gray-300 mb-8 font-medium">Start your home search with Roots & Roofs today</p>
        
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(124, 201, 51, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
           onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-[#7cc933] to-[#5fa02b] cursor-pointer text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Connect with Us
        </motion.button>
      </motion.div>
    </section>
  );
}