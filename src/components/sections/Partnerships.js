'use client';

import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../ui/VideoBackground';

const PartnerLogo = ({ name, className }) => (
  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-white/10 hover:border-[#0066FF]/30 transition-all duration-300 hover:scale-105 ${className}`}>
    <div className="text-white/70 font-medium text-xl">{name}</div>
  </div>
);

const Partnerships = () => {
  return (
    <div className="bg-[#000B1D] min-h-screen pt-24">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <VideoBackground speed={1.2} opacity={0.1} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000B1D] via-[#000B1D]/95 to-[#000B1D]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,102,255,0.1),transparent_70%)]" />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#0066FF] font-medium mb-4 block"
            >
              Strategic Alliances
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Partnerships
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-[#94A3B8]"
            >
              Collaborating with industry leaders to accelerate the future of electric mobility
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="relative py-20 z-10 bg-black/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Current Partners</h2>
            <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
              We're proud to work alongside these forward-thinking organizations to drive innovation in the EV industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PartnerLogo name="TechMotors" />
            <PartnerLogo name="EcoCharge" />
            <PartnerLogo name="Volt Dynamics" />
            <PartnerLogo name="GreenDrive" />
            <PartnerLogo name="EnergyX" />
            <PartnerLogo name="ElectraTech" />
            <PartnerLogo name="PowerGrid" />
            <PartnerLogo name="AutoFuture" />
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-lg text-[#94A3B8]">
              Joining forces with NexEV opens up a world of opportunities for your organization. Our collaborative approach ensures mutual growth and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-4">Access to Technology</h3>
              <p className="text-[#94A3B8]">
                Gain early access to our patent-pending technologies and integrate our solutions into your products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-4">Co-Development</h3>
              <p className="text-[#94A3B8]">
                Collaborate on joint R&D initiatives to develop next-generation solutions for the EV market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-4">Innovation Ecosystem</h3>
              <p className="text-[#94A3B8]">
                Join our innovation ecosystem to share knowledge, resources, and expertise with other industry leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="relative py-20 z-10 bg-black/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
            <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
              Our streamlined approach to forming lasting partnerships that create mutual value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-white font-medium mb-2">Initial Consultation</h3>
              <p className="text-[#94A3B8] text-sm">
                We meet to discuss your needs and explore partnership opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/80 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-white font-medium mb-2">Strategic Alignment</h3>
              <p className="text-[#94A3B8] text-sm">
                We develop a shared vision and align our strategic goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/60 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Partnership Agreement</h3>
              <p className="text-[#94A3B8] text-sm">
                We formalize our partnership through a comprehensive agreement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-white font-medium mb-2">Ongoing Collaboration</h3>
              <p className="text-[#94A3B8] text-sm">
                We work together to achieve our shared goals and continuously innovate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Ready to join forces with NexEV? Get in touch to explore how we can create value together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0066FF] text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:bg-[#0066FF]/90 transition-all duration-300 hover:scale-105"
            >
              Contact Our Partnership Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;