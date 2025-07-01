'use client';

import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';
import NextImage from '../ui/NextImage';

const PartnerLogo = ({ name, className }) => (
  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-white/10 hover:border-[#0066FF]/30 transition-all duration-300 hover:scale-105 ${className}`}>
    <div className="text-white/70 font-medium text-xl">{name}</div>
  </div>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

// Add Boxicons user icon
const BoxUserIcon = () => (
  <svg className="w-7 h-7 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
);

const TestimonialCard = ({ name, role, company, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-8 rounded-[32px] bg-gradient-to-br from-[#0A0F1C] to-[#121A2C] border border-white/5 backdrop-blur-xl relative group hover:border-white/10 transition-colors duration-300"
  >
    {/* Profile Image - Using placeholder for now */}
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 mb-6 flex items-center justify-center">
      <BoxUserIcon />
    </div>
    
    {/* Rating Stars */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>

    {/* Review Content */}
    <p className="text-[#94A3B8] text-lg leading-relaxed font-light mb-8">
      {content}
    </p>

    {/* Author Info */}
    <div className="flex items-start justify-between">
      <div>
        <h4 className="text-white font-medium mb-1">{name} • {role}</h4>
        <p className="text-[#94A3B8] text-sm">{company}</p>
      </div>
      <button className="text-white/40 hover:text-white/60 transition-colors duration-300">
        <TwitterIcon />
      </button>
    </div>
  </motion.div>
);

const testimonials = [
  {
    name: "Arjun",
    role: "CEO",
    company: "Innovate Solutions",
    content: "Drivers have full control over battery management, regenerative systems, and charging technology through an intuitive dashboard, while enjoying preset driving modes for optimal performance."
  },
  {
    name: "employee2",
    role: "Product Manager",
    company: "Nexus Digital",
    content: "Our fast-charging technology allows EV owners to charge their vehicles quickly, getting them back on the road in no time."
  },
  {
    name: "employee3",
    role: "Founder",
    company: "GreenLeaf Enterprises",
    content: "With advanced settings, users can tailor their EV's performance to match their driving habits, ensuring efficiency and comfort."
  },
  {
    name: "employee4",
    role: "Creative Director",
    company: "PixelWorks Studio",
    content: "The easy-to-use interface allows drivers to monitor energy consumption, battery life, and driving range with just a few taps."
  },
  {
    name: "employee5",
    role: "Team Lead",
    company: "Mandro Designs",
    content: "Our professional support team is always available to assist drivers, ensuring they get the most out of their EV with tailored advice and assistance."
  },
  {
    name: "employee6",
    role: "Founder",
    company: "Fusion Studios",
    content: "With advanced settings, users can tailor their EV's performance to match their driving habits, ensuring efficiency and comfort."
  }
];

const Testimonial = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block py-2 px-4 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium backdrop-blur-sm border border-[#0066FF]/20 shadow-[0_0_15px_rgba(0,102,255,0.15)] mb-8"
        >
          Testimonial
        </motion.span>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.15] text-white mb-4 sm:mb-6">
            User Reviews About
            <br />
            <span className="text-[#94A3B8]">Performance, Usability, Innovations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed font-light">
            Hear from our delighted EV users! See how we've helped them enhance
            <br className="hidden sm:block" />
            their electric vehicle experience and achieve greater efficiency.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-16 mb-16"
        >
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: [0, 40, -40, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <NextImage
              src={'/assets/clogo/image1.png'}
              alt="Partner Logo 1"
              className="h-12 drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]"
              width={200}
              height={48}
              unoptimized
            />
            <NextImage
              src={'/assets/clogo/image2.png'}
              alt="Partner Logo 2"
              className="h-12 drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]"
              width={200}
              height={48}
              unoptimized
            />
            <NextImage
              src={'/assets/clogo/image3.png'}
              alt="Partner Logo 3"
              className="h-12 drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]"
              width={200}
              height={48}
              unoptimized
            />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <a
            href="/about"
            className="inline-block py-4 px-8 bg-[#0066FF] text-white rounded-full font-medium hover:bg-[#0066FF]/90 transition-colors duration-300 shadow-[0_0_30px_rgba(0,102,255,0.25)]"
          >
            View About NexEV
          </a>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 