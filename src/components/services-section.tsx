import { cn } from "@/src/lib/utils";
import {
  CalendarIcon,
  HandshakeIcon,
  SparklesIcon,
  BarChart3Icon,
} from "lucide-react";

const SERVICES = [
  {
    icon: CalendarIcon,
    title: "Event Strategy & Production",
    description:
      "End-to-end event design and execution that aligns with your brand and goals.",
  },
  {
    icon: HandshakeIcon,
    title: "Sponsorship & Partnerships",
    description:
      "Strategic sponsor acquisition and management to maximize ROI and visibility.",
  },
  {
    icon: SparklesIcon,
    title: "Experiential & Activations",
    description:
      "Memorable brand experiences and activations that connect with audiences.",
  },
  {
    icon: BarChart3Icon,
    title: "Analytics & Reporting",
    description:
      "Clear metrics and insights so you can measure impact and iterate.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-alabaster/50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
          What We Do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={cn(
                "rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md",
                "flex flex-col gap-4"
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wistful/20 text-wistful">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
