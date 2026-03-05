"use client";

import { Section, SectionHeading } from "@/components/Section";
import { TypewriterTestimonial, type TestimonialItem } from "@/components/ui/typewriter-testimonial";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const testimonials: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "The Well Connected transformed our annual summit into an experience people still talk about. Every detail felt intentional.",
    author: "Sarah Chen",
    role: "VP of Marketing, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    quote:
      "Their strategic approach to sponsorship helped us build relationships that go far beyond a single event.",
    author: "Marcus Webb",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    quote:
      "From concept to execution, the team delivered with creativity and precision. True partners.",
    author: "Elena Rodriguez",
    role: "Director of Brand Experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    id: "4",
    quote:
      "We wanted a launch that felt premium and memorable. They delivered both—and then some.",
    author: "James Park",
    role: "Founder, Studio X",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function TestimonialSection() {
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
          className="mb-12 md:mb-16 text-center"
        >
          <SectionHeading
            title="What creators say"
            dark
          />
          <p className="body-text text-white/80 mt-4 max-w-2xl mx-auto">
            Real feedback from brands and creators in our network
          </p>
        </motion.div>
        <TypewriterTestimonial testimonials={testimonials} />
      </div>
    </Section>
  );
}
