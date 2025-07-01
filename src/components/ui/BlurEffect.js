'use client';

import React, { useState, useEffect } from 'react';

const BlurEffect = () => {
  // State to track scroll position
  const [scrollY, setScrollY] = useState(0);
  
  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-[51px] pointer-events-none z-20"
      style={{
        background: "linear-gradient(to top, rgba(0, 11, 29, 0.9) 10%, rgba(0, 11, 29, 0.5) 50%, rgba(0, 11, 29, 0) 100%)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(3px)",
        opacity: Math.min(1, scrollY / 500) // Gradually appear as user scrolls
      }}
    />
  );
};

export default BlurEffect; 