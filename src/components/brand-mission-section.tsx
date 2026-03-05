import { cn } from "@/lib/utils";

const SECTION_STYLE = "mx-auto max-w-3xl px-4 py-16 md:py-24";

export function BrandMissionSection() {
  return (
    <section id="about" className={cn("relative bg-alabaster", SECTION_STYLE)}>
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium uppercase tracking-widest text-foreground/60"
      >
        Brand Guideline
      </span>
      <div className="pl-8">
        <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
          Mission.
        </h2>
        <p className="text-foreground/90 mb-12 text-base leading-relaxed md:text-lg">
          At The Well Connected, our mission is to craft unforgettable
          experiences, forge meaningful connections, and deliver exceptional
          results through innovative event and sponsorship strategies.
        </p>

        <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
          Vision.
        </h2>
        <p className="text-foreground/90 mb-12 text-base leading-relaxed md:text-lg">
          We envision a world where brands and audiences connect authentically,
          sparking conversations and driving mutual growth.
        </p>

        <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
          Goals.
        </h2>
        <ol className="text-foreground/90 list-decimal list-inside space-y-3 text-base leading-relaxed md:text-lg">
          <li>
            Deliver exceptional event experiences that resonate with audiences
            and leave a lasting impression.
          </li>
          <li>
            Forge strategic partnerships between brands and sponsors to maximize
            ROI and engagement.
          </li>
          <li>
            Elevate brand visibility and recognition through impactful event
            activations and sponsorships.
          </li>
        </ol>
      </div>
    </section>
  );
}
