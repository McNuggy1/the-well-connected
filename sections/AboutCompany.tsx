"use client";

import { Section, SectionHeading } from "@/components/Section";
import { MarketingBadges } from "@/components/ui/marketing-badges";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    text: "At The Well Connected, our mission is to craft unforgettable experiences, forge meaningful connections, and deliver exceptional results through innovative event and sponsorship strategies.",
  },
  {
    title: "Our Vision",
    text: "To be the most trusted partner for brands seeking to create lasting impact through experiences that resonate, inspire, and connect.",
  },
  {
    title: "Our Ethos",
    text: "We believe in the power of human connection. Every event we design and every partnership we build is rooted in authenticity, creativity, and a deep commitment to excellence.",
  },
];

export function AboutCompany() {
  return (
    <Section
      background="darkGradient"
      className="section-padding relative overflow-hidden"
    >
      <GlowBackgroundSection variant="lavender" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionHeading
            label="About"
            title="Who we are"
            dark
          />
          <p className="body-text text-white/80 max-w-2xl mx-auto mt-4">
            We connect brands with creators and communities through strategy, experiences, and partnerships that shape culture.
          </p>
        </motion.div>

        {/* Floating capability badges */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MarketingBadges />
        </motion.div>

        {/* Mission / Vision / Ethos cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-xl border border-white/10 border-t-2 border-t-[#ADA8D3] bg-black/40 backdrop-blur p-6"
            >
              <h3 className="font-display text-xl md:text-2xl text-[#ADA8D3] mb-4">
                {card.title}
              </h3>
              <p className="body-text text-white/85 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
