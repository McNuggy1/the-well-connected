"use client";

/**
 * Subtle gradient blur shapes for section backgrounds.
 * Lavender and lime glows behind content — premium, not overwhelming.
 */
export function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "rgba(173, 168, 211, 0.4)",
          top: "10%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "rgba(201, 219, 50, 0.25)",
          bottom: "20%",
          right: "-5%",
        }}
      />
    </div>
  );
}

type GlowBackgroundSectionProps = {
  variant?: "lavender" | "lime" | "both";
  className?: string;
};

export function GlowBackgroundSection({
  variant = "both",
  className = "",
}: GlowBackgroundSectionProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {(variant === "lavender" || variant === "both") && (
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "rgba(173, 168, 211, 0.4)",
            top: "10%",
            left: "-10%",
          }}
        />
      )}
      {(variant === "lime" || variant === "both") && (
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "rgba(201, 219, 50, 0.25)",
            bottom: "20%",
            right: "-5%",
          }}
        />
      )}
    </div>
  );
}
