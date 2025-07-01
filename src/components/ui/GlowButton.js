'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function GlowButton({ text, href }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href={href}
        className="flex items-center justify-center px-6 py-2 rounded-xl text-white font-medium bg-[#0055ff] border-2 border-blue-500 shadow-[0_0_0_2px_rgba(0,85,255,0.6)] hover:shadow-[0_0_15px_5px_rgba(0,85,255,0.4)] transition-all duration-300 h-11"
      >
        {text}
      </Link>
    </motion.div>
  );
}
