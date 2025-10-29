import React from "react";
import logo from "./photos/logo2.jpg"; // replace with your actual logo

const Navbar = () => {
  return (
    <header className="w-full bg-[#19273A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Roots & Roofs"
            className="w-20 h-auto object-contain" // increased from w-20 → w-32
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-white text-lg font-medium tracking-wide">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="/Services" className="hover:text-orange-500 transition">
            Services
          </a>
          <a
            href="/Properties"
            className="hover:text-orange-500 transition"
          >
            Properties
          </a>
          <a href="/About" className="hover:text-orange-500 transition">
            About Us
          </a>
          <a href="/Contact" className="hover:text-orange-500 transition">
            Contact Us
          </a>
          <a href="/Careerpage" className="hover:text-orange-500 transition">
            Careers
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
