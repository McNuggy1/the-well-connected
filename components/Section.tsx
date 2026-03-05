"use client";

import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "alabaster" | "wistful" | "black" | "dark" | "darkGradient";
  innerClassName?: string;
};

const bgMap: Record<SectionProps["background"], string> = {
  white: "bg-white text-black",
  alabaster: "bg-alabaster text-black",
  wistful: "bg-wistful text-black",
  black: "bg-black text-white",
  dark: "bg-black text-white",
  darkGradient: "bg-black text-white",
};

export function Section({
  children,
  className = "",
  background = "dark",
  innerClassName = "",
}: SectionProps) {
  return (
    <section
      className={`${bgMap[background]} ${className}`}
      style={
        background === "darkGradient"
          ? {
              background: "linear-gradient(to bottom, #000000, #0f0f12)",
            }
          : undefined
      }
    >
      <div
        className={`max-w-container mx-auto px-6 md:px-10 ${innerClassName}`}
        style={{ maxWidth: 1200 }}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  label?: string;
  title: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  className = "",
  dark = true,
}: SectionHeadingProps) {
  const labelCls = dark
    ? "text-xs font-medium tracking-widest uppercase text-white/60 mb-4"
    : "text-xs font-medium tracking-widest uppercase text-black/60 mb-4";
  const titleCls = dark
    ? "font-display headline-section text-white"
    : "font-display headline-section text-black";

  return (
    <div className={className}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className={labelCls}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={titleCls}
      >
        {title}
      </motion.h2>
    </div>
  );
}
