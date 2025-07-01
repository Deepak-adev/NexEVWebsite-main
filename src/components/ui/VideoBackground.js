'use client';

import React, { useEffect, useRef, useState } from "react";

const VideoBackground = ({ speed = 1.0, opacity = 0.8, className = "" }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle video playback
  useEffect(() => {
    if (videoRef.current && isMounted) {
      const video = videoRef.current;
      
      // Set playback rate
      video.playbackRate = speed;

      // Force play the video
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.error('Error playing video:', error);
          setHasError(true);
        }
      };

      playVideo();

      // Handle video loading
      const handleLoad = () => {
        setIsLoading(false);
        playVideo();
      };

      video.addEventListener('loadeddata', handleLoad);
      video.addEventListener('error', () => {
        setIsLoading(false);
        setHasError(true);
      });

      return () => {
        video.removeEventListener('loadeddata', handleLoad);
      };
    }
  }, [speed, isMounted]);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden bg-black ${className}`}
    >
      {!hasError && isMounted && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{ opacity: isLoading ? 0 : opacity }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      )}
      {/* Fallback gradient background when video fails to load or during initial load */}
      {(hasError || !isMounted) && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-900" />
      )}
      {/* Loading state */}
      {isLoading && isMounted && (
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}
      {/* Blue color shade overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 via-transparent to-[#0066FF]/10" />
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      {/* Blue accent gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.15] blur-[120px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full opacity-[0.1] blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
      </div>
      {/* Additional blue glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform translate-x-1/4" />
        <div className="absolute bottom-[5%] left-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform -translate-x-1/4" />
      </div>
    </div>
  );
};

export default VideoBackground;
