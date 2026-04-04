import { useState } from "react";
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
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate, useRoutes } from "react-router-dom";

import { MdOutlineSelfImprovement } from "react-icons/md";

const steps = [
  {
    title: "Plan Your Dream Home",
    description: "Define your budget, style, and location with confidence.",
    icon: <FaHome />,
  },
  {
    title: "Explore & Shortlist",
    description: "Browse the best options and narrow down what suits you.",
    icon: <FaSearch />,
  },
  {
    title: "Legal Safety Checks",
    description: "We verify all documents to ensure a secure investment.",
    icon: <FaFileContract />,
  },
  {
    title: "Seal the Deal",
    description: "Fair, transparent agreements to finalize your dream home.",
    icon: <FaHandshake />,
  },
  {
    title: "Easy Loan Help",
    description: "Simple guidance and loan support for a smooth purchase.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Officially Yours",
    description: "Get the keys and make it officially your home.",
    icon: <FaKey />,
  },
  {
    title: "Welcome Home!",
    description: "Move in easily — we'll help make it seamless.",
    icon: <FaHandsHelping />,
  },
  {
    title: "We're Still With You",
    description: "After the handover, we remain for support and care.",
    icon: <FaRegSmile />,
  },
];

export default function StepsSection() {
  const [flipped, setFlipped] = useState({});
  const navigate = useNavigate();

  const handleFlip = (index, isHovering) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: isHovering,
    }));
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-32 px-4 sm:px-8 md:px-16 bg-[#1a2a3a] min-h-screen">
      {/* ===== Gradient Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238]" />

      {/* ===== Animated Circles (Glassmorphic Effect) ===== */}
      {[
        {
          className:
            "absolute -top-40 -left-32 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px]",
          gradient: "radial-gradient(circle at 30% 30%, #3b82f6, #1e40af)",
          duration: 8,
        },
        {
          className:
            "absolute top-1/3 -right-40 w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px]",
          gradient: "radial-gradient(circle at 70% 70%, #60a5fa, #1e3a8a)",
          duration: 10,
          delay: 1,
        },
        {
          className:
            "absolute -bottom-32 left-1/4 w-[350px] sm:w-[400px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px]",
          gradient: "radial-gradient(circle at 40% 60%, #0ea5e9, #0369a1)",
          duration: 12,
          delay: 2,
        },
        {
          className:
            "absolute -bottom-20 -right-20 w-[400px] sm:w-[450px] md:w-[500px] h-[400px] sm:h-[450px] md:h-[500px]",
          gradient: "radial-gradient(circle, #0ea5e9, #1e40af)",
          duration: 11,
          delay: 3,
        },
      ].map((circle, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            y: [0, i % 2 === 0 ? -20 : 20, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay || 0,
          }}
          className={`${circle.className} rounded-full blur-[100px] sm:blur-[120px] opacity-25 pointer-events-none`}
          style={{ background: circle.gradient }}
        />
      ))}

      {/* ===== Center Accent Light ===== */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[100px] sm:blur-[130px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7cc933, #3b82f6)" }}
      />

      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center mb-16 sm:mb-20 z-10 px-2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Your Home Journey
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
          From planning to moving in —{" "}
          <span className="font-semibold text-[#7cc933]">Roots & Roofs</span>{" "}
          walks with you every step.
        </p>
      </motion.div>

      {/* ===== Steps Grid ===== */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto z-10 mb-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="h-44 cursor-pointer  "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => handleFlip(index, true)}
            onMouseLeave={() => handleFlip(index, false)}
          >
            <motion.div
              className="relative w-full h-full [perspective:1200px] "
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl  border border-white/20 shadow-lg p-6 flex items-start gap-5 transition-transform duration-500"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#7cc933] to-[#5fa02b] flex items-center justify-center text-white text-xl shadow-lg">
                  {step.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    Hover to see details
                  </p>
                </div>
              </motion.div>

              {/* Back Face */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6]/30 via-[#1e40af]/30 to-[#0369a1]/30 backdrop-blur-xl border border-white/20 shadow-xl p-6 flex items-center justify-center transition-transform duration-500"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="text-center px-2 sm:px-4">
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-3 sm:mt-4">
                    Hover away to flip back
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ===== Connection Line (Desktop Only) ===== */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-0 top-96 bottom-0 w-1 bg-gradient-to-b from-[#7cc933] via-[#3b82f6]/30 to-transparent"></div>

      {/* ===== CTA Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center z-10 pt-12 border-t border-white/10 px-2"
      >
        {/* <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
         
          <div className="bg-[#14233b] rounded-2xl p-6 flex-1 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaKey className="text-yellow-400 text-2xl" />
              <h2 className="text-xl font-semibold text-white">
                Welcome Home!
              </h2>
            </div>
            <ul className="space-y-2 text-gray-200 text-sm md:text-base text-start leading-relaxed">
              <li>1. Get your possession letter from the builder/seller.</li>
              <li>2. Take physical handover of your home.</li>
              <li>3. Society/NOC clearances (for apartments) are managed.</li>
            </ul>
          </div>

          
          <div className="bg-[#14233b] rounded-2xl p-6 flex-1 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaFileAlt className="text-blue-400 text-2xl" />
              <h2 className="text-xl font-semibold text-white">
                We’re still with you!
              </h2>
            </div>
            <ul className="space-y-2 text-gray-200 text-sm md:text-base text-start leading-relaxed">
              <li>1. Transfer property tax records.</li>
              <li>2. Update utility connections (electricity, water, gas).</li>
              <li>3. Mutation of property in local records.</li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto mt-1 flex items-center  bg-white text-[#0f1b2b] rounded-2xl shadow-lg py-4 px-2 text-center">
          <div className="w-[15%] flex justify-center ">
            <MdOutlineSelfImprovement className="text-8xl text-[#0f1b2b]" />
          </div>

          <div className=" w-full flex flex-col  text-center  ">
            <h3 className="text-lg md:text-4xl font-semibold mb-2">
              Feeling Overwhelmed?
            </h3>

            <p className="text-sm md:text-base text-gray-700 mt-3">
              Sit back, relax and have some Chai... because
              <span className="font-semibold"> Roots & Roofs</span> will handle
              it for you!!
            </p>
          </div>

          {/* <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(124, 201, 51, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate.push("/contact")}
              className="hidden md:flex bg-gradient-to-r from-[#7cc933] to-[#5fa02b] cursor-pointer text-white font-semibold px-8 sm:px-3 py-3 sm:py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Connect with Us
            </motion.button> */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(124, 201, 51, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
             onClick={() => navigate("/Contact" , {state:{scrollTo:"contact-Us"}})}
            className="w-[22%] bg-gradient-to-r from-[#7cc933] to-[#5fa02b] cursor-pointer text-white font-semibold px-3 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Connect with Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
