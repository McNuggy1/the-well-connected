"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  author,
  role,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`rounded-2xl p-8 md:p-10 transition-all duration-300 ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "0 0 40px rgba(173, 168, 211, 0.15)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 0 50px rgba(173, 168, 211, 0.2)",
      }}
    >
      <p className="font-display text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-white/10 pt-6">
        <p className="font-medium text-lavender">{author}</p>
        {role && (
          <p className="text-sm text-white/60 mt-1">{role}</p>
        )}
      </div>
    </motion.div>
  );
}
