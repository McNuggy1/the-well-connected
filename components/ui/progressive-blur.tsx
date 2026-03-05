"use client";

/**
 * Gradient edge fading for horizontal scroll areas.
 * Renders left/right fade overlays so content fades at edges.
 */
export function ProgressiveBlur({
  className = "",
  gradientColors = [
    "rgba(0,0,0,0)",
    "rgba(0,0,0,0.8)",
    "rgba(0,0,0,0)",
  ],
}: {
  className?: string;
  gradientColors?: [string, string, string];
}) {
  const [left, center, right] = gradientColors;
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 z-10 flex justify-between ${className}`}
      aria-hidden
    >
      <div
        className="w-24 md:w-32 h-full shrink-0"
        style={{
          background: `linear-gradient(to right, ${left}, ${center})`,
        }}
      />
      <div
        className="w-24 md:w-32 h-full shrink-0"
        style={{
          background: `linear-gradient(to left, ${right}, ${center})`,
        }}
      />
    </div>
  );
}
