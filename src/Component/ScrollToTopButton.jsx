import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[70px] right-4  
                     bg-gray-800 text-white p-2 lg:p-3 rounded-full shadow-lg 
                     hover:bg-gray-900 transition-all z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-md lg:text-xl " />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
