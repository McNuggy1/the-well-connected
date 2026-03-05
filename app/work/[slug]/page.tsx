"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { MotionInView } from "@/components/MotionInView";
import { motion } from "framer-motion";

const caseStudies: Record<
  string,
  {
    title: string;
    category: string;
    image: string;
    challenge: string;
    strategy: string;
    execution: string;
    results: string;
    image2?: string;
  }
> = {
  "brand-summit-2024": {
    title: "Brand Summit 2024",
    category: "Experiential",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85",
    challenge:
      "The client needed to unite 500+ global stakeholders in an immersive experience that would reinforce brand values and drive alignment—without feeling like a typical corporate conference.",
    strategy:
      "We designed a narrative-driven journey that moved attendees through distinct 'chapters' across multiple spaces. Each chapter combined keynotes, workshops, and sensory installations to create emotional peaks and shared memories.",
    execution:
      "We led creative direction, venue design, content flow, and production. Custom lighting, sound, and spatial design transformed a convention center into a cohesive story world. Strategic use of the Las Palmas accent and Wistful brand tones created a premium, recognizable environment.",
    results:
      "98% attendee satisfaction, 3x social engagement vs. previous year, and 40% increase in post-event partnership conversations. The client renewed for a multi-year experiential program.",
    image2: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85",
  },
  "urban-fest": {
    title: "Urban Fest",
    category: "Event Strategy",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=85",
    challenge:
      "A city wanted to activate an underused downtown district and position itself as a cultural destination while supporting local artists and businesses.",
    strategy:
      "We developed a weekend festival strategy that blended music, art, food, and placemaking. Sponsorship tiers were designed to align brand visibility with community impact, creating authentic stories for partners.",
    execution:
      "Full event strategy, sponsor recruitment, programming, and on-the-ground production. We created a clear visual identity and wayfinding system so the festival felt cohesive and premium despite spanning multiple blocks.",
    results:
      "25,000+ attendees over two days, 12 new sponsor partnerships, and 60% of attendees reporting they would return. The city has adopted the model for an annual series.",
  },
  "tech-partnership": {
    title: "Tech Partnership Launch",
    category: "Sponsorship",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85",
    challenge:
      "A technology brand needed to launch a major B2B partnership in a way that would generate press, signal innovation, and create a memorable moment for both companies' leadership and key clients.",
    strategy:
      "We proposed an exclusive evening experience at a landmark venue, with a clear narrative arc: past, present, and future of the partnership. Media and influencers were integrated without overshadowing the core B2B audience.",
    execution:
      "Creative concept, venue and vendor selection, run-of-show, content (video and live), and guest experience design. Every touchpoint—from invite to farewell—reinforced the partnership story.",
    results:
      "Coverage in 15+ tier-one outlets, 200+ C-suite attendees, and a 35% increase in joint pipeline discussions in the quarter following the event.",
  },
  "community-activation": {
    title: "Community Activation",
    category: "Brand Activations",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=85",
    challenge:
      "A consumer brand wanted to build trust in a new market by showing up in a way that felt generous and local, not promotional.",
    strategy:
      "We designed a series of neighborhood activations—pop-up experiences, local artist collaborations, and small grants—that put the brand in service of community goals. No hard sell; the brand was present through value and presence.",
    execution:
      "Local insight research, partner identification, activation design, and execution across five neighborhoods. We trained local ambassadors and created shareable moments that organically drove word-of-mouth.",
    results:
      "Strong lift in brand favorability in target neighborhoods, 10k+ organic social impressions per activation, and lasting relationships with local organizations that continue to inform the brand's strategy.",
  },
  "luxury-launch": {
    title: "Luxury Brand Launch",
    category: "Experiential Marketing",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85",
    challenge:
      "A luxury house was entering a new category and needed to signal quality, heritage, and relevance to a younger, global audience.",
    strategy:
      "We created an invite-only launch experience that felt like an editorial moment: part gallery, part dinner, part performance. The space and flow were designed to encourage discovery and conversation rather than presentation.",
    execution:
      "End-to-end creative and production: space design, art direction, catering, talent, and guest list strategy. We ensured every detail—from scent to tableware—aligned with the brand's elevated positioning.",
    results:
      "100% of attendees shared content organically, leading press coverage described the launch as 'defining the new luxury,' and the client has engaged us for two subsequent campaigns.",
  },
  "sports-sponsorship": {
    title: "Sports Sponsorship Program",
    category: "Partnership Development",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=85",
    challenge:
      "A brand wanted to own a major sports property but needed to do more than logo placement—they wanted to be synonymous with the fan experience and community around the team.",
    strategy:
      "We built a sponsorship strategy that combined broadcast and in-stadium visibility with fan-facing experiences: pre-game activations, community clinics, and content that told human stories behind the sport.",
    execution:
      "Partnership negotiation support, activation concepting, and execution across the season. We aligned the brand with key moments (playoffs, community events) so presence felt intentional and earned.",
    results:
      "Sponsorship renewed at a higher tier. Brand recall among fans increased 22%. The client expanded the partnership to include a community fund and youth program.",
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = slug ? caseStudies[slug] : null;

  if (!project) {
    return (
      <div className="pt-28 pb-24 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <p className="body-lg text-black/70 mb-6">Case study not found.</p>
          <Link href="/work" className="text-wistful hover:text-las-palmas font-medium">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Challenge", content: project.challenge },
    { label: "Strategy", content: project.strategy },
    { label: "Execution", content: project.execution },
    { label: "Results", content: project.results },
  ];

  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-12 md:py-16">
        <Link
          href="/work"
          className="inline-block text-sm font-medium tracking-wide text-wistful hover:text-las-palmas transition-colors mb-10"
        >
          ← Back to Work
        </Link>
        <MotionInView>
          <p className="text-xs font-medium tracking-widest uppercase text-wistful mb-4">
            {project.category}
          </p>
          <h1 className="font-display headline-lg text-black mb-8 md:mb-12">
            {project.title}
          </h1>
        </MotionInView>
        <MotionInView delay={0.1}>
          <div className="aspect-[21/9] md:aspect-[3/1] relative overflow-hidden bg-alabaster">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </MotionInView>
      </Section>

      <Section background="alabaster" className="py-16 md:py-24">
        <div className="max-w-3xl space-y-20 md:space-y-28">
          {sections.map((section, i) => (
            <MotionInView key={section.label} delay={i * 0.08}>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-wistful mb-6">
                  {section.label}
                </h2>
                <p className="body-lg text-black/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </MotionInView>
          ))}
        </div>
      </Section>

      {project.image2 && (
        <Section background="white" className="py-12 md:py-16">
          <MotionInView>
            <div className="aspect-[4/3] relative overflow-hidden bg-alabaster">
              <Image
                src={project.image2}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </MotionInView>
        </Section>
      )}

      <Section background="wistful" className="py-20 md:py-24">
        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl text-black mb-8">
            Ready to create your next story?
          </p>
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.span>
        </div>
      </Section>
    </div>
  );
}
