'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gray-900 border-t-2 border-gray-700 w-full">
        {/* Road Lines */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-1 bg-white opacity-50 transform -translate-y-1/2"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
          }}
          style={{ background: 'linear-gradient(90deg, transparent 0%, white 20%, white 80%, transparent 100%)' }}
        />
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-1 bg-white opacity-50 transform -translate-y-1/2"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
          }}
          style={{ background: 'linear-gradient(90deg, transparent 0%, white 20%, white 80%, transparent 100%)' }}
        />
      </div>

      {/* Car Container */}
      <motion.div
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="absolute bottom-1/4 mb-10 w-64 h-28"
      >
        {/* Main Car Body */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
            delay: 0.2
          }}
          className="absolute bottom-8 left-0 w-48 h-16 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-xl shadow-2xl border-2 border-blue-400"
        >
          {/* Cabin */}
          <div className="absolute top-0 left-10 w-28 h-8 bg-blue-800 rounded-t-lg opacity-80"></div>
          {/* Headlights */}
          <div className="absolute top-6 left-2 w-4 h-4 bg-yellow-300 rounded-full blur-sm"></div>
          <div className="absolute top-6 left-8 w-4 h-4 bg-yellow-300 rounded-full blur-sm"></div>
          {/* Taillights (invisible but for glow) */}
          <div className="absolute top-6 right-2 w-4 h-4 bg-red-500 rounded-full blur-sm"></div>
        </motion.div>

        {/* Wheels */}
        <div className="absolute bottom-0 left-6 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700 shadow-lg"></div>
        <div className="absolute bottom-0 right-6 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700 shadow-lg"></div>

        {/* Exhaust Fire/Glow */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: [0, 100, 0], opacity: [0, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.2,
            repeatDelay: 2.9
          }}
          className="absolute bottom-10 -right-16 h-8 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 rounded-full blur-md transform -skew-x-12 opacity-70"
        ></motion.div>
         <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: [0, 60, 0], opacity: [0, 0.8, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: 'easeOut',
            delay: 0.3,
            repeatDelay: 3
          }}
          className="absolute bottom-10 -right-10 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-sm transform -skew-x-12 opacity-50"
        ></motion.div>
      </motion.div>
    </div>
  );
} 