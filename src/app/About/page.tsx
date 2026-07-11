"use client";

import Image from "next/image";
import { FaGraduationCap, FaCode, FaLightbulb, FaAward, FaCheckCircle, FaStar, FaRegClock, FaDownload } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-300 body-font bg-gradient-to-b from-black to-gray-900 py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <FaRegClock className="text-gray-500" />
                <span className="text-sm font-medium">Professional Profile</span>
              </div>
              <div className="w-20 sm:w-24 h-1 bg-gray-600 mx-auto mt-2"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              A passionate developer focused on creating innovative solutions through technology and continuous learning.
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-16 sm:mb-20">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/About.jpg"
                  alt="Professional portrait"
                  height={280}
                  width={280}
                  className="rounded-full shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 text-center md:text-left px-4 sm:px-0">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">
                    Frontend Developer & AI Enthusiast
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                    I am an experienced frontend developer, currently expanding my expertise by learning Next.js for both backend and frontend development. My journey in tech was significantly shaped by completing a TypeScript course at the Governor Sindh IT Initiative (GIAIC).
                  </p>
                </div>

                {/* Professional Badges */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">
                    <FaAward className="text-gray-400" />
                    <span>GIAIC Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">
                    <FaStar className="text-gray-400" />
                    <span>TypeScript Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">
                    <FaCheckCircle className="text-gray-400" />
                    <span>ADC PAT 2</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <span className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">Frontend Development</span>
                  <span className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium">AI Engineering</span>
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center md:justify-start mt-6">
                  <a
                    href="/Khanzadi_Wazir_Ali_Resume.pdf"
                    download="Khanzadi_Wazir_Ali_Resume.pdf"
                    className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-white to-gray-200 text-black rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaDownload className="text-base sm:text-lg" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Areas Section */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-gray-700 rounded-lg mr-4">
                  <FaCode className="text-gray-200 text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Technical Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                It was here that I also embarked on learning Cloud Applied Generative AI Engineering with cutting-edge technologies. As a senior student at GIAIC, I take pride in assisting my peers in their learning journeys.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-gray-700 rounded-lg mr-4">
                  <FaGraduationCap className="text-gray-200 text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Additionally, I am pursuing an Associate Degree Of Commerce (ADC PART 2), combining my technical expertise with business acumen to create comprehensive solutions.
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 px-4 sm:px-0" data-aos="fade-up" data-aos-duration="500">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-3 bg-gray-700 rounded-lg mr-4">
                <FaLightbulb className="text-gray-200 text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Future Goals</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-medium text-white">Short Term</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Master advanced Next.js features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Enhance AI implementation skills
                  </li>
                </ul>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-medium text-white">Long Term</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Lead innovative tech projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Contribute to open-source community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;


