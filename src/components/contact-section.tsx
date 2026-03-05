import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { PhoneCallIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-wistful px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(35%_80%_at_50%_50%,rgba(255,255,255,.15),transparent)]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let&apos;s create something unforgettable.
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Get in touch to discuss your next event or sponsorship opportunity.
        </p>
        <Button
          size="lg"
          className="rounded-full bg-white text-wistful hover:bg-white/90"
          asChild
        >
          <a href="mailto:hello@thewellconnected.com">
            <PhoneCallIcon className="mr-2 h-4 w-4" />
            Book a Call
          </a>
        </Button>
      </div>
    </section>
  );
}
