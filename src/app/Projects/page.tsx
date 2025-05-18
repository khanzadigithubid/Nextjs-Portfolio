"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaRegClock } from 'react-icons/fa';
import Link from "next/link";

import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.jpg";
import project8 from "../../../project8.jpg";
import project10 from "../../../project10.jpg";
import project11 from "../../../project11.jpg";
import project12 from "../../../project12.jpg";
import project13 from "../../../project13.jpg";
import project14 from "../../../project14.jpg";
import project15 from "../../../project15.jpg";
import project16 from "../../../project16.jpg";
import project18 from "../../../project18.jpg";
import project19 from "../../../project19.jpg";
import project20 from "../../../project20.jpg";

const projects = [
  {
    src: project7,
    alt: "Crypto Website",
    title: "Crypto Website",
    description: "This crypto website is built with modern web technologies like HTML, CSS, and JavaScript to deliver a seamless and interactive user experience! 🌐.",
    link: "https://simple-website-crypto.netlify.app/"
  },
  {
    src: project2,
    alt: "OOP Project",
    title: "OOP Project",
    description: "This OOP (Object-Oriented Programming) project emphasizes coding best practices while providing an enjoyable user experience! 🎮🌟.",
    link: "https://github.com/khanzadigithubid/OOP-Project"
  },
  {
    src: project3,
    alt: "Trading Website",
    title: "Trading Website",
    description: "Our trading website is powered by React, offering a lightning-fast ⚡ and interactive platform for all your trading needs! Built with a focus on real-time data 📈.",
    link: "https://reacts-tradingwebsite.netlify.app/"
  },
  {
    src: project5,
    alt: "Google Search App",
    title: "API Google Search App",
    description: "The Google Search API allows you to perform searches for web pages, images, and news, returning relevant results in real time. 📅🔍.",
    link: "https://github.com/khanzadigithubid/API-Google-Search-App"
  },
  {
    src: project6,
    alt: "Recipe Search App",
    title: "API Recipe Search App",
    description: "The Recipe Search API helps find delicious recipes from around the world! 🍽️🌍 With this API, developers can search by ingredients. 🥗🥘",
    link: "https://github.com/khanzadigithubid/API-Recipe-App"
  },
  {
    src: project8,
    alt: "Weather App",
    title: "API Weather App",
    description: "🌍 Weather API: Access real-time weather data, forecasts, and alerts for any location worldwide. 🌦️📲 Enhance your applications with reliable, up-to-date weather insights! 🌈✨",
    link: "https://github.com/khanzadigithubid/API-Weather-Project"
  },
  {
    src: project10,
    alt: "ToDo List",
    title: "ToDo List",
    description: "📝✅ JavaScript To-Do List: Stay productive by adding, completing, and deleting tasks with ease. 🌟 Track your goals and stay organized effortlessly! 🚀",
    link: "https://java-script-to-do-list-alpha.vercel.app/"
  },
  {
    src: project11,
    alt: "Chat AI",
    title: "Chat AI",
    description: "🤖💬 React AI Chat: Dive into seamless, intelligent conversations powered by cutting-edge AI. 🌟 Explore the future of communication today! 🚀",
    link: "https://chat-ai-one-gamma.vercel.app/"
  },
  {
    src: project12,
    alt: "Api Weather App ",
    title: "JavaScript Api Weather App",
    description: "🌦️ JavaScript Weather App: Enter your city to get real-time temperatures and forecasts instantly. 🌍✨ Stay updated, rain or shine! ☀️🌧️",
    link: "https://javascript-api-weather-app.netlify.app/"
  },
  {
    src: project13,
    alt: "Hackathon Resume Builder",
    title: "Hackathon Resume Builder",
    description: "🚀 Hackathon Resume Builder: Built with HTML, CSS & TypeScript, easily create, edit, and download resumes. 📝✅ Responsive, fast, and user-friendly! 🌟📄",
    link: "https://hackathon-omega-six.vercel.app/"
  },
  {
    src: project14,
    alt: "Next.js 15 Blog",
    title: "Next.js 15 Blog",
    description: "🌐 Next.js 15 Blog: Built with the latest features of Next.js 15, offering fast performance and seamless navigation. 🚀📝 Stay updated with engaging posts and smooth user experience!🌟",
    link: "https://nextjs-15-and-chat-bot.vercel.app/"
  },{
    src: project15,
    alt: "Shadcn UI and Radix UI Blog",
    title: "Shadcn UI and Radix UI Blog",
    description: "Explore customizable, accessible UI components with ShadCN and Radix UI for modern web development. ⚙️✨ Build sleek, responsive interfaces effortlessly!",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/"
  },
  {
    src: project16,
    alt: "Figma UI/UX Ddsgnr Website",
    title: "Figma UI/UX Ddsgnr Website",
    description: "🎨 Figma to Next.js Conversion: Transform stunning Figma UI/UX designs into responsive websites using Next.js, Tailwind CSS, and TypeScript. 🚀✨ Pixel-perfect, fast, and modern! 🌐",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/"
  },
  {
    src: project18,
    alt: "Figma UI/UX Hackathon FoodTuck Website",
    title: "Figma UI/UX Hackathon FoodTuck Website",
    description: "🚚✨ Hackathon Food Truck Website: Transform Figma UI/UX designs into a responsive site using Next.js, Tailwind CSS, and TypeScript. 🎨🚀 Fast, interactive, and pixel-perfect! 🌟",
    link: "https://ui-ux-hackathon-foodtuck-website.vercel.app/"
  },
  {
    src: project19,
    alt: "Programming Languages Blog",
    title: "Programming Languages Blog",
    description: "💻 Programming Languages Blog: Explore the world of programming languages, from basics to advanced concepts. 🚀✨ Stay updated, learn tips, and enhance your coding skills! 📚",
    link: "https://nextjs-blog-website-dusky.vercel.app/"
  },
  {
    src: project20,
    alt: "Server Side API Fetch Recipe App",
    title: "Server Side API Fetch Recipe App",
    description: "🍳 Server-Side Recipe App: Fetch delicious recipes using APIs with server-side rendering for fast, seamless performance. 🌐✨ Explore, cook, and enjoy! 🥘🚀",
    link: "https://server-side-api-fetch.vercel.app/"
  },
];

const Project = () => {
  return (
    <section className="text-gray-900 body-font bg-gradient-to-b from-white to-slate-50">
      <div className="container px-5 py-24 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col text-center w-full mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaCode className="text-slate-500" />
              <span className="text-sm font-medium">Featured Projects</span>
            </div>
            <div className="w-24 h-1 bg-slate-300 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-slate-600">
            Explore some of the amazing projects built with passion and creativity!
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaCode className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">20+ Projects</h3>
              <p className="text-xs text-slate-600">Completed with excellence</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaStar className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">Quality Code</h3>
              <p className="text-xs text-slate-600">Clean & maintainable</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FaRegClock className="text-slate-700" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800">Latest Tech</h3>
              <p className="text-xs text-slate-600">Modern frameworks & tools</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="fade-up"
              data-aos-duration={1000 + (index * 100)}
            >
              <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" 
                            className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300">
                        <FaExternalLinkAlt className="text-slate-800" />
                      </Link>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer"
                            className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300">
                        <FaGithub className="text-slate-800" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-white">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3 hover:text-slate-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
