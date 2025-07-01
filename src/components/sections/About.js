'use client';

import React from "react";
import { motion } from "framer-motion";
import NextImage from "../ui/NextImage";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#0066FF] flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" className="opacity-20" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#000B1D]">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            {/* Image Container with Shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.08),transparent_70%)]" />
            </div>

            {/* Main Image */}
            <div className="relative h-full w-full">
              <NextImage
                src="/assets/images/img1.avif"
                alt="EV Car Concept"
                className="w-full h-full object-cover object-center opacity-90"
                width={1920}
                height={1080}
                priority
              />

              {/* Image Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

              {/* Reflection Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/[0.08] to-transparent" />
            </div>

            {/* Outer Shadow Effect */}
            <div className="absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)] blur-2xl pointer-events-none" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-[#94A3B8] font-medium"
            >
              About NexEV
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[64px] font-normal leading-[1.1] text-white"
            >
              Advancing EV Safety &<br />
              Efficiency
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#94A3B8]"
            >
              A Patent-Pending Technology for Safer & More Efficient EVs
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-4"
            >
              <div className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[#94A3B8] text-base">
                  Filed Patents showcasing breakthrough innovations in EV tech.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[#94A3B8] text-base">
                  Optimizing EV Efficiency Through Waste Heat Recovery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[#94A3B8] text-base">
                  Developed a Thermoelectric Regenerative Charging System
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="/about"
                className="inline-block py-3 px-6 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-[#0066FF]/90 transition-all duration-300"
              >
                View About NexEV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
