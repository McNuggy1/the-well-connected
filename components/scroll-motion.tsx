"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

/** Fade up when entering viewport — GPU-friendly (opacity + transform) */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  once = true,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Parallax: translateY based on scroll progress */
export function Parallax({
  children,
  className = "",
  offset = 0.15,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80 * offset, -80 * offset, 80 * offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Stagger children with fade-up */
export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/** Text mask reveal (clip-path) for hero-style headlines */
export function TextMaskReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        hidden: {},
      }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] overflow-hidden"
          variants={{
            hidden: { y: "120%" },
            visible: { y: 0, transition: { duration: 0.5, ease } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Image scale in on scroll */
export function ImageScaleIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
