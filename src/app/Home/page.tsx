"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import me from "../../../About.jpg";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white text-gray-800 body-font"> {/* Set solid white background */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeIn">
          
          <h1 className="title-font text-5xl mb-5 text-pink-700 font-serif font-bold ml-5 hover:text-black transition-all duration-500 transform hover:scale-110">
            <div>
              <h1 className="flex justify-center items-center">Hello,</h1>
              <Typewriter
                options={{
                  strings: [' I am Khanzadi Wazir Ali...'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="mb-8 leading-relaxed ml-10 text-black"
             data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500">
            I am a web developer and ADC PAT 2 student focused on technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and drive business innovation.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="inline-flex text-white bg-gradient-to-r from-gray-700 to-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 hover:shadow-xl transform hover:scale-110 transition-all duration-500 text-lg rounded-full animate-pulse">
              <Link href="https://github.com/khanzadigithubid/">
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:shadow-xl transform hover:scale-110 transition-all duration-500 text-lg rounded-full animate-pulse">
              <Link href="https://www.linkedin.com/in/khanzadi-bisma-wazir-ali-7a97832b6/">
                <FaLinkedin size={26} />
              </Link>
            </button> 
          </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5" data-aos="flip-down" data-aos-duration="2000">
          <div className="mockup-phone hover:scale-105 transform transition duration-700 ease-in-out">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <Image 
                  src={me} 
                  alt="me" 
                  className="rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove the background animation styles */}
      <style jsx>{`
        // You can remove the entire keyframes and animation if not needed
      `}</style>
    </section>
  );
}

export default Hero;
