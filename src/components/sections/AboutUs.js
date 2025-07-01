'use client';

import React from "react";
import { motion } from "framer-motion";
import NextImage from "../ui/NextImage";
import VideoBackground from '../ui/VideoBackground';

const GlassButton = ({ to, variant = "primary", children }) => {
  const baseStyles =
    "relative px-6 py-3 text-[15px] font-medium rounded-[8px] transition-all duration-300";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/15",
  };

  return (
    <motion.a
      href={to}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

const AboutUs = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between pt-[120px] pb-[60px] overflow-hidden bg-black">
        {/* Video Background */}
        <VideoBackground speed={1.0} opacity={0.8} />

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10 flex-1 flex items-center">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-6"
            >
              <span className="bg-blue-500 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
                2025
              </span>
              <span className="text-sm font-medium text-white/90">
                Dig Deep About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[64px] md:text-[72px] font-normal text-white leading-[1.1] tracking-[-0.02em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Learn More About NexEV
              <br />
              Let's Deep Dive!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-[#94A3B8] text-lg max-w-[600px] mx-auto font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              NexEV Solutions is at the forefront of revolutionizing electric
              vehicle (EV) technology. With cutting-edge regenerative systems,
              intelligent battery management systems (BMS), and innovative
              charging solutions, we are pioneering a more sustainable future
              for transportation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <GlassButton to="/contact" variant="primary">
                Get in Touch
              </GlassButton>
              <GlassButton to="/about#about" variant="secondary">
                What is NexEV?
              </GlassButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-16"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div
              className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden"
              style={{ aspectRatio: "16/11" }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <NextImage
                  src="/assets/images/img1.avif"
                  alt="EV Car Concept"
                  className="w-full h-[160%] object-cover object-center opacity-90"
                  style={{ marginTop: "-30%" }}
                  width={1920}
                  height={1080}
                  unoptimized
                />
              </div>
              {/* Image Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              {/* Reflection Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/[0.08] to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="about"
        className="py-24 relative overflow-hidden bg-[#000B1D]"
      >
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
                  alt="EV Concept Car"
                  className="w-full h-full object-cover object-center opacity-90"
                  width={1920}
                  height={1080}
                  unoptimized
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
                className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                About NexEV
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[32px] md:text-[48px] font-normal leading-[1.1] text-white tracking-[-0.02em]"
              >
                A Startup Towards
                <br />
                <span className="text-[#94A3B8]">
                  Sustainable Future
                </span>
              </motion.h2>

              {/* Company Mission & Vision Content - Added Below Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white">
                    Company Mission & Vision
                  </h3>
                  <p className="text-base text-[#94A3B8]">
                    At NexEV, we empower clients to achieve their EV goals,
                    working closely with them every step of the way.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white">
                    Partners You Can Rely On
                  </h3>
                  <p className="text-base text-[#94A3B8]">
                    NexEV ensures your success with expert guidance and
                    collaborative teamwork.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white">
                    Partner With Us
                  </h3>
                  <div className="text-base text-[#94A3B8] space-y-1">
                    <p>Why Partner with NexEV?</p>
                    <p>• OEM & Startup Collaborations</p>
                    <p>• Investment & Funding Opportunities</p>
                    <p>• Joint Development Agreements (JDAs)</p>
                  </div>
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
                  href="/contact"
                  className="inline-block py-3 px-8 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-[#0066FF]/90 transition-all duration-300"
                >
                  Book an Appointment
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
