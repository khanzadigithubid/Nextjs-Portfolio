"use client";

import Image from "next/image";
import me from "../my.jpg";
import { FaGraduationCap, FaCode, FaLightbulb, FaAward, FaCheckCircle, FaStar, FaRegClock } from 'react-icons/fa';

const About = () => {
  return (
    <section className="text-slate-700 body-font bg-gradient-to-b from-white to-slate-50 py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 text-slate-600">
                <FaRegClock className="text-slate-500" />
                <span className="text-sm font-medium">Professional Profile</span>
              </div>
              <div className="w-20 sm:w-24 h-1 bg-slate-400 mx-auto mt-2"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-3 sm:mb-4">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              A passionate developer focused on creating innovative solutions through technology and continuous learning.
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-16 sm:mb-20">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src={me}
                  alt="Professional portrait"
                  height={280}
                  width={280}
                  className="rounded-full shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] object-cover"
                  priority
                />
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 text-center md:text-left px-4 sm:px-0">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 mb-3 sm:mb-4">
                    Frontend Developer & AI Enthusiast
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                    I am an experienced frontend developer, currently expanding my expertise by learning Next.js for both backend and frontend development. My journey in tech was significantly shaped by completing a TypeScript course at the Governor Sindh IT Initiative (GIAIC).
                  </p>
                </div>

                {/* Professional Badges */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    <FaAward className="text-slate-500" />
                    <span>GIAIC Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    <FaStar className="text-slate-500" />
                    <span>TypeScript Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    <FaCheckCircle className="text-slate-500" />
                    <span>ADC PAT 2</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                  <span className="px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Frontend Development</span>
                  <span className="px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">AI Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Areas Section */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1000">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-slate-100 rounded-lg mr-4">
                  <FaCode className="text-slate-700 text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Technical Expertise</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                It was here that I also embarked on learning Cloud Applied Generative AI Engineering with cutting-edge technologies. As a senior student at GIAIC, I take pride in assisting my peers in their learning journeys.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-slate-100 rounded-lg mr-4">
                  <FaGraduationCap className="text-slate-700 text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Education</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Additionally, I am pursuing an Associate Degree Of Commerce (ADC PART 2), combining my technical expertise with business acumen to create comprehensive solutions.
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 px-4 sm:px-0" data-aos="fade-up" data-aos-duration="1000">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-3 bg-slate-100 rounded-lg mr-4">
                <FaLightbulb className="text-slate-700 text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Future Goals</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-medium text-slate-800">Short Term</h4>
                <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                    Master advanced Next.js features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                    Enhance AI implementation skills
                  </li>
                </ul>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-medium text-slate-800">Long Term</h4>
                <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                    Lead innovative tech projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                    Contribute to open-source community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
