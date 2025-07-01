import React from 'react';
import { motion } from 'framer-motion';
import NextImage from '../ui/NextImage';

const BenefitCard = ({ image, title, description, isLarge = false, hasNew = false, buttons = [] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`relative overflow-hidden rounded-[24px] ${isLarge ? 'lg:col-span-2' : ''}`}
  >
    {/* Background Image */}
    <div className="relative w-full aspect-[4/3]">
      <NextImage 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    </div>

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-[28px] font-medium text-white">{title}</h3>
        {hasNew && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0066FF] text-white uppercase tracking-wide">
            NEW
          </span>
        )}
      </div>
      <p className="text-[#94A3B8] text-lg font-light mb-6 max-w-[90%] leading-relaxed">
        {description}
      </p>
      {buttons.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              className={`inline-flex items-center px-8 py-3 rounded-full text-[15px] font-medium transition-all duration-300 ${
                button.primary 
                  ? 'bg-[#0066FF] text-white hover:bg-[#0066FF]/90' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              } hover:scale-[1.02]`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {button.text}
            </motion.a>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Benefits = () => {
  const benefits = [
    {
      image: "https://framerusercontent.com/images/HTQpkNi0yrVxIsa0dA6BS7nAuE0.webp",
      title: "Submit Unlimited Requests",
      description: "Enjoy the freedom to submit unlimited service requests for your EV, from maintenance to software updates. We're here to assist you at every stage.",
      isLarge: true,
      buttons: [
        { text: "Get in Touch", href: "/contact", primary: true },
        { text: "What is NexEV?", href: "/about", primary: false }
      ]
    },
    {
      image: "https://framerusercontent.com/images/m5ryQIcO83RPFTqtZiZC6367ng.webp",
      title: "Service & Upgrades",
      description: "Our process allows for multiple rounds of service requests and upgrades, ensuring your EV is always up-to-date and performs to your expectations.",
      hasNew: true
    },
    {
      image: "https://framerusercontent.com/images/QZji76DdGHh8Nbz494uKLm2Spp4.webp",
      title: "Charge in Minutes",
      description: "Charge your EV in minutes with our innovative charging solutions, ensuring you're always ready to hit the road."
    },
    {
      image: "https://framerusercontent.com/images/tJiFDQuUuBhC6ddxKAsUJGWgLs.webp",
      title: "Fast Response Times",
      description: "We prioritize quick service without compromising on the quality of care for your EV."
    },
    {
      image: "https://framerusercontent.com/images/HTQpkNi0yrVxIsa0dA6BS7nAuE0.webp",
      title: "Stress-Free Pricing",
      description: "Whether you're a first-time EV owner or expanding your fleet, our flexible pricing options ensure you can enjoy top-notch service without financial worries.",
      hasNew: true
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Left Angular Shape */}
        <div 
          className="absolute left-0 top-[15%] w-[60%] h-[1000px] bg-[#000B1D]"
          style={{
            clipPath: 'polygon(0 0%, 100% 25%, 100% 100%, 0% 100%)'
          }}
        />
        
        {/* Right Angular Shape */}
        <div 
          className="absolute right-0 top-[15%] w-[60%] h-[1000px] bg-[#000B1D]"
          style={{
            clipPath: 'polygon(0 25%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-70" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#94A3B8] font-medium mb-4 block uppercase tracking-wider"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[72px] font-normal text-white mb-6 leading-[1.1] tracking-[-0.02em]"
          >
            Why Choose NEXEV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#94A3B8] text-2xl max-w-[600px] mx-auto mb-12"
          >
            Experience the Future of EV Technology
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue Accent Gradients */}
        <div className="absolute top-[5%] right-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform translate-x-1/4" />
        <div className="absolute bottom-[5%] left-0 w-[800px] h-[800px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px] transform -translate-x-1/4" />
      </div>
    </section>
  );
};

export default Benefits;