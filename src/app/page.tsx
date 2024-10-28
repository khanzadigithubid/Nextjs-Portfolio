"use client";
import Image from "next/image";
import HomeComponent from "./Home/page"; // Rename this import to avoid conflicts
import About from "./About/page";
import Projects from "./Projects/page";
import Services from "./Services/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import AOS from 'aos';

export default function MainPage() { // Rename the component
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      {/* home */}
      <HomeComponent />
      {/* about */}
      <About />
      {/* skills */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* services */}
      <Services />
      {/* contact */}
      <Contact />
    </>
  );
}
