'use client';

import React from "react";
import { motion } from 'framer-motion';
import ProductHero from "./ProductHero";
import FAQ from "./FAQ";
import ProjectGrid from "./ProjectGrid";
import VideoBackground from '../ui/VideoBackground';
import BlurEffect from "../ui/BlurEffect";

const Products = () => {
  return (
    <>
      <VideoBackground speed={1.0} opacity={0.8} />
      <div className="bg-white min-h-screen z-100">
        <ProductHero />
        <ProjectGrid />
        <FAQ />
        <BlurEffect />
      </div>
    </>
  );
};

export default Products;
