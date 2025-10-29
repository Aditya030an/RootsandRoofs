



import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";
import logo from "./photos/logo2.jpg"; // Adjust the path as per your project structure

const footerLinks = [
  { title: "Home", href: "#" },
  { title: "Work", href: "#" },
  { title: "Studio", href: "#" },
  { title: "Services", href: "#" },
  { title: "Contact", href: "#" },
];

const socialIcons = [
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaDribbble />, href: "#" },
  { icon: <FaBehance />, href: "#" },
];

const PremiumAwwwardFooter = () => {
  return (
    <footer className="relative bg-[#0e2338] text-white font-sans overflow-hidden">
      {/* Subtle Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 - Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <img src={logo} alt="Roots 2 Roof Logo" className="w-28 h-auto" />
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Roots 2 Roof is your trusted partner in real estate—helping you discover, buy, or list properties with ease, transparency, and confidence.
          </p>
       
        </motion.div>

        {/* Column 2 - Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-gray-400">Explore</h3>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg hover:text-gray-400 transition duration-300 tracking-wide"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Newsletter & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-lg font-medium text-gray-400">Newsletter</h3>
          <form className="flex items-center border-b border-gray-600">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent w-full placeholder-gray-500 text-white py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="text-white hover:text-blue-400 transition p-2"
            >
              <FaArrowRight />
            </button>
          </form>

          <div className="flex gap-5 pt-4">
            {socialIcons.map(({ icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-white hover:text-blue-500 text-lg transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 text-center text-gray-600 text-sm py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Roots 2 Roof — Crafted with care & code.
      </div>

      {/* Gradient text style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default PremiumAwwwardFooter;
