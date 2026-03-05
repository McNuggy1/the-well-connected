"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "lime" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg";

const variants = {
  primary:
    "bg-lime text-black hover:bg-lime/95 focus-visible:ring-lime shadow-glow-lime-sm hover:shadow-glow-lime",
  secondary:
    "border-2 border-lavender text-white hover:bg-lavender hover:text-black focus-visible:ring-lavender",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/50",
  lime:
    "bg-lime text-black hover:bg-lime/95 focus-visible:ring-lime shadow-glow-lime-sm hover:shadow-glow-lime",
  ghost:
    "text-white hover:bg-white/10 focus-visible:ring-white/30",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Link>
    </motion.span>
  );
}
