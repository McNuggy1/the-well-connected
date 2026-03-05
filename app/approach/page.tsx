"use client";

import { Section, SectionHeading } from "@/components/Section";
import { MotionInView } from "@/components/MotionInView";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by deeply understanding your brand, goals, and audience. Every great experience starts with clarity.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We develop a tailored strategy that aligns events, sponsorships, and activations with your business objectives.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Our creative team brings the strategy to life with bold concepts, memorable moments, and seamless execution.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We manage every detail on the ground, ensuring flawless delivery and meaningful connections at every touchpoint.",
  },
  {
    number: "05",
    title: "Measure & Evolve",
    description:
      "We track impact, gather insights, and refine approaches so every project builds on the last.",
  },
];

export default function ApproachPage() {
  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-16 md:py-24">
        <SectionHeading
          label="How we work"
          title="Our Approach"
          className="max-w-3xl mb-20"
        />
        <MotionInView>
          <p className="body-lg text-black/85 max-w-2xl mb-24">
            We believe in a collaborative, human-centered process that puts your
            goals at the center and delivers results that exceed expectations.
          </p>
        </MotionInView>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <MotionInView key={step.number} delay={i * 0.08}>
              <motion.div
                className="py-12 md:py-16 border-b border-black/10 last:border-0 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display text-4xl md:text-5xl text-wistful/60 group-hover:text-wistful shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="body-md text-black/80 max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </MotionInView>
          ))}
        </div>
      </Section>
      <Section background="wistful" className="py-24 md:py-32">
        <div className="max-w-3xl">
          <MotionInView>
            <p className="font-display text-3xl md:text-4xl leading-tight text-black">
              From first conversation to final recap, we're with you every step
              of the way—ensuring your brand connects in ways that matter.
            </p>
          </MotionInView>
        </div>
      </Section>
    </div>
  );
}
