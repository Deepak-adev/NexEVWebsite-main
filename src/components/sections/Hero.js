'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoBackground from '../ui/VideoBackground';

const GlassButton = ({ href, variant = "primary", children }) => {
  const baseStyles =
    "relative px-6 py-3 text-[15px] font-medium rounded-[8px] transition-all duration-300";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/15",
  };

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-70px)] md:min-h-screen flex flex-col justify-between pt-[80px] md:pt-[120px] pb-[40px] md:pb-[60px] overflow-hidden bg-black">
      {/* Video Background */}
      <VideoBackground speed={1.0} opacity={0.8} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="max-w-[800px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${isMobile ? 'text-5xl sm:text-6xl' : 'text-[64px] md:text-[80px]'} font-normal text-white leading-[1.1] tracking-[-0.02em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
          >
            Revolutionizing
            <br />
            EV Technology
            <br />
            <span className="text-[#94A3B8]">&</span> Charging Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-4 sm:mt-6 text-[#94A3B8] ${isMobile ? 'text-lg sm:text-xl' : 'text-lg'} max-w-[600px] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
          >
            Pioneering next-gen EV technology with regenerative systems, smart
            BMS, and seamless charging solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-10 flex flex-wrap gap-4"
          >
            <GlassButton href="/contact" variant="primary">
              Get in Touch
            </GlassButton>
            <GlassButton href="/about" variant="secondary">
              What is NEXEV?
            </GlassButton>
          </motion.div>
        </div>
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8 sm:mt-0"
      >
        <motion.div
          className={`flex items-center ${isMobile ? 'gap-8 overflow-x-auto pb-4' : 'gap-16'}`}
          animate={{ x: isMobile ? [0, 20, -20, 0] : [0, 40, -40, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <img
            src={'/assets/clogo/image1.png'}
            alt="Partner Logo 1"
            className={`${isMobile ? 'h-12' : 'h-16'} drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]`}
          />
          <img
            src={'/assets/clogo/image2.png'}
            alt="Partner Logo 2"
            className={`${isMobile ? 'h-12' : 'h-16'} drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]`}
          />
          <img
            src={'/assets/clogo/image3.png'}
            alt="Partner Logo 3"
            className={`${isMobile ? 'h-12' : 'h-16'} drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
