"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { FadeUp, Parallax } from "@/components/scroll-motion";
import { GlowBackgroundSection } from "@/components/ui/glow-background";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "brand-summit-2024",
    title: "Brand Summit 2024",
    category: "Experiential",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    slug: "urban-fest",
    title: "Urban Fest",
    category: "Event Strategy",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    slug: "tech-partnership",
    title: "Tech Partnership Launch",
    category: "Sponsorship",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    slug: "community-activation",
    title: "Community Activation",
    category: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
];

export function WorkGallery() {
  return (
    <Section
      background="dark"
      className="section-padding relative overflow-hidden"
    >
      <GlowBackgroundSection variant="lavender" />
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <FadeUp>
            <SectionHeading
              label="Selected work"
              title="Case Studies"
              dark
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/work"
              className="text-sm font-medium tracking-wide text-white/80 hover:text-lime transition-colors shrink-0"
            >
              View all work →
            </Link>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.08} y={24}>
              <Link href={`/work/${project.slug}`}>
                <motion.article
                  className="group cursor-pointer block"
                  initial="idle"
                  whileHover="hover"
                  variants={{ idle: {}, hover: {} }}
                >
                  <Parallax offset={0.12}>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-white/5 mb-6">
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          idle: { scale: 1 },
                          hover: {
                            scale: 1.06,
                            transition: {
                              duration: 0.6,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          },
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-lavender/70 flex items-end p-6 md:p-8"
                        variants={{
                          idle: { opacity: 0 },
                          hover: {
                            opacity: 1,
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        <div>
                          <p className="text-xs font-medium tracking-widest uppercase text-white/80 mb-2">
                            {project.category}
                          </p>
                          <h3 className="font-display text-2xl md:text-3xl text-white">
                            {project.title}
                          </h3>
                        </div>
                      </motion.div>
                    </div>
                  </Parallax>
                  <p className="text-xs font-medium tracking-widest uppercase text-white/60 mb-2 md:mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                </motion.article>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
