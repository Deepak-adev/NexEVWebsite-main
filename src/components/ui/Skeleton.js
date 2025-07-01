'use client';

import { motion } from 'framer-motion';

export default function Skeleton({ className = '', type = 'default' }) {
  const baseClasses = 'animate-pulse bg-gray-800/50 rounded';
  
  const variants = {
    default: 'h-4 w-full',
    title: 'h-8 w-3/4',
    text: 'h-4 w-full',
    avatar: 'h-12 w-12 rounded-full',
    image: 'h-48 w-full',
    button: 'h-10 w-24',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${baseClasses} ${variants[type]} ${className}`}
    />
  );
} 