"use client";

import { useMemo } from "react";
import { CreatorAvatarPopover } from "./creator-avatar-popover";
import type { Creator } from "./avatar-hover-card";

export const DEFAULT_CREATORS: Creator[] = [
  {
    id: "1",
    name: "Alex Rivera",
    username: "alexrivera",
    role: "Content Creator",
    bio: "Building communities around tech and culture. 2M+ followers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    twitter: "https://twitter.com",
  },
  {
    id: "2",
    name: "Jordan Lee",
    username: "jordanlee",
    role: "Influencer",
    bio: "Fashion & lifestyle. Partner with brands that care.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Sam Chen",
    username: "samchen",
    role: "Creator",
    bio: "Documenting the future of work and creativity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "4",
    name: "Morgan Blake",
    username: "morganblake",
    role: "Artist",
    bio: "Visual artist and collaborator. Culture-first.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    id: "5",
    name: "Casey Kim",
    username: "caseykim",
    role: "Creator",
    bio: "Tech reviewer and advocate for authentic storytelling.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: "6",
    name: "Riley Fox",
    username: "rileyfox",
    role: "Influencer",
    bio: "Gaming and entertainment. Always experimenting.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    id: "7",
    name: "Avery Jones",
    username: "averyjones",
    role: "Content Creator",
    bio: "Connecting brands with Gen Z through real conversations.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    id: "8",
    name: "Quinn Davis",
    username: "quinndavis",
    role: "Creator",
    bio: "Music, culture, and brand partnerships done right.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
  },
  {
    id: "9",
    name: "Skyler West",
    username: "skylerwest",
    role: "Influencer",
    bio: "Fitness and wellness. Community-driven campaigns.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80",
  },
  {
    id: "10",
    name: "Taylor Green",
    username: "taylorgreen",
    role: "Creator",
    bio: "Sustainable fashion and lifestyle. 500K+ community.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    id: "11",
    name: "Reese Brown",
    username: "reesebrown",
    role: "Content Creator",
    bio: "Food, travel, and brand stories that resonate.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    id: "12",
    name: "Parker Hill",
    username: "parkerhill",
    role: "Creator",
    bio: "Design and creativity. Building the next wave of culture.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  },
];

/** Positions as percentage (left, top). Constellation layout. */
const CLOUD_POSITIONS: [number, number][] = [
  [50, 8],
  [22, 22],
  [78, 18],
  [12, 45],
  [88, 42],
  [50, 38],
  [35, 62],
  [65, 58],
  [8, 75],
  [92, 72],
  [50, 82],
  [28, 88],
  [72, 85],
];

const LINE_PAIRS: [number, number][] = [
  [0, 1], [0, 2], [0, 5], [1, 3], [1, 5], [2, 4], [2, 5], [3, 5], [3, 6],
  [4, 5], [4, 7], [5, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 10], [10, 11], [10, 12],
];

const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 500;

type CreatorCloudProps = {
  creators?: Creator[];
  disableFloat?: boolean;
  className?: string;
};

export function CreatorCloud({
  creators = DEFAULT_CREATORS,
  disableFloat = false,
  className = "",
}: CreatorCloudProps) {
  const list = useMemo(
    () => creators.slice(0, Math.min(creators.length, CLOUD_POSITIONS.length)),
    [creators]
  );
  const positions = CLOUD_POSITIONS.slice(0, list.length);
  const linePairsFiltered = useMemo(
    () => LINE_PAIRS.filter(([a, b]) => a < list.length && b < list.length),
    [list.length]
  );

  return (
    <div
      className={`relative mx-auto h-[500px] ${className}`}
      style={{ maxWidth: CONTAINER_WIDTH }}
    >
      {/* Constellation lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {linePairsFiltered.map(([i, j], k) => {
          const [x1, y1] = positions[i];
          const [x2, y2] = positions[j];
          return (
            <line
              key={k}
              x1={(x1 / 100) * CONTAINER_WIDTH}
              y1={(y1 / 100) * CONTAINER_HEIGHT}
              x2={(x2 / 100) * CONTAINER_WIDTH}
              y2={(y2 / 100) * CONTAINER_HEIGHT}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1}
            />
          );
        })}
      </svg>

      {list.map((creator, i) => {
        const [leftPct, topPct] = positions[i];
        return (
          <div
            key={creator.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
            }}
          >
            <CreatorAvatarPopover
              {...creator}
              floatDelay={i * 0.35}
              enableFloat={!disableFloat}
            />
          </div>
        );
      })}
    </div>
  );
}
