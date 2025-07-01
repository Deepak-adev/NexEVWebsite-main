'use client';

import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import GlowButton from "../ui/GlowButton";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProductHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-[120px] pb-[60px] overflow-hidden bg-transparent">
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex-1 flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-[900px] flex flex-col items-center justify-center gap-8"
        >
          <motion.div variants={itemVariants}>
            <Badge sideText="2025" mainText="Explore Our Portfolio" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[42px] sm:text-[64px] lg:text-[90px] font-normal text-white text-center leading-[1.1] tracking-[-0.02em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            Check Out Some
            <br />
            Extra-Ordinary Work.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#94A3B8] text-lg max-w-[600px] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-center"
          >
            From startups to established brands, we create tailored solutions
            that drive success and make a real impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <GlowButton href="/" text="Build Your Product" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
