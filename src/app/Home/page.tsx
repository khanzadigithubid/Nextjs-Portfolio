"use client";

import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaLaptopCode, FaRobot, FaAward, FaRegClock } from 'react-icons/fa';
import Image from "next/image";
import me from "../../../About.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 text-gray-800 body-font min-h-screen flex items-center">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="space-y-8">
            {/* Professional Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center space-x-2 text-slate-600">
                  <FaRegClock className="text-slate-500" />
                  <span className="text-sm font-medium">Available for opportunities</span>
                </div>
                <div className="w-20 h-1 bg-slate-400 mt-2"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800">
                <span className="block mb-2 text-slate-600">Hello, I am Khanzadi Wazir Ali</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-slate-600">
                <span className="h-1 w-12 bg-slate-400"></span>
                <span className="text-lg font-medium">Full Stack Developer</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">ADC PAT 2</span>
              </div>
            </div>
            
            {/* Professional Description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600 max-w-2xl"
                 data-aos="fade-up" 
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="1500">
                I am a web developer and ADC PAT 2 student focused on technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and drive business innovation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <FaAward className="mr-2" />
                  <span>GIAIC Certified</span>
                </div>
                <div className="flex items-center">
                  <FaCode className="mr-2" />
                  <span>TypeScript Expert</span>
                </div>
              </div>
            </div>

            {/* Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                  <FaCode className="text-slate-700" />
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-700">Web Development</span>
                  <p className="text-xs text-slate-500">Frontend & Backend</p>
                </div>
              </div>
              <div className="group flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                  <FaLaptopCode className="text-slate-700" />
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-700">Next.js</span>
                  <p className="text-xs text-slate-500">Full Stack Solutions</p>
                </div>
              </div>
              <div className="group flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                  <FaRobot className="text-slate-700" />
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-700">AI Engineering</span>
                  <p className="text-xs text-slate-500">Cloud Applied AI</p>
                </div>
              </div>
            </div>
            
            {/* Professional CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/Contact"
                  className="group inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="mr-2">Get in Touch</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 pt-4">
                <Link 
                  href="https://github.com/khanzadigithubid/"
                  className="group"
                  aria-label="GitHub Profile"
                >
                  <button className="inline-flex items-center justify-center w-12 h-12 text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    <FaGithub size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
                  className="group"
                  aria-label="LinkedIn Profile"
                >
                  <button className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    <FaLinkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-left" data-aos-duration="1500">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image 
                src={me} 
                alt="Professional portrait" 
                className="rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

