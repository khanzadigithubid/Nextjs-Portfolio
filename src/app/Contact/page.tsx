"use client"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const notify = () =>
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "dbda848b-a2a9-4954-88c7-5e5362feae49");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        notify();
        event.currentTarget.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-2 sm:mb-3">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaEnvelope className="text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Get in Touch</span>
            </div>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-slate-300 mx-auto mt-1.5 sm:mt-2"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-2 sm:mb-3">
            Contact Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-4">
            Let&apos;s discuss your project and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8" data-aos="fade-right">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4 md:mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors duration-200"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-colors duration-200"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-medium hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8" data-aos="fade-left">
            {/* Map */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.790343352196!2d67.0282!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0a0a0a0a0a%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDEnNDEuNSJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-t-xl sm:rounded-t-2xl"
                title="Karachi Location"
              />
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4 md:mb-6">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-sky-100 rounded-lg">
                    <FaEnvelope className="text-sky-600 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600">Email</p>
                    <a
                      href="mailto:khanzadiwazirali9@gmail.com"
                      className="text-xs sm:text-sm md:text-base text-slate-800 hover:text-sky-600 transition-colors duration-200"
                    >
                      khanzadiwazirali9@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-sky-100 rounded-lg">
                    <FaMapMarkerAlt className="text-sky-600 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600">Location</p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800">Karachi</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-slate-200">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 mb-2 sm:mb-3 md:mb-4">Connect with Me</h3>
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
                    className="p-2 sm:p-2.5 md:p-3 bg-slate-100 rounded-lg hover:bg-sky-100 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-slate-700 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                  <a
                    href="https://github.com/khanzadigithubid/"
                    className="p-2 sm:p-2.5 md:p-3 bg-slate-100 rounded-lg hover:bg-sky-100 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaGithub className="text-slate-700 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                  <a
                    href="https://x.com/Khanzadi0099"
                    className="p-2 sm:p-2.5 md:p-3 bg-slate-100 rounded-lg hover:bg-sky-100 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-slate-700 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}