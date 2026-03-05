"use client";

import { Section } from "@/components/Section";
import { LogoCloud4 } from "@/components/ui/logo-cloud-4";
import { motion } from "framer-motion";

export function LogoCloudSection() {
  return (
    <Section
      background="dark"
      className="relative overflow-hidden py-20 md:py-20"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "rgba(201, 219, 50, 0.15)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "rgba(173, 168, 211, 0.15)",
            top: "30%",
            right: "10%",
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-[1100px] pt-[80px] pb-[80px]"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Trusted by creators and brands
          </h2>
          <p className="body-text text-white/80 max-w-xl mx-auto">
            Building partnerships with the platforms and brands shaping culture.
          </p>
        </motion.div>

        <LogoCloud4
          gap={42}
          speed={60}
          speedOnHover={20}
          reverse={true}
        />
      </div>
    </Section>
  );
}
