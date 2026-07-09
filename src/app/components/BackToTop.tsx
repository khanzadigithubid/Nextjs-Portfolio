'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Back to Top"
    >
      <div className="relative">
        {/* Button */}
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
          <FaArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Back to Top
          </div>
        </div>
      </div>
    </button>
  );
}
