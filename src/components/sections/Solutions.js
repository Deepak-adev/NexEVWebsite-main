import React from 'react';
import { motion } from 'framer-motion';

const SolutionCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#0066FF]/30 transition-colors duration-300"
    >
      <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl text-white font-medium mb-4">{title}</h3>
      <p className="text-[#94A3B8]">{description}</p>
    </motion.div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Battery Management",
      description: "Advanced battery management systems for optimal performance and longevity.",
      icon: (
        <svg className="w-6 h-6 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Thermal Control",
      description: "Intelligent thermal management for enhanced safety and efficiency.",
      icon: (
        <svg className="w-6 h-6 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      description: "Smart systems for maximum power output and range optimization.",
      icon: (
        <svg className="w-6 h-6 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

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
            Our Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-normal text-white leading-[1.2] tracking-[-0.02em] mb-4"
          >
            Comprehensive EV<br />
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg mb-12"
          >
            We provide end-to-end solutions for electric vehicles, from battery management to performance optimization.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <a 
              href="/solutions" 
              className="text-[#0066FF] hover:text-[#0066FF]/80 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Explore Our Solutions
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

export default Solutions; 