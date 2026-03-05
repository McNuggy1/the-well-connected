"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { MotionInView } from "@/components/MotionInView";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "brand-summit-2024",
    title: "Brand Summit 2024",
    category: "Experiential",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    slug: "urban-fest",
    title: "Urban Fest",
    category: "Event Strategy",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    slug: "tech-partnership",
    title: "Tech Partnership Launch",
    category: "Sponsorship",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    slug: "community-activation",
    title: "Community Activation",
    category: "Brand Activations",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
  {
    slug: "luxury-launch",
    title: "Luxury Brand Launch",
    category: "Experiential Marketing",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    slug: "sports-sponsorship",
    title: "Sports Sponsorship Program",
    category: "Partnership Development",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-16 md:py-24">
        <SectionHeading
          label="Portfolio"
          title="Work & Case Studies"
          className="mb-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <MotionInView key={project.slug} delay={i * 0.06}>
              <Link href={`/work/${project.slug}`}>
                <motion.article
                  className="group cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-alabaster mb-6">
                    <motion.div
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.06 },
                      }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-las-palmas/0 group-hover:bg-las-palmas/15 transition-colors duration-300" />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-wistful mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-black group-hover:text-wistful transition-colors">
                    {project.title}
                  </h3>
                </motion.article>
              </Link>
            </MotionInView>
          ))}
        </div>
      </Section>
    </div>
  );
}
