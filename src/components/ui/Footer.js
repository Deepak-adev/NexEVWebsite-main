'use client';

import React, { useState } from "react";

import VideoBackground from "./VideoBackground";

const LogoIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M20 4L6 12V28L20 36L34 28V12L20 4Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path d="M20 4L6 12L20 20L34 12L20 4Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#000B1D] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <VideoBackground speed={1.2} opacity={0.1} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000B1D] via-[#000B1D]/95 to-[#000B1D]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,102,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {/* Logo and Subscribe Section */}
            <div className="lg:col-span-4 space-y-8 md:space-y-12">
              {/* Logo */}
              <LogoIcon />

              {/* Subscribe Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email..."
                  className="flex-1 bg-[#000B1D] border border-white/[0.08] rounded-lg px-4 py-3.5 text-[15px] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-500/20 touch-manipulation"
                />
                <button
                  type="submit"
                  className="bg-[#0066FF] text-white px-6 py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#0066FF]/90 active:bg-[#0055DD] transition-colors duration-200 whitespace-nowrap touch-manipulation"
                >
                  Subscribe Us
                </button>
              </form>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-8 gap-8 md:gap-12">
              {/* Pages */}
              <div>
                <h4 className="text-white font-medium mb-4 sm:mb-6 text-[15px]">
                  Pages
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a
                      href="/"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/technology"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partnerships"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Partnerships
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-white font-medium mb-4 sm:mb-6 text-[15px]">
                  Social
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a
                      href="/twitter"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Twitter (X)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/instagram"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="/youtube"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nexev-solutions-private-limited"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-medium mb-4 sm:mb-6 text-[15px]">
                  Legal
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a
                      href="/terms"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-[#94A3B8] hover:text-white transition-colors text-[15px] py-2 block touch-manipulation"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
