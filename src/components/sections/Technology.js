import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[800px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#0066FF] text-sm font-medium mb-4 block"
          >
            Our Technology
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-normal text-white leading-[1.2] tracking-[-0.02em] mb-4"
          >
            Revolutionizing EV<br />
            Performance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg mb-12"
          >
            Our innovative technology enhances EV efficiency and safety through advanced heat management systems.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-4">Smart Heat Management</h3>
              <p className="text-[#94A3B8] mb-6">Advanced thermal management system that optimizes battery temperature and performance.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Temperature Optimization
                </li>
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Energy Efficiency
                </li>
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Battery Longevity
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-4">Safety First</h3>
              <p className="text-[#94A3B8] mb-6">Comprehensive safety features ensuring reliable and secure EV operation.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Thermal Protection
                </li>
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Overcharge Prevention
                </li>
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time Monitoring
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <a 
              href="/technology" 
              className="text-[#0066FF] hover:text-[#0066FF]/80 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Learn More About Our Technology
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 