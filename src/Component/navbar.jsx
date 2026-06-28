import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation  , NavLink  } from "react-router-dom";
// import logo from "./photos/logo2.jpg";
import logo from "./photos/logo6.png";
// import logo from "./photos/logo5.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Primary links stay inline on desktop; the rest move into the desktop
  // hamburger dropdown. (Mobile still shows the full list under its menu.)
  const primaryLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    // { name: "Properties", href: "/Properties" },
  ];

  const dropdownLinks = [
    { name: "About Us", href: "/About" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Careers", href: "/Careerpage" },
  ];

  const navLinks = [...primaryLinks, ...dropdownLinks];

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

  // Close the desktop dropdown when clicking outside it.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white text-base lg:text-lg font-medium tracking-wide">
            {primaryLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}

            {/* Desktop hamburger dropdown (About Us, Contact Us, Careers) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDesktopDropdownOpen((prev) => !prev)}
                className="flex items-center text-3xl hover:text-orange-500 transition-colors duration-200 focus:outline-none"
                aria-label="More menu"
                aria-expanded={isDesktopDropdownOpen}
              >
                {isDesktopDropdownOpen ? <HiX /> : <HiMenu />}
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#19273A] border border-[#223549] rounded-lg shadow-xl py-2 z-50">
                  {dropdownLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsDesktopDropdownOpen(false)}
                        className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-orange-500 bg-[#223549]"
                            : "text-white hover:text-orange-500 hover:bg-[#223549]"
                        }`}
                      >
                        {link.name}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
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
                <NavLink
  key={link.name}
  to={link.href}
  onClick={() => setIsMenuOpen(false)}
  className={`block text-lg font-medium px-4 py-2 rounded transition-all duration-200 ${
    isActive
      ? "text-orange-500 bg-[#223549]"
      : "text-white hover:text-orange-500 hover:bg-[#223549]"
  }`}
>
  {link.name}
</NavLink>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
