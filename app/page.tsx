import { Hero } from "@/sections/Hero";
import { AboutCompany } from "@/sections/AboutCompany";
import { CorePillars } from "@/sections/CorePillars";
import { Services } from "@/sections/Services";
import { CreatorNetwork } from "@/sections/CreatorNetwork";
import { LogoCloudSection } from "@/sections/LogoCloudSection";
import { WorkGallery } from "@/sections/WorkGallery";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { TeamSection } from "@/sections/TeamSection";
import { CTASection } from "@/sections/CTASection";
import { SectionTransition } from "@/components/SectionTransition";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreatorNetwork />
      <SectionTransition>
        <LogoCloudSection />
      </SectionTransition>
      <SectionTransition>
        <AboutCompany />
      </SectionTransition>
      <SectionTransition>
        <CorePillars />
      </SectionTransition>
      <SectionTransition>
        <Services />
      </SectionTransition>
      <SectionTransition>
        <WorkGallery />
      </SectionTransition>
      <SectionTransition>
        <TestimonialSection />
      </SectionTransition>
      <SectionTransition>
        <TeamSection />
      </SectionTransition>
      <CTASection />
    </>
  );
}
