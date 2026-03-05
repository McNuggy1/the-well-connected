"use client";

import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

export type LogoItem = {
  src: string;
  alt: string;
};

const DEFAULT_LOGOS: LogoItem[] = [
  { src: "/logos/tiktok.svg", alt: "TikTok" },
  { src: "/logos/instagram.svg", alt: "Instagram" },
  { src: "/logos/youtube.svg", alt: "YouTube" },
  { src: "/logos/spotify.svg", alt: "Spotify" },
  { src: "/logos/nike.svg", alt: "Nike" },
  { src: "/logos/adidas.svg", alt: "Adidas" },
  { src: "/logos/redbull.svg", alt: "Red Bull" },
  { src: "/logos/shopify.svg", alt: "Shopify" },
];

type LogoCloud4Props = {
  logos?: LogoItem[];
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
};

function LogoItemEl({ item }: { item: LogoItem }) {
  return (
    <div className="flex items-center justify-center shrink-0 h-8 md:h-10 px-4">
      <div className="h-5 md:h-6 w-auto min-w-[70px] md:min-w-[90px] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 text-white font-medium text-sm md:text-base">
        <span className="truncate">{item.alt}</span>
      </div>
    </div>
  );
}

export function LogoCloud4({
  logos = DEFAULT_LOGOS,
  gap = 42,
  speed = 60,
  speedOnHover = 20,
  reverse = true,
  className = "",
}: LogoCloud4Props) {
  return (
    <div className={`relative ${className}`}>
      <ProgressiveBlur
        gradientColors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.85)",
          "rgba(0,0,0,0)",
        ]}
      />
      <InfiniteSlider
        gap={gap}
        speed={speed}
        speedOnHover={speedOnHover}
        reverse={reverse}
      >
        {logos.map((logo) => (
          <LogoItemEl key={logo.alt} item={logo} />
        ))}
      </InfiniteSlider>
    </div>
  );
}
