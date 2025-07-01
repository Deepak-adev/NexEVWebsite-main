'use client';

import React from "react";
import { motion } from "framer-motion";

const Badge = ({ sideText, mainText }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-3 items-center justify-center p-[6px] rounded-xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)]"
    >
      <span className="bg-[#0055FE] text-white text-xs font-bold px-3 py-2 rounded-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] ring-1 ring-[#0055FE]/90">
        {sideText}
      </span>
      <span className="text-white text-base font-light tracking-wide">
        {mainText}
      </span>
    </motion.h1>
  );
};

export default Badge;
