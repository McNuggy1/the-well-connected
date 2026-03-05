"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Creator } from "./avatar-hover-card";

type CreatorAvatarPopoverProps = Creator & {
  /** Floating animation delay (seconds). */
  floatDelay?: number;
  /** Enable floating animation (disable on mobile). */
  enableFloat?: boolean;
  className?: string;
};

export function CreatorAvatarPopover({
  name,
  username,
  bio,
  image,
  floatDelay = 0,
  enableFloat = true,
  className = "",
}: CreatorAvatarPopoverProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={
        enableFloat
          ? {
              y: [0, -8, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay,
              },
            }
          : undefined
    }
    >
      {/* Base: circular avatar only */}
      <motion.div
        className="relative w-16 h-16 rounded-full border-2 border-[#ADA8D3] overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered ? "0 0 25px rgba(201,219,50,0.25)" : "none",
        }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </motion.div>

      {/* Floating card above avatar on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute left-1/2 bottom-full -translate-x-1/2 mb-3 w-[280px] z-50 pointer-events-none"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="rounded-xl overflow-hidden border border-white/10 backdrop-blur-md shadow-xl p-4"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                boxShadow: "0 0 40px rgba(173, 168, 211, 0.15)",
              }}
            >
              <p className="font-display text-base text-white truncate">{name}</p>
              {username && (
                <p className="text-sm text-[#ADA8D3] truncate">@{username}</p>
              )}
              <p className="text-sm text-white/80 mt-2 line-clamp-2 leading-relaxed">
                {bio}
              </p>
              <a
                href="#follow"
                className="mt-3 inline-flex items-center justify-center w-full py-2 rounded-lg bg-[#C9DB32] text-black text-sm font-medium hover:bg-[#C9DB32]/90 transition-colors pointer-events-auto"
              >
                Follow
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
