import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NextImage from '../ui/NextImage';

const Card = ({ image, title, description, tags = [], isNew = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative flex-shrink-0 w-[280px] sm:w-[400px] md:w-[500px] overflow-hidden rounded-[32px] aspect-video bg-[#000B1D]/40"
  >
    {/* Background Image */}
    <NextImage 
      src={image} 
      alt={title}
      className="w-full h-full object-cover"
      width={1920}
      height={1080}
      unoptimized
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

    {/* Content */}
    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <span className="text-xs sm:text-sm text-white tracking-wide">NEXEV SOLUTIONS LTD.</span>
      </div>
      
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-[#94A3B8] text-sm sm:text-base font-light mb-3 sm:mb-4 max-w-[90%]">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-xs sm:text-sm bg-white/5 text-[#94A3B8] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {isNew && (
        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 py-1 px-2 sm:px-3 rounded-full bg-[#0066FF] text-white text-xs sm:text-sm font-medium">
          NEW
        </div>
      )}
    </div>
  </motion.div>
);

const Results = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const results = [
    {
      image: "https://framerusercontent.com/images/HTQpkNi0yrVxIsa0dA6BS7nAuE0.webp",
      title: "EV Charging Hardware",
      description: "Reliable, high-performance hardware for fast and secure charging.",
      tags: ["Innovative Patents"]
    },
    {
      image: "https://framerusercontent.com/images/m5ryQIcO83RPFTqtZiZC6367ng.webp",
      title: "EV Charging Ecosystem",
      description: "Seamless integration of charging hardware, software, and mobile solutions.",
      tags: ["Dedicated Application", "EV Connect"]
    },
    {
      image: "https://framerusercontent.com/images/QZji76DdGHh8Nbz494uKLm2Spp4.webp",
      title: "Regenerative Charging System",
      description: "Boosted customer engagement with a digital presence and targeted campaigns.",
      tags: ["Patented", "30% reduction in battery strain"],
      isNew: true
    },
    {
      image: "https://framerusercontent.com/images/tJiFDQuUuBhC6ddxKAsUJGWgLs.webp",
      title: "Fault Detection System",
      description: "Proactive monitoring and real-time fault detection capabilities.",
      tags: ["20% faster response", "AI-Powered"]
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let timeoutId;

    const scrollToNext = () => {
      if (isHovered) return;

      const nextIndex = (currentIndex + 1) % results.length;
      const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 400 : 500;
      const gap = window.innerWidth < 640 ? 16 : 24;
      
      scrollContainer.scrollTo({
        left: (cardWidth + gap) * nextIndex,
        behavior: 'smooth'
      });
      
      setCurrentIndex(nextIndex);
    };

    timeoutId = setInterval(scrollToNext, 3000); // Scroll every 3 seconds

    return () => {
      clearInterval(timeoutId);
    };
  }, [currentIndex, results.length, isHovered]);

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-black">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#94A3B8] font-medium mb-4 block uppercase tracking-wider"
          >
            Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[72px] font-normal text-white mb-4 sm:mb-6 tracking-tight uppercase"
          >
            REVOLUTIONIZING EV MOBILITY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-[44px] font-light text-[#94A3B8] mb-4 sm:mb-6"
          >
            By Powering Sustainable Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-[600px] mx-auto font-light"
          >
            At the core of our innovations is a commitment to delivering cutting-edge EV technology that drives cleaner, smarter mobility.
          </motion.p>
        </div>

        {/* Auto-scrolling Cards */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {results.map((result, index) => (
              <div key={index} className="snap-start">
                <Card {...result} />
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 400 : 500;
                  const gap = window.innerWidth < 640 ? 16 : 24;
                  scrollRef.current.scrollTo({
                    left: (cardWidth + gap) * index,
                    behavior: 'smooth'
                  });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue Accent Gradients */}
        <div className="absolute top-[5%] right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform translate-x-1/4" />
        <div className="absolute bottom-[5%] left-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform -translate-x-1/4" />
      </div>
    </section>
  );
};

export default Results; 