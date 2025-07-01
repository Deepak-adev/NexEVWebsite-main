'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <button
      onClick={onClick}
      className="w-full p-6 flex items-center justify-between bg-[#0A0F1C]/50 hover:bg-[#0A0F1C] rounded-[24px] border border-white/5 backdrop-blur-sm transition-all duration-300 group"
    >
      <span className="text-xl text-white font-light text-left">
        {question}
      </span>
      <span
        className={`text-white/40 transition-transform duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 text-[#94A3B8] text-lg font-light leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What do I need to get started?",
      answer:
        "To get started with our EV solutions, simply reach out through our contact form or schedule a consultation. Our team will guide you through the process, assess your specific needs, and recommend the most suitable solutions for your electric vehicle.",
    },
    {
      question:
        "What services Does your company offer for electric vehicle owners?",
      answer:
        "We offer a comprehensive suite of services including battery management systems, regenerative charging solutions, performance optimization, real-time monitoring, and customized driving modes. Our solutions are designed to enhance your EV's efficiency and performance.",
    },
    {
      question:
        "How does your company ensure quick service turnaround for EV maintenance?",
      answer:
        "Our dedicated team of specialists operates with a streamlined process, utilizing advanced diagnostic tools and maintaining a robust inventory of parts. We prioritize efficiency without compromising quality, ensuring minimal downtime for your vehicle.",
    },
    {
      question: "Do you offer personalized solutions for different EV models?",
      answer:
        "Yes, we provide customized solutions tailored to specific EV makes and models. Our technology is adaptable and can be configured to work optimally with various electric vehicle platforms, ensuring maximum compatibility and performance.",
    },
    {
      question:
        "How can I request service or upgrades for my EV through your platform?",
      answer:
        "You can easily request services or upgrades through our online platform. Simply log in to your account, select the desired service, and schedule an appointment. Our team will confirm your request and provide detailed information about the next steps.",
    },
    {
      question:
        "What sets your company's EV solutions apart from others in the industry?",
      answer:
        "Our solutions stand out through our patent-pending technology, comprehensive approach to EV optimization, and focus on user experience. We combine innovative hardware with intelligent software to deliver superior performance and efficiency gains.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black rounded-t-3xl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title and Description */}
          <div>
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block py-2 px-4 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium backdrop-blur-sm border border-[#0066FF]/20 shadow-[0_0_15px_rgba(0,102,255,0.15)] mb-8"
            >
              FAQ
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-normal tracking-[-0.02em] leading-[1.15] text-white mb-6"
            >
              Frequently
              <br />
              <span className="text-[#94A3B8]">Asked Questions</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#94A3B8] leading-relaxed font-light"
            >
              Have questions? Our FAQ section has you covered with
              <br />
              quick answers to the most common inquiries.
            </motion.p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
