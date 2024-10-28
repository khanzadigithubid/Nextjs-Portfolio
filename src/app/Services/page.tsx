"use client";

import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="text-gray-800 body-font py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-blue-500 transition duration-300 ease-in-out animate-bounce hover:uppercase">
              <span className="text-gray-700-400 font-serif">Services</span>
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Web Development Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1000">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-500 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaCode size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font mb-3 font-semibold">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs.
                </p>
              </div>
            </div>
            {/* Web Design Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1200">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-pink-500 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaPaintBrush size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font mb-3 font-semibold">
                  Web Design
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity.
                </p>
              </div>
            </div>
            {/* Responsive Web Design Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1400">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-teal-500 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaMobileAlt size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font mb-3 font-semibold">
                  Responsive Web Design
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  Responsive web design services to ensure seamless user experiences across devices. I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size.
                </p>
              </div>
            </div>
          </div>
          <Link href="../Contact">
            <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-orange-400 to-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 rounded-lg text-lg transform transition-transform hover:scale-110 shadow-2xl">
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        // Removed the keyframes and animation as the background is now static
      `}</style>
    </>
  );
}
