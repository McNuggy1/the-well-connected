"use client";

import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const services = [
  "Event Strategy",
  "Brand Activations",
  "Sponsorship Strategy",
  "Experiential Marketing",
  "Partnership Development",
  "Audience Engagement",
];

export function Services() {
  return (
    <Section
      background="darkGradient"
      className="section-padding relative overflow-hidden"
    >
      <GlowBackgroundSection variant="both" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <SectionHeading
            label="What we do"
            title="Services"
            dark
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Link href="/services">
                <motion.div
                  className="group rounded-xl p-8 md:p-10 border border-white/10 bg-white/[0.03] backdrop-blur-sm cursor-pointer"
                  style={{
                    boxShadow: "0 0 40px rgba(173, 168, 211, 0.1)",
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    borderColor: "rgba(173, 168, 211, 0.3)",
                    boxShadow: "0 0 40px rgba(173, 168, 211, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-display text-xl md:text-2xl text-white group-hover:text-lavender transition-colors">
                    {service}
                  </span>
                  <span className="block mt-2 text-white/50 group-hover:text-lime transition-colors">
                    Learn more →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
