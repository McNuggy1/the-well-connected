"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Creator = {
  id: string;
  name: string;
  username: string;
  role?: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
};

/** Team member type (username optional for backward compatibility) */
export type TeamMember = Omit<Creator, "username"> & { username?: string };

type AvatarHoverCardProps = (Creator | (TeamMember & { id?: string })) & {
  variant?: "default" | "glass";
  className?: string;
  floatDelay?: number;
  enableFloat?: boolean;
};

export function AvatarHoverCard({
  name,
  username = "",
  role,
  bio,
  image,
  linkedin,
  twitter,
  variant = "default",
  className = "",
  floatDelay = 0,
  enableFloat = true,
}: AvatarHoverCardProps) {
  const [hovered, setHovered] = useState(false);

  const isGlass = variant === "glass";

  const cardClass = isGlass
    ? "relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-glow-lavender"
    : "relative rounded-2xl overflow-hidden border-2 border-lavender/50 bg-black/80 shadow-lg";

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={
        enableFloat
          ? {
              y: [0, -10, 0],
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
      <motion.div
        className={cardClass}
        variants={{
          idle: {
            boxShadow: isGlass
              ? "0 0 40px rgba(173, 168, 211, 0.15)"
              : "0 10px 40px -15px rgba(173, 168, 211, 0.25)",
          },
          hover: {
            y: -8,
            boxShadow:
              "0 25px 50px -15px rgba(201, 219, 50, 0.25), 0 0 0 1px rgba(201, 219, 50, 0.2)",
          },
        }}
        initial="idle"
        animate={hovered ? "hover" : "idle"}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-square relative w-full max-w-[140px] mx-auto md:max-w-[160px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 120px, 160px"
          />
        </div>
        <div className="p-4 md:p-5">
          <p className="font-display text-lg text-white truncate">{name}</p>
          {username && (
            <p className="text-sm text-lavender truncate">@{username}</p>
          )}
          {role && (
            <p className="text-xs text-white/60 mt-1">{role}</p>
          )}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-white/80 mt-4 leading-relaxed line-clamp-3">
                  {bio}
                </p>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a
                    href="#message"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-lime text-black text-sm font-medium hover:bg-lime/90 transition-colors"
                  >
                    Message
                  </a>
                  <a
                    href="#follow"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    Follow
                  </a>
                </div>
                {(linkedin || twitter) && (
                  <div className="flex gap-4 mt-3">
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lavender hover:text-lime transition-colors text-sm"
                      >
                        LinkedIn
                      </a>
                    )}
                    {twitter && (
                      <a
                        href={twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lavender hover:text-lime transition-colors text-sm"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
