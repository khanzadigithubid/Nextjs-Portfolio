'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Skills", path: "/Skills" },
    { label: "Projects", path: "/Projects" },
    { label: "Services", path: "/Services" },
    { label: "Contact", path: "/Contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b-2 border-black/20 dark:border-white/20'
          : 'bg-white dark:bg-black border-b-2 border-black/20 dark:border-white/20'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-2 lg:space-x-4 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="group relative px-5 py-2.5 text-base lg:text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black dark:bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 p-3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 focus:outline-none rounded-xl"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-7 h-7">
              <span
                className={`absolute block h-0.5 w-7 bg-black dark:bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-2'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-7 bg-black dark:bg-white top-3.5 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-7 bg-black dark:bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-20 bg-white/98 dark:bg-black/98 backdrop-blur-md z-[45] transition-all duration-400 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
          onClick={closeMobileMenu}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.path}
                className="group relative text-2xl sm:text-3xl font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"
                onClick={closeMobileMenu}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)'
                }}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 