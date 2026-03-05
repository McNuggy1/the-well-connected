"use client";

import { Section } from "@/components/Section";
import { CreatorCloud, DEFAULT_CREATORS } from "@/components/ui/creator-cloud";
import { CreatorAvatarPopover } from "@/components/ui/creator-avatar-popover";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function CreatorNetwork() {
  const creators = DEFAULT_CREATORS;

  return (
    <Section
      background="darkGradient"
      className="section-padding relative overflow-hidden"
    >
      <GlowBackgroundSection variant="both" />
      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase text-white/60 mb-4"
          >
            Creator Network
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display headline-section text-white mb-4"
          >
            The creators shaping culture.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="body-text text-white/80 max-w-xl mx-auto"
          >
            We connect brands with creators who actually move culture.
          </motion.p>
        </motion.div>

        {/* Desktop: floating avatar cloud */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CreatorCloud creators={creators} disableFloat={false} />
          </motion.div>
        </div>

        {/* Tablet: 3 column grid — avatar-only + popover, no float */}
        <motion.div
          className="hidden sm:grid md:hidden grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {creators.slice(0, 9).map((c) => (
            <motion.div key={c.id} variants={itemVariants}>
              <CreatorAvatarPopover {...c} enableFloat={false} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: 2 column grid */}
        <motion.div
          className="grid sm:hidden grid-cols-2 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {creators.slice(0, 6).map((c) => (
            <motion.div key={c.id} variants={itemVariants}>
              <CreatorAvatarPopover {...c} enableFloat={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
