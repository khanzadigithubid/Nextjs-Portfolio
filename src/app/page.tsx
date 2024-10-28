"use client"

import AOS from 'aos'; // for AOS
import 'aos/dist/aos.css'; // to import the AOS styles
import Home from "./Home/page"; // Rename this import to avoid conflicts
import About from "./About/page";
import Projects from "./Projects/page";
import Services from "./Services/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import { useEffect } from 'react';

export default function MainPage() { // Rename the component
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      {/* home */}
      <Home />
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
