"use client";

import { FaCode, FaPaintBrush, FaMobileAlt, FaRegClock, FaCheckCircle, FaArrowRight, FaShoppingCart, FaBullhorn, FaPalette, FaStar, FaAward, FaRegLightbulb } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  return (
    <section className="text-slate-700 body-font py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-5">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaRegClock className="text-slate-500" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            <div className="w-24 h-1 bg-slate-300 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
            Services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive web solutions and digital services tailored to your business needs
          </p>
        </div>

        {/* Professional Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaStar className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">Expert Quality</h3>
              <p className="text-xs text-slate-600">Professional-grade solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaAward className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">Certified Professional</h3>
              <p className="text-xs text-slate-600">Industry-recognized expertise</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaRegLightbulb className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">Innovative Solutions</h3>
              <p className="text-xs text-slate-600">Cutting-edge technology</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Web Development Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1000">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaCode size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Web Development
              </h2>
              <p className="leading-relaxed text-slate-600">
                Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>API Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1200">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-pink-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaPaintBrush size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Web Design
              </h2>
              <p className="leading-relaxed text-slate-600">
                Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500" />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500" />
                  <span>Brand Identity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-pink-500" />
                  <span>Visual Design</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Web Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1400">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-teal-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaMobileAlt size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Responsive Web Design
              </h2>
              <p className="leading-relaxed text-slate-600">
                Responsive web design services to ensure seamless user experiences across devices. I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500" />
                  <span>Mobile-First Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500" />
                  <span>Cross-Device Testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-teal-500" />
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shopify Development Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1600">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-green-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaShoppingCart size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Shopify Development
              </h2>
              <p className="leading-relaxed text-slate-600">
                Expert Shopify development services to create and optimize your online store. From custom themes to app integration, I help you build a successful e-commerce presence.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Custom Theme Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Store Setup & Configuration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>App Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1800">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-300 to-purple-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaBullhorn size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Digital Marketing
              </h2>
              <p className="leading-relaxed text-slate-600">
                Comprehensive digital marketing strategies to grow your online presence. From social media management to content creation, I help you reach and engage your target audience.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500" />
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500" />
                  <span>Content Strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-purple-500" />
                  <span>SEO Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canva Design Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="2000">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-500 text-white mb-6 flex-shrink-0 shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              <FaPalette size={32} />
            </div>
            <div className="space-y-4">
              <h2 className="text-slate-800 text-xl font-semibold">
                Canva Design
              </h2>
              <p className="leading-relaxed text-slate-600">
                Professional Canva design services for your marketing materials. From social media graphics to presentations, I create visually appealing designs that align with your brand.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>Social Media Graphics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>Marketing Materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500" />
                  <span>Brand Templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="../Contact">
            <button className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-lg hover:from-slate-700 hover:to-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="mr-2">Get Started</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
