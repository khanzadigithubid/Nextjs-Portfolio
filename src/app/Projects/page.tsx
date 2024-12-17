"use client";

import Image from "next/image";

import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.jpg";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.jpg";
import project8 from "../../../project8.jpg";
import project9 from "../../../project9.jpg";
import project10 from "../../../project10.jpg";
import project11 from "../../../project11.jpg";
import project12 from "../../../project12.jpg";
import project13 from "../../../project13.jpg";
import project14 from "../../../project14.jpg";
import project15 from "../../../project15.jpg";
import project16 from "../../../project16.jpg";
import project17 from "../../../project17.jpg";
import project18 from "../../../project18.jpg";
import project19 from "../../../project19.jpg";
import project20 from "../../../project20.jpg";
import Link from "next/link";

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
    src: project4,
    alt: "Shadcn ui Table Component",
    title: "Shadcn ui Table Component",
    description: "The ShadCN UI Table component is a beautifully styled, customizable table designed for modern web apps 📊.",
    link: "https://github.com/khanzadigithubid/Shadcn-ui-Table-Component"
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
    src: project1,
    alt: "Animal Website",
    title: "Animal Website",
    description: "The Animals Website is an interactive platform designed to celebrate the beauty and diversity of wildlife! 🐾🌿 Built with HTML, CSS, and JavaScript. 🦁🐘",
    link: "https://animalswebsite12.netlify.app/"
  },
  {
    src: project8,
    alt: "Weather App",
    title: "API Weather App",
    description: "🌍 Weather API: Access real-time weather data, forecasts, and alerts for any location worldwide. 🌦️📲 Enhance your applications with reliable, up-to-date weather insights! 🌈✨",
    link: "https://github.com/khanzadigithubid/API-Weather-Project"
  },
  {
    src: project9,
    alt: "Car Showroom",
    title: "Car Showroom Website",
    description: "🚗✨ Next.js Car Showroom: Explore top-tier vehicles, from sleek sports cars to luxury rides. 🚘💨 Fast, responsive, and built for the ultimate car-buying experience! 🚀",
    link: "https://bm-nextjs-assignment01.vercel.app/"
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
    src: project17,
    alt: "Hackathon Practice figma UI/UX E-Commece website",
    title: "Hackathon Practice figma UI/UX E-Commece website",
    description: "🛍️ Hackathon E-Commerce Site: Convert Figma UI/UX designs into a responsive e-commerce website with Next.js, Tailwind CSS, and TypeScript. ⚡🚀 Fast, modern, and pixel-perfect! 🎨",
    link: "https://hackathon-practice-ecommerce.vercel.app/"
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
    <section className="text-gray-900 body-font bg-white"> {/* Set solid background color */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-gray-900 text-5xl">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-zinc-900 font-serif">
            Explore some of the amazing projects built with passion and creativity!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-slate-500 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-[20px] font-serif text-bold text-black hover:uppercase hover:text-gray-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-white text-[14px]">
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
