"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlowBackgroundSection } from "@/components/ui/glow-background";

const headline =
  "Crafting meaningful connections between brands and people.";
const subheading =
  "We design immersive events, strategic sponsorships, and unforgettable brand experiences.";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-24">
      <GlowBackgroundSection variant="both" />
      {/* Soft blurred gradient behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(201, 219, 50, 0.15), transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-container mx-auto w-full px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: 1200 }}>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display headline-hero mb-8 md:mb-10"
            style={{
              background: "linear-gradient(90deg, #ADA8D3, #C9DB32)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-text text-white/85 max-w-xl mb-10 md:mb-12"
          >
            {subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.span
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-10 py-5 bg-lime text-black font-medium tracking-wide text-lg rounded-lg hover:bg-lime/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
                style={{
                  boxShadow: "0 0 30px rgba(201, 219, 50, 0.25)",
                }}
              >
                View Work
              </Link>
            </motion.span>
            <motion.span
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-lavender text-white font-medium tracking-wide text-lg rounded-lg hover:bg-lavender hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
              >
                Start a Project
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
