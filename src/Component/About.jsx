import React from "react";
import { motion } from "framer-motion";
import bgVideo from "./photos/cover.mp4";
import logo from "./photos/billboard.jpeg";
import { FaLightbulb, FaRecycle, FaUserFriends } from "react-icons/fa";
import { FaUserCheck, FaComments, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const headingWords = ["Why", "Choose", "Us?"];
import { FaArrowDown } from "react-icons/fa";
import { FaCalendarAlt, FaCheckCircle, FaBullhorn,  FaTag, FaTools, FaHome } from "react-icons/fa";
const benefits = [
  {
    icon: <FaUserCheck className="text-blue-600 text-4xl mb-4" />,
    title: "Personalized Guidance",
    desc: "Personalized guidance based on your needs and wants.",
  },
  {
    icon: <FaComments className="text-blue-600 text-4xl mb-4" />,
    title: "1-on-1 Consultation",
    desc: "One-on-one personalized consultation with market experts.",
  },
  {
    icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
    title: "Transparent & Trustworthy",
    desc: "Transparent and trustworthy property consultancy.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-4xl mb-4" />,
    title: "End-to-End Support",
    desc: "Support at each step - From property search to visit to paperwork!",
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),}
const team = [
  {
    name: "Aman Jain",
    role: "Founder & Principal Architect",
    desc: "Aman Jain is a seasoned civil engineer with over 6+ years of experience, expertly combining technical skills with strong leadership. His extensive market knowledge ensures clients receive exceptional value beyond their expectations.",
    img: logo,
    linkedin: "https://www.linkedin.com/in/s-aman-kumar-jain-726b4016b/",
  },
  {
    name: "Anisha Jain",
    role: "Project Director",
    desc: "Anisha Jain, co-founder of Roots & Roofs, revolutionizes the real estate industry with her innovative approach. With a deep expertise in marketing and strategy, she is dedicated to creating exceptional client experiences that not only inspire trust but also cultivate enduring relationships.",
    img: logo,
    linkedin: "https://www.linkedin.com/in/anisha-jain-55b3ba2a1/",
  },
  
];

// Fade-in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Stats Data
const stats = [
  { value: "20+", label: "Years of shaping iconic spaces" },
  { value: "120+", label: "Architectural masterpieces brought to life" },
  { value: "95+", label: "Clients who call our designs home" },
];

// Philosophy Data
const philosophyData = [
  {
    icon: <FaLightbulb className="text-3xl text-blue-600" />,
    title: "Innovation",
    description:
      "We push the boundaries of architecture, blending creativity with cutting-edge technology to redefine spaces.",
  },
  {
    icon: <FaRecycle className="text-3xl text-blue-600" />,
    title: "Sustainability",
    description:
      "We push the boundaries of architecture, blending creativity with cutting-edge technology to redefine spaces.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-blue-600" />,
    title: "Client-Centric Approach",
    description:
      "We push the boundaries of architecture, blending creativity with cutting-edge technology to redefine spaces.",
  },
];

const AboutUsHero = () => {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-[tinos] font-bold tracking-widest relative"
        >
          <span className="absolute -inset-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-md">
            ABOUT US
          </span>
          <span className="relative z-10">ABOUT US</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
        >
          We are passionate creators, blending innovation and design to craft
          meaningful experiences that inspire.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-sm text-gray-300"
      >
        <FaArrowDown className="animate-bounce text-xl" />
        <span className="mt-2 tracking-wide">Scroll Down</span>
      </motion.div>
    </section>




    <section className="relative z-10 px-6 py-28 overflow-hidden bg-[#0f172a] text-white font-[tinos]">
      {/* Blurred gradient lighting */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 -right-10"></div>

      {/* Heading with split-word animation */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className={`${
                word === "Us?" ? "text-blue-400" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          We redefine real estate consultancy with personalized service, clarity, and long-term trust.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:scale-[1.03] transition-all duration-300 shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/30">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>




    <div className="font-sans text-gray-800">
      {/* How It Works Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works?</h2>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-3xl">
              <FaHome />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Effortless Property Listing Process
              </h3>
              <p className="text-gray-600">
                For property owners, listing a property is a quick and straightforward process.
                Complete our user-friendly form in minutes, and your property will be live upon verification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-3xl">
              <FaCalendarAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Tenant / Buyers Scheduling Visits
              </h3>
              <p className="text-gray-600">
                Once a potential tenant or buyer expresses interest in visiting your property,
                our executive assists them in showing your property.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-3xl">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Seamless Deal Closure</h3>
              <p className="text-gray-600">
                The deal will be executed once all parties are onboard. Roots & Roofs will provide full
                assistance with documentation and paperwork for both rentals and sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-2">
          Why 50k+ owners choose Roots & Roofs
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Monthly 5 lakh+ people visit Roots & Roofs in search of houses
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <FaBullhorn className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">FREE 360° Marketing</h3>
              <p className="text-gray-600 text-sm">
                We help you find tenants across 10+ listing portals, verified brokers, and to-let boards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaUserCheck className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Verified Tenants</h3>
              <p className="text-gray-600 text-sm">
                We conduct KYC checks on all tenants, including identity & police verification.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCalendarAlt className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Free Assisted Visits</h3>
              <p className="text-gray-600 text-sm">
                Our property managers provide unlimited house visits for interested customers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaTag className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Best Price Guidance</h3>
              <p className="text-gray-600 text-sm">
                We provide market-driven pricing guidance to help you get the best rent possible.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Rent on Time</h3>
              <p className="text-gray-600 text-sm">
                Our rent collection team ensures you receive rent on time every month.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaTools className="text-blue-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Property Maintenance</h3>
              <p className="text-gray-600 text-sm">
                We inspect properties regularly & offer on-demand maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>




    <section className="relative bg-[#f7f9fb] text-gray-800 py-32 px-6 overflow-hidden font-[tinos]">
      {/* Blurred lighting accents for glow */}
      <div className="absolute w-80 h-80 bg-pink-300/30 rounded-full blur-3xl top-10 left-[-4rem] z-0"></div>
      <div className="absolute w-80 h-80 bg-sky-300/30 rounded-full blur-3xl bottom-10 right-[-4rem] z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center leading-snug tracking-tight"
        >
          Let’s find the best place for your future —<br />
          <span className="text-sky-500">because you deserve more than just a deal.</span>
        </motion.h2>

        {/* Divider Line */}
        <div className="w-16 h-1 bg-sky-400 mx-auto my-10 rounded-full" />

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl"
        >
          <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed tracking-wide">
            “We don’t just find properties — we help people find{" "}
            <span className="text-gray-900 font-semibold">direction, security</span>, and a place to call home.”
          </p>
        </motion.div>

        {/* Bottom Motivation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mt-12"
        >
          It’s not just about real estate. It’s about getting it right — with the right team. <br />
          <span className="text-sky-400 font-semibold">Let’s do this together.</span>
        </motion.p>
      </div>
    </section>


      {/* Our Philosophy */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-serif font-bold text-black"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every project is a story waiting to be told, and we craft each
              one with intention. Our approach is built on three core principles.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {philosophyData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-20 px-6 md:px-16 font-serif text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={logo}
              alt="Roots & Roofs"
              className="w-full max-w-sm object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            Roots & Roofs was founded to transform the real estate experience by making it simpler, more transparent, and client-focused. Leveraging years of expertise, we do more than close deals; we offer guidance and exceptional value across all property types.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Our mission is just beginning, and we are committed to exceeding your expectations and delivering more than what you’ll find elsewhere.

            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>




      {/* <section className="bg-gray-100 py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-4">
          <h2 className="text-4xl font-serif font-semibold text-gray-900">Meet the team</h2>
          <p className="text-sm text-gray-600 md:text-right">
            our team is more than just a group of architects—we are creators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-56 bg-gray-800 flex items-center justify-center">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800" />
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-700 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}



<section className="bg-neutral-50 py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Meet the Team
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Our team is more than just a group of architects—we are creators.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group overflow-hidden bg-white rounded-xl shadow-sm transition-all hover:shadow-lg relative"
            >
              {/* Image / Placeholder */}
              <div className="relative h-72 w-full bg-slate-800 flex items-center justify-center overflow-hidden">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800" />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end items-end p-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUsHero;






