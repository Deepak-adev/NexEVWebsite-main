import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Video Background */}
      <VideoBackground speed={1.0} opacity={0.8} />

      {/* Card Container */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#000B1D]/90 via-[#000B1D]/85 to-[#000B1D]/80 border border-white/[0.05] backdrop-blur-sm">
          <div className="relative z-10 py-24 px-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <span className="inline-block py-2 px-4 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium backdrop-blur-sm border border-[#0066FF]/20 shadow-[0_0_15px_rgba(0,102,255,0.15)]">
                Features
              </span>
            </motion.div>

            {/* Content Container */}
            <div className="max-w-[900px] mx-auto text-center">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[64px] font-normal tracking-[-0.02em] leading-[1.15] text-white mb-6"
              >
                Our Method is Simple and
                <br />
                <span className="text-[#94A3B8] font-light">Transparent at Every Step.</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-[#94A3B8] leading-relaxed font-light mb-12 max-w-[600px] mx-auto"
              >
                Harnessing the power of electric vehicle technology to revolutionize
                <br />
                transportation and enhance driving experiences.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="/contact"
                  className="inline-block py-4 px-8 bg-[#0066FF] text-white rounded-full font-medium hover:bg-[#0066FF]/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,102,255,0.25)]"
                >
                  Book an Appointment
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 