import React, { useEffect, useRef } from "react"; // ✅ add useRef here
import FAQSection from "./FAQ";
import Scroll from "./Scroll";
import bg from "./photos/pic.jpeg";
// import logo from "./photos/Finallogo.png";
import logo from "./photos/Finallogo2.png";
// import logo from "./photos/logo2.jpg";
import villa1 from "./photos/villa55.jpeg";
import villa2 from "./photos/villa2.avif";
import villa3 from "./photos/villa3.avif";
import { motion, useMotionValue, useSpring } from "framer-motion"; // ✅ moved useMotionValue, useSpring here
import flat1 from "./photos/villa2.avif";
import flat2 from "./photos/villa3.avif";
import flat3 from "./photos/villa1.avif";

import com1 from "./photos/villa3.avif";
import com2 from "./photos/villa2.avif";
import com3 from "./photos/villa1.avif";
import cover from "./photos/bg.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import ServicesHighlight from "./ServicesHighlight";

const collections = [
  { title: "New Projects", image: villa1 },
  { title: "Ready to Move", image: flat1 },
  { title: "Luxury", image: flat3 },
  { title: "Budget Friendly", image: villa3 },
  { title: "Condominiums", image: com1 },
  { title: "Builder Floors", image: flat2 },
  { title: "For Bachelors", image: villa2 },
  { title: "Row Houses", image: com3 },
];

const Home = () => {
  // ✅ magnetic button logic must be inside component
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const navigate = useNavigate();

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className=" w-full sticky top-0 z-0 bg-white text-center font-serif relative overflow-hidden">
        <div className="w-full h-[90vh] relative overflow-hidden">
          {/* Background Video */}
          <video
            src={cover} // imported video path
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Lighter Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0" />

          {/* Content over video */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
            {/* Animated Logo */}
            <motion.img
              src={logo}
              alt="Roots & Roofs"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-44 md:w-52 shadow-lg mb-6"
            />

            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold font-[tinos] text-white px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              Discover Your Dream Place With Us
            </motion.h1>
          </div>
        </div>
      </section>

      <Scroll className="section "></Scroll>

      <section
        className="relative   z-10 w-full min-h-screen bg-cover bg-center flex items-center px-6 md:px-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay for subtle darkening */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h1 className="text-4xl md:text-5xl font-[tinos] font-bold text-black leading-tight mb-6">
              Soch rhe ho Why choose Roots & Roofs?
            </h1>
            <p className="text-gray-800 font-[tinos] text-xl max-w-md">
              Because we’re more than just agents — we’re your complete one-stop
              realty partner.
            </p>
          </div>

          {/* RIGHT AWARDS BLOCK */}
          <div className="grid gap-6">
            {/* AWARD CARD 1 */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl text-gray-800 w-full max-w-md">
              <div className="flex flex-col items-start space-y-2">
                <div>
                  <h4 className="text-sm font-bold uppercase text-gray-600 tracking-widest">
                    Complete Property Management Service
                  </h4>
                </div>

                <p className="text-sm text-gray-700">
                  At Roots & Roofs, for property owners who live away from their
                  property, Roots & Roofs offers a hassle-free property
                  management solution. From regular maintenance to rental
                  assistance, we ensure your property is always in safe hand.
                </p>
              </div>
            </div>

            {/* AWARD CARD 2 */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl text-gray-800 w-full max-w-md">
              <div className="flex flex-col items-start space-y-2">
                <div>
                  <h4 className="text-sm font-bold uppercase text-gray-600 tracking-widest">
                    Your One Stop Realty Solution
                  </h4>
                </div>

                <p className="text-sm text-gray-700">
                  Buying or Renting a property is a long process. But we have
                  got it all covered for you under one roof! We have expanded
                  our services for your comfort.. <br />
                  <br />
                  Because Sapne se deed tak.. Hum apke sath hai!..
                </p>
              </div>
            </div>
            {/* <motion.button
        ref={ref}
        className="relative px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden group backdrop-blur-md border border-white/20 shadow-xl"
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#86C24D] to-[#1c8cff] transition-transform transform group-hover:scale-110 group-hover:rotate-2 duration-700 ease-out" />
        <span className="relative z-10">Start Your Project</span>
      </motion.button> */}
            <div className="flex justify-center items-center pt-4 pb-18">
              <a href="/Services">
                <motion.button
                  ref={ref}
                  className="relative px-6 py-2 text-base font-semibold text-white rounded-full overflow-hidden group backdrop-blur-md border border-white/20 shadow-lg"
                  style={{ x: springX, y: springY }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#86C24D] to-[#1c8cff] transition-transform transform group-hover:scale-110 group-hover:rotate-2 duration-700 ease-out" />
                  <span className="relative z-10">Start Your Project</span>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>
    
    
      {/* Highlight Services Section */}
      <section>
  <ServicesHighlight />
</section>
      <section className="relative z-10 bg-gradient-to-br from-white via-[#f8fafc] to-[#e0f2fe] py-20 px-6 md:px-16 font-[tinos]">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our Smart Tools
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simplify your financial planning with our easy-to-use calculators —
            built to save your time and make smarter decisions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 - EMI Calculator */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-[#1c8cff] text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              EMI Calculator
            </h3>
            <p className="text-gray-600 mb-6">
              Calculate your monthly loan installments instantly and plan your
              payments smarter.
            </p>
            <button
              onClick={()=>navigate("/Services" , { state: { scrollTo: "emi-calculator" } })}
              className="relative px-6 py-2 text-base font-semibold text-white rounded-full overflow-hidden group border border-white/20 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#86C24D] to-[#1c8cff] transition-transform transform group-hover:scale-110 duration-700 ease-out" />
              <span className="relative z-10">Try Now</span>
            </button>
          </motion.div>

          {/* Card 2 - Loan Calculator */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-[#86C24D] text-5xl mb-4">🏦</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Loan Calculator
            </h3>
            <p className="text-gray-600 mb-6">
              Estimate your total loan amount, interest, and duration easily in
              seconds.
            </p>
            <button
              onClick={()=>navigate("/Services" , { state: { scrollTo: "loan-calculator" } })}
              className="relative px-6 py-2 text-base font-semibold text-white rounded-full overflow-hidden group border border-white/20 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1c8cff] to-[#86C24D] transition-transform transform group-hover:scale-110 duration-700 ease-out" />
              <span className="relative z-10">Try Now</span>
            </button>
          </motion.div>

          {/* Card 3 - Area Calculator */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-[#f59e0b] text-5xl mb-4">📐</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Area Calculator
            </h3>
            <p className="text-gray-600 mb-6">
              Quickly convert between square feet, meters, yards, and acres —
              all in one click.
            </p>
            <button
              onClick={()=>navigate("/Services" , { state: { scrollTo: "area-calculator" } })}
              className="relative px-6 py-2 text-base font-semibold text-white rounded-full overflow-hidden group border border-white/20 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#86C24D] to-[#f59e0b] transition-transform transform group-hover:scale-110 duration-700 ease-out" />
              <span className="relative z-10">Try Now</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 sticky top-[-110%] md:top-0 !z-999   py-16 px-6 md:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Curated Collections
          </h2>
          <p className="text-gray-600 mt-2">
            Explore prime properties based on your recommendation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <FAQSection></FAQSection>

      {/* CTA button */}
    </>
  );
};

export default Home;
