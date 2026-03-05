"use client";

import { motion } from "framer-motion";

const BADGE_LABELS = [
  "Creator Partnerships",
  "Brand Collaborations",
  "Influencer Campaigns",
  "Social Strategy",
  "Community Growth",
  "Content Amplification",
];

const BADGE_GRADIENTS = [
  "from-[#ADA8D3] to-[#9F9ACF]", // lavender
  "from-[#C9DB32] to-[#B4C32A]", // lime
  "from-[#EEECE1] to-[#DDDBCF]", // neutral
  "from-[#ADA8D3] to-[#9F9ACF]",
  "from-[#C9DB32] to-[#B4C32A]",
  "from-[#EEECE1] to-[#DDDBCF]",
];

export function MarketingBadges() {
  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[320px] md:min-h-[380px]">
      {BADGE_LABELS.map((label, i) => {
        const positions: { top?: string; left?: string; right?: string; bottom?: string; x?: string }[] = [
          { top: "5%", left: "50%", x: "-50%" },
          { top: "15%", left: "15%" },
          { top: "12%", right: "20%" },
          { top: "50%", left: "5%", x: "0" },
          { top: "48%", right: "8%" },
          { bottom: "15%", left: "50%", x: "-50%" },
        ];
        const pos = positions[i % positions.length];
        const gradient = BADGE_GRADIENTS[i % BADGE_GRADIENTS.length];
        return (
          <motion.div
            key={label}
            className={`absolute rounded-2xl px-5 py-3 cursor-default bg-gradient-to-br ${gradient} ${i % 3 === 2 ? "text-black/90" : "text-white"}`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
              transform: pos.x ? `translateX(${pos.x})` : undefined,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            animate={{
              y: [0, -6, 0],
              rotate: [0, 1, -1, 0],
              transition: {
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
            whileHover={{
              scale: 1.08,
              y: -8,
              rotate: 0,
              boxShadow: "0 0 30px rgba(201,219,50,0.25)",
              transition: { duration: 0.2 },
            }}
          >
            <span className="block text-sm font-medium">{label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
