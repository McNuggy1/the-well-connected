"use client";

import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { MotionInView } from "@/components/MotionInView";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const services = [
  {
    title: "Event Strategy",
    description:
      "End-to-end event design and planning that aligns with your brand goals and delivers measurable impact.",
  },
  {
    title: "Brand Activations",
    description:
      "Memorable, shareable moments that bring your brand to life and create lasting connections with your audience.",
  },
  {
    title: "Sponsorship Strategy",
    description:
      "Strategic sponsorship identification, negotiation, and activation that maximizes ROI and brand visibility.",
  },
  {
    title: "Experiential Marketing",
    description:
      "Immersive experiences that engage senses and emotions, turning audiences into advocates.",
  },
  {
    title: "Partnership Development",
    description:
      "Building and nurturing powerful relationships between brands, sponsors, and communities.",
  },
  {
    title: "Audience Engagement",
    description:
      "Data-informed strategies to attract, engage, and retain the right audiences for your events and campaigns.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-16 md:py-24">
        <SectionHeading
          label="What we do"
          title="Services"
          className="max-w-3xl mb-6"
        />
        <MotionInView delay={0.1}>
          <p className="body-lg text-black/80 max-w-2xl mb-20">
            We offer a full spectrum of creative and strategic services designed
            to elevate your brand through meaningful experiences.
          </p>
        </MotionInView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, i) => (
            <MotionInView key={service.title} delay={i * 0.08}>
              <motion.div
                className="p-8 md:p-10 bg-alabaster border border-transparent hover:border-wistful/30 transition-colors group"
                whileHover={{ y: -2 }}
              >
                <h3 className="font-display text-2xl md:text-3xl text-black group-hover:text-wistful transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="body-md text-black/80">{service.description}</p>
              </motion.div>
            </MotionInView>
          ))}
        </div>
        <MotionInView delay={0.4} className="mt-20 text-center">
          <Button href="/contact" variant="primary" size="lg">
            Start a Project
          </Button>
        </MotionInView>
      </Section>
    </div>
  );
}
