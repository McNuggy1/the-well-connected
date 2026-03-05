"use client";

import { motion } from "framer-motion";

/**
 * Wraps a section for a subtle scroll-based transition (opacity + slight y).
 * Use between major sections to avoid abrupt jumps.
 */
export function SectionTransition({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.97 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
