'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-sm border-t border-white/10 p-4 z-50"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Accept
              </button>
              <a
                href="/privacy"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 