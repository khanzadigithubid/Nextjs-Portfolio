'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import me from "../my1.jpg";

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

  const navItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Name */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 sm:space-x-3 group" 
            onClick={closeMobileMenu}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 rounded-full ring-2 ring-slate-400/30 ring-offset-2 ring-offset-slate-900 transition-all duration-300 group-hover:ring-slate-400/50">
                <Image 
                  src={me} 
                  alt="Khanzadi Wazir Ali" 
                  className="rounded-full object-cover"
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  priority
                />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-white group-hover:from-slate-200 group-hover:to-white transition-all duration-300">
                Portfolio
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={`/${item}`} 
                className="group relative px-3 py-2 text-sm lg:text-base text-slate-200 hover:text-white transition-colors duration-200"
              >
                <span>{item}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-slate-400/50 to-white/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded-lg"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <Link 
                key={item} 
                href={`/${item}`} 
                className="text-2xl font-medium text-slate-200 hover:text-white transition-all duration-300 transform hover:scale-105"
                onClick={closeMobileMenu}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 