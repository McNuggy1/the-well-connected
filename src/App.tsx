import { Header } from "@/components/ui/header-1";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { BrandMissionSection } from "@/components/brand-mission-section";
import { CorePillarsSection } from "@/components/core-pillars-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";

const FEATURED_MEDIA = {
  mediaSrc:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1280&auto=format&fit=crop",
  bgImageSrc:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop",
  title: "Events That Connect",
  date: "Experiences that resonate",
  scrollToExpand: "Scroll to expand",
};

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <LogosSection />
        <BrandMissionSection />
        <CorePillarsSection />
        <ServicesSection />
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc={FEATURED_MEDIA.mediaSrc}
          bgImageSrc={FEATURED_MEDIA.bgImageSrc}
          title={FEATURED_MEDIA.title}
          date={FEATURED_MEDIA.date}
          scrollToExpand={FEATURED_MEDIA.scrollToExpand}
          textBlend
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              About This Experience
            </h2>
            <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
              We design events and sponsorships that create real connections
              between brands and audiences. From concept to execution, every
              detail is crafted to leave a lasting impression.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed">
              Scroll back up to explore our mission, pillars, and pricing—or get
              in touch to start your next project.
            </p>
          </div>
        </ScrollExpandMedia>
        <div className="bg-alabaster/30 py-12 md:py-16">
          <PricingWithChart />
        </div>
        <ContactSection />
      </main>
    </div>
  );
}
