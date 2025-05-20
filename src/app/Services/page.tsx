"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCheckCircle, FaArrowRight, FaShoppingCart, FaBullhorn, FaPalette, FaStar, FaAward, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="text-slate-700 body-font py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-5">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaRocket className="text-slate-500 animate-bounce" />
              <span className="text-xs sm:text-sm font-medium tracking-wider">PROFESSIONAL SERVICES</span>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-slate-300 to-slate-100 mx-auto mt-2"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-3 sm:mb-4">
            Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive web solutions and digital services tailored to elevate your business presence
          </p>
        </div>

        {/* Professional Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-200">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <FaStar className="text-blue-600 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">Expert Quality</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Professional-grade solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-purple-200">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <FaAward className="text-purple-600 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">Certified Professional</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Industry-recognized expertise</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-green-200">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <FaRegLightbulb className="text-green-600 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">Innovative Solutions</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Cutting-edge technology</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Web Development Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200" data-aos="fade-up" data-aos-duration="1000">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaCode size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Web Development
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>API Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-pink-200" data-aos="fade-up" data-aos-duration="1200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPaintBrush size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Web Design
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                  <span>Brand Identity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                  <span>Visual Design</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Web Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200" data-aos="fade-up" data-aos-duration="1400">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaMobileAlt size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Responsive Web Design
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Responsive web design services to ensure seamless user experiences across devices. I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                  <span>Mobile-First Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                  <span>Cross-Device Testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shopify Development Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-200" data-aos="fade-up" data-aos-duration="1600">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaShoppingCart size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Shopify Development
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Expert Shopify development services to create and optimize your online store. From custom themes to app integration, I help you build a successful e-commerce presence.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Custom Theme Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Store Setup & Configuration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>App Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-purple-200" data-aos="fade-up" data-aos-duration="1800">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaBullhorn size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Digital Marketing
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Comprehensive digital marketing strategies to grow your online presence. From social media management to content creation, I help you reach and engage your target audience.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                  <span>Content Strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                  <span>SEO Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canva Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200" data-aos="fade-up" data-aos-duration="2000">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-4 sm:mb-6 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPalette size={24} className="sm:text-3xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-slate-800 text-lg sm:text-xl font-semibold text-center">
                Canva Design
              </h2>
              <p className="leading-relaxed text-slate-600 text-sm sm:text-base text-center">
                Professional Canva design services for your marketing materials. From social media graphics to presentations, I create visually appealing designs that align with your brand.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Social Media Graphics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Marketing Materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Brand Templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="../Contact">
            <button className="group inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-slate-800 to-slate-600 text-white text-sm sm:text-base rounded-lg hover:from-slate-700 hover:to-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
