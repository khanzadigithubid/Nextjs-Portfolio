"use client";

import { useState } from 'react';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaRegClock, FaChevronDown } from 'react-icons/fa';
import Link from "next/link";
import Breadcrumbs from '../components/Breadcrumbs';
import ImageLightbox from '../components/ImageLightbox';

// Metadata is handled in layout.tsx for client components

const projects = [
  {
    src: "/project7.jpg",
    alt: "Crypto Website",
    title: "Crypto Website",
    description: "A cryptocurrency website built with modern web technologies including HTML, CSS, and JavaScript, delivering a seamless and interactive user experience.",
    link: "https://simple-website-crypto.netlify.app/",
    category: "Web Apps"
  },
  {
    src: "/project2.jpg",
    alt: "OOP Project",
    title: "OOP Project",
    description: "Object-Oriented Programming project demonstrating coding best practices with clean architecture and maintainable code structure.",
    link: "https://github.com/khanzadigithubid/OOP-Project",
    category: "Web Apps"
  },
  {
    src: "/project3.jpg",
    alt: "Trading Website",
    title: "Trading Website",
    description: "React-powered trading platform offering real-time data visualization and an interactive interface for trading needs.",
    link: "https://reacts-tradingwebsite.netlify.app/",
    category: "Web Apps"
  },
  {
    src: "/project11.jpg",
    alt: "Chat AI",
    title: "Chat AI",
    description: "React-based AI chat application powered by cutting-edge artificial intelligence for seamless intelligent conversations.",
    link: "https://chat-ai-one-gamma.vercel.app/",
    category: "AI Projects"
  },
  {
    src: "/project5.jpg",
    alt: "Google Search App",
    title: "API Google Search App",
    description: "Search application utilizing Google Search API to fetch web pages, images, and news with real-time results.",
    link: "https://github.com/khanzadigithubid/API-Google-Search-App",
    category: "API Integration"
  },
  {
    src: "/project6.jpg",
    alt: "Recipe Search App",
    title: "API Recipe Search App",
    description: "Recipe search application with API integration allowing users to discover recipes from around the world by ingredients.",
    link: "https://github.com/khanzadigithubid/API-Recipe-App",
    category: "API Integration"
  },
  {
    src: "/project8.jpg",
    alt: "Weather App",
    title: "API Weather App",
    description: "Weather application providing real-time weather data, forecasts, and alerts for any location worldwide using Weather API.",
    link: "https://github.com/khanzadigithubid/API-Weather-Project",
    category: "API Integration"
  },
  {
    src: "/project12.jpg",
    alt: "JavaScript Weather App",
    title: "JavaScript Weather App",
    description: "Pure JavaScript weather application allowing users to enter their city and receive real-time temperatures and forecasts.",
    link: "https://javascript-api-weather-app.netlify.app/",
    category: "API Integration"
  },
  {
    src: "/project10.jpg",
    alt: "ToDo List",
    title: "ToDo List Application",
    description: "JavaScript-based task management application for adding, completing, and organizing tasks efficiently.",
    link: "https://java-script-to-do-list-alpha.vercel.app/",
    category: "Web Apps"
  },
  {
    src: "/project13.jpg",
    alt: "Hackathon Resume Builder",
    title: "Resume Builder",
    description: "Professional resume builder application developed with HTML, CSS, and TypeScript for creating, editing, and downloading resumes.",
    link: "https://hackathon-omega-six.vercel.app/",
    category: "Web Apps"
  },
  {
    src: "/project14.jpg",
    alt: "Next.js 15 Blog",
    title: "Next.js 15 Blog",
    description: "Modern blog platform built with Next.js 15 features, offering optimized performance and seamless navigation experience.",
    link: "https://nextjs-15-and-chat-bot.vercel.app/",
    category: "Next.js Projects"
  },
  {
    src: "/project15.jpg",
    alt: "Shadcn UI and Radix UI Blog",
    title: "Shadcn & Radix UI Blog",
    description: "Blog showcasing customizable and accessible UI components built with ShadCN and Radix UI for modern web development.",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/",
    category: "Next.js Projects"
  },
  {
    src: "/project16.jpg",
    alt: "Figma UI/UX Ddsgnr Website",
    title: "Figma to Next.js Conversion",
    description: "Pixel-perfect conversion of Figma UI/UX designs into responsive websites using Next.js, Tailwind CSS, and TypeScript.",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/",
    category: "UI/UX Projects"
  },
  {
    src: "/project18.jpg",
    alt: "Figma UI/UX Hackathon FoodTuck Website",
    title: "FoodTuck Website",
    description: "Hackathon project converting Figma designs into a fully responsive food delivery website with Next.js and Tailwind CSS.",
    link: "https://ui-ux-hackathon-foodtuck-website.vercel.app/",
    category: "UI/UX Projects"
  },
  {
    src: "/project19.jpg",
    alt: "Programming Languages Blog",
    title: "Programming Languages Blog",
    description: "Educational blog covering programming languages from fundamentals to advanced concepts with tutorials and best practices.",
    link: "https://nextjs-blog-website-dusky.vercel.app/",
    category: "Next.js Projects"
  },
  {
    src: "/project20.jpg",
    alt: "Server Side API Fetch Recipe App",
    title: "Server-Side Recipe App",
    description: "Recipe application with server-side API integration and rendering for optimal performance and SEO benefits.",
    link: "https://server-side-api-fetch.vercel.app/",
    category: "API Integration"
  },
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Web Apps", "AI Projects", "API Integration", "Next.js Projects", "UI/UX Projects"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);
  const hasMore = filteredProjects.length > 8;

  const openLightbox = (index: number) => {
    const projectIndex = projects.findIndex(p => p === filteredProjects[index]);
    setCurrentImageIndex(projectIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-900 body-font bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 sm:px-5 py-12 sm:py-16 md:py-24 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col text-center w-full mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaCode className="text-slate-500" />
              <span className="text-sm font-medium">Featured Projects</span>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-slate-300 mx-auto mt-2"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-3 sm:mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg text-slate-600 px-4 sm:px-0">
            Explore a curated collection of projects showcasing modern web development expertise
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
            <div className="p-2 sm:p-3 bg-slate-100 rounded-lg">
              <FaCode className="text-slate-700 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">{projects.length} Projects</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Completed with excellence</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
            <div className="p-2 sm:p-3 bg-slate-100 rounded-lg">
              <FaStar className="text-slate-700 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">Quality Code</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Clean & maintainable</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
            <div className="p-2 sm:p-3 bg-slate-100 rounded-lg">
              <FaRegClock className="text-slate-700 text-sm sm:text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-800">Latest Tech</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">Modern frameworks & tools</p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap -m-2 sm:-m-4">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="p-2 sm:p-4 lg:w-1/4 md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-duration={400 + (index % 4) * 50}
            >
              <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-black/10 dark:border-white/10">
                <div
                  className="relative h-[180px] sm:h-[200px] w-full overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">
                        Click to view
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-slate-800 text-sm sm:text-base" />
                      </Link>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <FaGithub className="text-slate-800 text-sm sm:text-base" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 sm:p-6 bg-white dark:bg-gray-900">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-[10px] sm:text-xs font-medium text-slate-600 bg-slate-100 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 hover:text-slate-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMore && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base font-medium"
            >
              {showAll ? 'Show Less' : `Show More Projects (${filteredProjects.length - 8} more)`}
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={projects}
        currentIndex={currentImageIndex}
        onNavigate={navigateLightbox}
      />
    </section>
    </>
  );
};

export default Project;


