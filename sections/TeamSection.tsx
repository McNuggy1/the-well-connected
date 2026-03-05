"use client";

import { Section, SectionHeading } from "@/components/Section";
import { AvatarHoverCard } from "@/components/ui/avatar-hover-card";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const team = [
  {
    id: "alex",
    name: "Alex Morgan",
    username: "alexmorgan",
    role: "Founder & Creative Director",
    bio: "15+ years in experiential marketing. Former lead at global agencies. Believes in the power of live moments to change perception.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    username: "jordanlee",
    role: "Strategy Director",
    bio: "Partnerships and sponsorship strategy specialist. Works at the intersection of brand goals and audience experience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    id: "sam",
    name: "Sam Rivera",
    username: "samrivera",
    role: "Head of Production",
    bio: "Makes ideas real. Logistics, vendor relations, and on-the-ground execution for events of every scale.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "https://linkedin.com",
  },
];

export function TeamSection() {
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
          className="mb-16 md:mb-20"
        >
          <SectionHeading
            label="Our team"
            title="The People Behind the Work"
            dark
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.id ?? member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <AvatarHoverCard
                {...member}
                variant="default"
                enableFloat={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
