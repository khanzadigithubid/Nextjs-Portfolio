"use client";

import Image from "next/image";
import me from "../my.jpg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="text-slate-400 body-font overflow-hidden bg-gray-100"> {/* Add a background color here */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          
          {/* Profile Image */}
          <div className="relative group">
            <Image
              src={me}
              alt="me2n"
              height={250}
              width={250}
              className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:animate-wiggle"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Circular Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-white opacity-20 rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-5xl font-serif font-bold text-gray-900 hover:text-blue-300 transition-colors duration-500">
              About Me
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-serif font-semibold relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-lg text-gray-800 transition-opacity duration-700 ease-in-out group-hover:opacity-90"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I am an experienced frontend developer, currently expanding my expertise by learning Next.js for both backend and frontend development. My journey in tech was significantly shaped by completing a TypeScript course at the Governor Sindh IT Initiative (GIAIC). It was here that I also embarked on learning Cloud Applied Generative AI Engineering with cutting-edge technologies. As a senior student at GIAIC, I take pride in assisting my peers in their learning journeys. Additionally, I am pursuing an Associate Degree Of Commerce (ADC PART 2).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
