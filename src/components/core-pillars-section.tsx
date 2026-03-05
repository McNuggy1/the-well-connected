import { cn } from "@/src/lib/utils";

const PILLARS = [
  {
    title: "Creative Excellence",
    description:
      "We are committed to delivering innovative and impactful solutions that exceed expectations.",
    values: "Creativity, originality, and excellence in execution.",
    focusAreas:
      "Concept development, experiential design, and unique event experiences.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "We prioritize building strong and lasting relationships with clients and partners.",
    values: "Collaboration, trust, and mutual success.",
    focusAreas:
      "Strategic sponsorships, brand partnerships, and tailored client solutions.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our client's success is at the forefront of everything we do.",
    values: "Service excellence, responsiveness, and tailored solutions.",
    focusAreas:
      "Client relationships, personalized services, and exceeding client expectations.",
  },
  {
    title: "Community Engagement",
    description:
      "We are actively involved in our community and strive to make a positive impact.",
    values: "Connection, inclusivity, and social responsibility.",
    focusAreas:
      "Community events, charitable initiatives, and sustainable practices.",
  },
];

export function CorePillarsSection() {
  return (
    <section
      id="pillars"
      className="relative bg-white px-4 py-16 md:py-24"
    >
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium uppercase tracking-widest text-foreground/60"
      >
        Brand Guideline
      </span>
      <div className="mx-auto max-w-6xl pl-8">
        <h2 className="mb-12 text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
          Core Pillars.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col border-l-2 border-wistful pl-6"
            >
              <h3 className="mb-4 text-lg font-bold uppercase tracking-tight text-wistful">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Description:</span>{" "}
                {pillar.description}
              </p>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Values:</span>{" "}
                {pillar.values}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Focus Areas:</span>{" "}
                {pillar.focusAreas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
