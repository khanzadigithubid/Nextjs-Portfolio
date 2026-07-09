"use client"

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Home from './Home/page';
import About from './About/page';
import Projects from './Projects/page';
import Services from './Services/page';
import Skills from './Skills/page';
import Contact from './Contact/page';

export default function MainPage() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Dynamic import AOS only when needed (code-splitting benefit)
      import('aos').then((AOS) => {
        AOS.init({
          duration: 500,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
      });
    }
  }, []);

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
