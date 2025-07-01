'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from '../ui/NextImage';
import VideoBackground from '../ui/VideoBackground';

const RecycleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
    <path d="M7 19L12 14M12 14L17 19M12 14V22M19 12L14 17M14 17L9 12M14 17H22M17 5L12 10M12 10L7 5M12 10V2M5 12L10 7M10 7L15 12M10 7H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatureCard = ({ description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative rounded-[24px] overflow-hidden"
  >
    {/* Video Background */}
    <div className="absolute inset-0">
      <VideoBackground speed={1.2} opacity={0.4} />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#000B1D]/90" />

    {/* Content Container */}
    <div className="relative z-10 p-8">
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-[#000B1D] border border-white/[0.08] shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-8">
        <RecycleIcon />
      </div>

      {/* Description */}
      <p className="text-[#94A3B8] text-lg leading-relaxed">
        {description}
      </p>
    </div>

    {/* Bottom Gradient Line */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
  </motion.div>
);

const HowWeWork = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#000B1D] border border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="text-sm text-white/90 font-medium">How We Work?</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-white leading-[1.1] mb-3 sm:mb-4"
            >
              We Simplify The Journey
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#94A3B8] font-light mb-4 sm:mb-6"
            >
              By Streamlining Innovation to Reality
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-[#94A3B8] mb-8 sm:mb-10 md:mb-12"
            >
              We simplify the process from vision to execution, guiding you seamlessly from concept to final product.
            </motion.p>

            {/* Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FeatureCard
                description="Our Specialized Engineers can take control of battery management, regenerative systems, and charging technology in a real-time dashboard — while drivers can utilize pre-set, performance-optimized driving modes."
              />
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden">
              <NextImage
                src="/assets/images/img2.avif"
                alt="Electric Vehicle"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                unoptimized
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
            </div>

            {/* Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF0000]/20 to-transparent blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 