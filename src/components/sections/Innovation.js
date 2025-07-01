'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from '../ui/NextImage';

const imagesInnovation = [
  '/assets/innovation/image1.png',
  '/assets/innovation/image2.png',
  '/assets/innovation/image3.png',
  '/assets/innovation/image4.png',
  '/assets/innovation/image.png',
];

const imagesOther = [
  '/assets/images/iot.webp',
  '/assets/images/fault.webp',
  '/assets/images/i5.webp',
  '/assets/images/i4.webp',
  '/assets/images/i3.avif',
  '/assets/images/i2.webp',
  '/assets/images/i1.avif',
  '/assets/images/img2.avif',
  '/assets/images/img1.avif',
];

const marqueeVariants = {
  animate: {
    x: [0, -1800],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 22,
        ease: 'linear',
      },
    },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: [-1800, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 22,
        ease: 'linear',
      },
    },
  },
};

const Innovation = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Dark Angular Background */}
      <div className="absolute inset-0 z-0">
        {/* Left Angular Shape */}
        <div 
          className="absolute left-0 top-[15%] w-[48%] h-[400px] bg-[#000B1D]"
          style={{ transform: 'skewY(-35deg)' }}
        />
        
        {/* Right Angular Shape */}
        <div 
          className="absolute right-0 top-[15%] w-[48%] h-[400px] bg-[#000B1D]"
          style={{ transform: 'skewY(35deg)' }}
        />
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-[#000B1D]/50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-[1000px] mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-3"
          >
            The Trusted Innovation Partner
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light text-[#94A3B8] leading-tight mb-6 sm:mb-8 md:mb-10"
          >
            For EV Companies and Tech Pioneers
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#94A3B8] font-light mb-8 sm:mb-10 md:mb-12 max-w-[540px] mx-auto leading-relaxed"
          >
            Accelerate your EV journey with cutting-edge solutions and expert
            support, ensuring a smooth and efficient launch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/about"
              className="inline-flex items-center px-10 py-3.5 bg-[#0066FF] text-white rounded-full text-[15px] font-medium hover:bg-[#0066FF]/90 transition-all duration-300 hover:scale-[1.02]"
            >
              View About NEXEV
            </a>
          </motion.div>
        </div>

        {/* Infinite Marquee Gallery */}
        <div className="relative w-full overflow-x-hidden py-8">
          <motion.div
            className="flex gap-8"
            variants={marqueeVariants}
            animate="animate"
            style={{ width: `${imagesInnovation.length * 400 * 2}px` }}
          >
            {[...imagesInnovation, ...imagesInnovation].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] h-[260px] rounded-[24px] overflow-hidden bg-[#000B1D]/40 border border-[#222b44] shadow-lg"
              >
                <NextImage
                  src={img}
                  alt="Innovation"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  width={1920}
                  height={1080}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Second Infinite Marquee Gallery (reverse direction) */}
        <div className="relative w-full overflow-x-hidden py-8 mt-4">
          <motion.div
            className="flex gap-8"
            variants={marqueeVariantsReverse}
            animate="animate"
            style={{ width: `${imagesOther.length * 400 * 2}px` }}
          >
            {[...imagesOther, ...imagesOther].map((img, idx) => (
              <div
                key={"reverse-" + idx}
                className="flex-shrink-0 w-[400px] h-[260px] rounded-[24px] overflow-hidden bg-[#000B1D]/40 border border-[#222b44] shadow-lg"
              >
                <NextImage
                  src={img}
                  alt="Innovation Reverse"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  width={1920}
                  height={1080}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue Accent Gradients */}
        <div className="absolute top-[5%] right-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform translate-x-1/4" />
        <div className="absolute bottom-[5%] left-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform -translate-x-1/4" />
      </div>
    </section>
  );
};

export default Innovation; 