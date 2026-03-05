"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="bg-las-palmas py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-black mb-12 md:mb-14 leading-tight"
        >
          Let's create something unforgettable.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block"
        >
          <motion.div
            className="relative inline-block"
            initial="idle"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            variants={{
              idle: {},
              hover: {},
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-sm pointer-events-none"
              style={{
                background: "transparent",
                boxShadow: "0 0 50px 12px rgba(201, 219, 50, 0.45)",
              }}
              variants={{
                idle: { opacity: 0 },
                hover: { opacity: 1, transition: { duration: 0.3 } },
              }}
            />
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-12 py-5 bg-black text-white font-medium tracking-wide text-lg rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-lime transition-shadow duration-300"
              style={{
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.25)",
              }}
            >
              Start a Conversation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
