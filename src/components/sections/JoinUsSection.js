'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const JoinUsSection = ({ 
  badgeText = "Join Us Now", 
  headingText = "Each Project we Undertake<br />is a Unique Opportunity.",
  descriptionText = "Ready to take the next step? Join us now and start transforming your vision into reality with expert support.",
  buttonText = "Book an Appointment" 
}) => {
  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split heading into main text and highlight text if it contains a <br/>
  const headingParts = headingText.split('<br />');
  const mainHeading = headingParts[0];
  const highlightHeading = headingParts.length > 1 ? headingParts[1] : '';

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className={`container mx-auto px-6 ${isMobile ? 'pb-16' : 'pb-32'}`}
      variants={fadeInUp}
      custom={0.6}
      initial="hidden"
      animate="visible"
    >
      <div className={`bg-[#0A0A0A]/60 backdrop-blur-sm rounded-[32px] ${isMobile ? 'p-6' : 'p-16'} relative overflow-hidden`}>
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden rounded-[32px]">
          <VideoBackground speed={1.0} opacity={0.15} />
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-[#0A0A0A]/60 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className={`text-white ${isMobile ? 'text-xs' : 'text-sm'}`}>{badgeText}</span>
          </div>

          <h2 className={`${isMobile ? 'text-3xl md:text-5xl' : 'text-[72px]'} font-light text-white mb-4`}>
            {mainHeading}
            {highlightHeading && (
              <>
                <br />
                <span className="text-[#94A3B8]">{highlightHeading}</span>
              </>
            )}
          </h2>

          <p className={`text-[#94A3B8] ${isMobile ? 'text-sm md:text-base' : 'text-xl'} max-w-3xl mx-auto mb-6`}>
            {descriptionText}
          </p>

          <motion.button
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-[#0066FF] text-white px-6 py-2.5 ${isMobile ? 'text-base' : 'text-lg px-8 py-3'} rounded-full font-medium hover:bg-[#0055DD] transition-colors`}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default JoinUsSection; 