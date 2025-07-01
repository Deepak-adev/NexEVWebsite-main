'use client';

import React from "react";
import { motion } from "framer-motion";
import NextImage from '../ui/NextImage';

const projects = [
  { title: "Way Fields", year: "2025", img: "/assets/images/img1.avif", banner: "E-Commerce" },
  {
    title: "EV Fault Detection",
    year: "2025",
    img: "/assets/images/fault.webp",
    banner: "Business",
  },
  {
    title: "Smart IoT",
    year: "2025",
    img: "/assets/images/iot.webp",
    banner: "Software Application",
  },
];

const bannerVariants = {
  initial: { y: -20, opacity: 0 },
  hover: {
    y: 12,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 24 },
  },
};

// Single project card
const ProjectCard = ({ title, year, img, banner }) => (
  <motion.div
    className="relative p-3 group w-full aspect-square rounded-3xl overflow-hidden transition-all duration-300 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)]"
    initial="initial"
    whileHover="hover"
  >
    <div className="relative overflow-hidden w-full h-full rounded-2xl">
      <NextImage
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"
        width={1920}
        height={1080}
        unoptimized
      />
    </div>

    {/* Floating Banner */}
    <motion.div
      variants={bannerVariants}
      className="absolute top-3 right-6 z-10"
    >
      <div className="px-4 py-2 rounded-xl text-base font-extralight text-white bg-gradient-to-b from-[#071028] to-[#0f172a] shadow-md border border-blue-900">
        {banner}
      </div>
    </motion.div>

    {/* Elegant Bottom Banner */}
    <div className="mx-1 absolute bottom-5 left-4 right-4 z-10 rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-br from-[#071028] via-[#030D24] to-[#080913]">
        <p className="text-white font-medium text-base">{title}</p>
        <span className="text-white text-sm bg-blue-900/10 px-3 py-1 rounded-lg border border-blue-700/50 shadow-inner">
          {year}
        </span>
      </div>
    </div>
  </motion.div>
);

// Grid container for all project cards
const ProjectGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gradient-to-br from-[#0b0b1c] to-[#0f172a] min-h-screen px-24">
    {projects.map((project, i) => (
      <ProjectCard key={i} {...project} />
    ))}
  </div>
);

export default ProjectGrid;
