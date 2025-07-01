import React from 'react';
import { motion } from 'framer-motion';
import NextImage from '../ui/NextImage';

const ProjectCard = ({ image, title, year, progress, tags, index }) => (
  <motion.div
    initial={{ 
      opacity: 0,
      y: 100,
      scale: 0.95,
      transformPerspective: 1000
    }}
    whileInView={{ 
      opacity: 1,
      y: 0,
      scale: 1
    }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 1,
      delay: index * 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="relative rounded-[24px] overflow-hidden max-w-[1000px] mx-auto group transform-gpu"
  >
    {/* Image with Parallax Effect */}
    <motion.div 
      className="relative aspect-[16/9]"
      initial={{ scale: 1.2 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <NextImage 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </motion.div>

    {/* Content */}
    <motion.div 
      className="absolute inset-x-0 bottom-0 p-8 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Title and Year */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
        <span className="text-[#94A3B8] text-sm">• {year}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: `${progress}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute inset-y-0 left-0 bg-[#0066FF] rounded-full"
        />
      </div>

      {/* Tags */}
      <div className="flex items-center gap-4">
        {tags.map((tag, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            className="text-[#94A3B8] text-sm"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>

    {/* Hover Effects */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-[#000B1D] via-[#000B1D]/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
    </div>
  </motion.div>
);

const Portfolio = () => {
  const projects = [
    {
      image: "https://framerusercontent.com/images/HTQpkNi0yrVxIsa0dA6BS7nAuE0.webp",
      title: "Thermo-Regeneration",
      year: "2025",
      progress: 75,
      tags: ["Hardware Solution", "Software Solution"]
    },
    {
      image: "https://framerusercontent.com/images/m5ryQIcO83RPFTqtZiZC6367ng.webp",
      title: "EV Fault Detection",
      year: "2025",
      progress: 60,
      tags: ["Battery Surveillance", "Tracking Charging status"]
    },
    {
      image: "https://framerusercontent.com/images/QZji76DdGHh8Nbz494uKLm2Spp4.webp",
      title: "IOT enabled charging stations",
      year: "2025",
      progress: 85,
      tags: ["Software Application", "Landing Page"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Left Angular Shape */}
        <div 
          className="absolute left-0 top-[15%] w-[60%] h-[1000px] bg-[#000B1D]"
          style={{
            clipPath: 'polygon(0 0%, 100% 25%, 100% 100%, 0% 100%)'
          }}
        />
        
        {/* Right Angular Shape */}
        <div 
          className="absolute right-0 top-[15%] w-[60%] h-[1000px] bg-[#000B1D]"
          style={{
            clipPath: 'polygon(0 25%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-70" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="text-sm text-[#94A3B8] font-medium uppercase tracking-wider">Portfolio</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal text-white mb-4 sm:mb-6 leading-tight"
          >
            Our Featured Projects
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            Driving Your Website's Success. Discover our handpicked portfolio, highlighting collaborations with forward-thinking clients from various industries.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-[#0066FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0066FF]/90 transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
          </motion.div>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 