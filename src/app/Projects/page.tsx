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
    description: "The Weather API provides real-time weather data for locations around the globe! 🌍 With this API, you can add forecasts and weather alerts to your applications. 🌦️📲🌈.",
    link: "https://github.com/khanzadigithubid/API-Weather-Project"
  },
  {
    src: project9,
    alt: "Car Showroom",
    title: "Car Showroom Website",
    description: "🚗✨ Discover the ultimate car buying experience with our Next.js-powered Car Showroom! Fast, responsive, and user-friendly, our site lets you explore the finest vehicles—from powerful sports cars 🚘💨",
    link: "https://bm-nextjs-assignment01.vercel.app/"
  },
  {
    src: project10,
    alt: "ToDo List",
    title: "ToDo List",
    description: "📝✅ Stay organized and on top of your tasks with this simple yet powerful JavaScript To-Do List! Add, complete, and delete tasks effortlessly to boost your productivity and keep track of your goals🌟.",
    link: "https://java-script-to-do-list-alpha.vercel.app/"
  },
  {
    src: project11,
    alt: "Chat AI",
    title: "Chat AI",
    description: "🤖💬 Experience the future of communication with our React-based AI Chat! Engage in seamless conversations, get instant answers, and explore endless possibilities—all powered by intelligent technology. Connect🌟.",
    link: "https://chat-ai-one-gamma.vercel.app/"
  },
  {
    src: project12,
    alt: "Api Weather App ",
    title: "JavaScript Api Weather App",
    description: "☀️🌧️ Stay updated with the weather using our JavaScript Weather App! Just enter your city, and get real-time temperature, conditions, and forecasts at your fingertips. 🌍✨",
    link: "https://javascript-api-weather-app.netlify.app/"
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
                    <h1 className="text-2xl font-serif text-bold text-black hover:uppercase hover:text-gray-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-white">
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
