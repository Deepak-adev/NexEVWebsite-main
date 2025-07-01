'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlowButton from "./GlowButton";
import NextImage from 'next/image';

// This component creates a spacer div that matches the header height
const HeaderSpacer = () => {
  return <div className="h-[70px] md:h-0 w-full"></div>;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledNow = currentScrollPos > 20;
      
      // Set scrolled state for style changes
      setIsScrolled(isScrolledNow);
      
      // Determine if header should be visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50 || isMobileMenuOpen);
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-900/40 border-b border-[#19203e] transition-all duration-500 ${
          !visible ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled ? 'shadow-lg shadow-[#0066FF]/5' : ''}`}
      >
        <style jsx global>{`
          .nav-link-active {
            position: relative;
            color: white;
          }
          
          .nav-link-active::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background: white;
            box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.6), 0 0 12px 2px rgba(255, 255, 255, 0.4);
            animation: pulse 1.5s infinite;
          }
          
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          
          /* Hamburger Icon Animation */
          .hamburger-line {
            transition: all 0.3s ease;
          }
          
          .hamburger-active .hamburger-line:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          
          .hamburger-active .hamburger-line:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger-active .hamburger-line:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          
          /* Mobile menu overlay */
          .mobile-menu-overlay {
            background: linear-gradient(to bottom, rgba(4, 9, 46, 0.9), rgba(0, 10, 30, 0.95));
            backdrop-filter: blur(10px);
          }
        `}</style>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[91px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-colors duration-200"
            >
              <NextImage
                src={'/assets/images/image1.png'}
                alt="NexEV Solutions Logo"
                width={500} 
                height={50}
                priority // Prioritize loading of the logo
                className="object-contain mx-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ml-8">
              <div className="flex space-x-8">
                <Link 
                  href="/" 
                  className={`transition-colors text-base cursor-pointer ${pathname === '/' ? 'nav-link-active' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`transition-colors text-base cursor-pointer ${pathname === '/about' ? 'nav-link-active' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  About us
                </Link>
                <Link 
                  href="/products" 
                  className={`transition-colors text-base cursor-pointer ${pathname === '/products' ? 'nav-link-active' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  Products
                </Link>
                <Link 
                  href="/contact" 
                  className={`transition-colors text-base cursor-pointer ${pathname === '/contact' ? 'nav-link-active' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  Contact
                </Link>
                <Link 
                  href="/partnerships" 
                  className={`transition-colors text-base cursor-pointer ${pathname === '/partnerships' ? 'nav-link-active' : 'text-[#94A3B8] hover:text-white'}`}
                >
                  Partnerships
                </Link>
              </div>
            </nav>

            <div className="flex items-center space-x-6">
              {/* Get in Touch Button - desktop only */}
              <div className="hidden md:block">
                <GlowButton href="/contact" text="Get In Touch" />
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden w-10 h-10 flex flex-col justify-center items-center rounded-md focus:outline-none group cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className={`flex flex-col justify-center items-center w-6 h-6 ${isMobileMenuOpen ? 'hamburger-active' : ''}`}>
                  <span className="hamburger-line block h-0.5 w-6 bg-white rounded-sm mb-1.5"></span>
                  <span className="hamburger-line block h-0.5 w-6 bg-white rounded-sm mb-1.5"></span>
                  <span className="hamburger-line block h-0.5 w-6 bg-white rounded-sm"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute right-0 top-0 h-screen w-3/4 max-w-sm bg-[#04092e]/95 backdrop-blur-xl shadow-2xl border-l border-[#19203e] p-6 pt-24 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#0A1235] text-white/80 hover:text-white transition-colors touch-target"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-6 mt-8">
                  <Link 
                    href="/" 
                    className={`text-lg font-medium text-white/80 hover:text-white transition-colors touch-target ${
                      pathname === '/' ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className={`text-lg font-medium text-white/80 hover:text-white transition-colors touch-target ${
                      pathname === '/about' ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link 
                    href="/products" 
                    className={`text-lg font-medium text-white/80 hover:text-white transition-colors touch-target ${
                      pathname === '/products' ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link 
                    href="/contact" 
                    className={`text-lg font-medium text-white/80 hover:text-white transition-colors touch-target ${
                      pathname === '/contact' ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/partnerships" 
                    className={`text-lg font-medium text-white/80 hover:text-white transition-colors touch-target ${
                      pathname === '/partnerships' ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Partnerships
                  </Link>
                </nav>

                {/* Mobile Contact Button */}
                <div className="mt-8">
                  <GlowButton href="/contact" text="Get In Touch" className="w-full justify-center" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Add padding to prevent content from going under the navbar */}
      <HeaderSpacer />
    </>
  );
};

export default Header; 