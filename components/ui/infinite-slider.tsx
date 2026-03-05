"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 42,
  speed = 60,
  speedOnHover = 20,
  reverse = false,
  className = "",
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hovering, setHovering] = useState(false);
  const duration = hovering ? speedOnHover : speed;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth;
    setWidth(totalWidth);
  }, [children]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        ref={trackRef}
        data-slider-track
        className="flex w-max"
        style={{ gap }}
        animate={
          width > 0
            ? {
                x: reverse ? [0, -width / 2] : [-width / 2, 0],
              }
            : undefined
        }
        transition={
          width > 0
            ? {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration,
                  ease: "linear",
                },
              }
            : {}
        }
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
