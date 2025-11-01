import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import logo from "./photos/logo2.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Properties", href: "/Properties" },
    { name: "About Us", href: "/About" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Careers", href: "/Careerpage" },
  ];

  // ✅ Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#19273A] shadow-md transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Roots & Roofs"
              loading="lazy"
              className="w-16 h-auto object-contain sm:w-20"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white text-base lg:text-lg font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none hover:text-orange-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg font-medium px-4 py-2 rounded transition-all duration-200 ${
                    isActive
                      ? "text-orange-500 bg-[#223549]"
                      : "text-white hover:text-orange-500 hover:bg-[#223549]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
