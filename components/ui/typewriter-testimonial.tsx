"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type TestimonialItem = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  image: string;
};

type TypewriterTestimonialProps = {
  testimonials: TestimonialItem[];
  className?: string;
};

function useTypewriter(text: string, active: boolean, speed = 30) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active || !text) {
      setDisplay("");
      setDone(false);
      return;
    }
    setDisplay("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, active, speed]);

  return { display, done };
}

export function TypewriterTestimonial({
  testimonials,
  className = "",
}: TypewriterTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = testimonials.length > 0 ? Math.min(activeIndex, testimonials.length - 1) : 0;
  const active = testimonials[safeIndex];
  const fullText = active ? `"${active.quote}"` : "";
  const { display, done } = useTypewriter(fullText, !!active, 25);

  if (testimonials.length === 0) {
    return <div className={className}>No testimonials yet.</div>;
  }

  return (
    <div className={`${className}`}>
      {/* Avatar row */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.button
            key={t.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative w-16 h-16 rounded-full border-2 border-[#ADA8D3] overflow-hidden flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9DB32] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-shadow"
            style={{
              boxShadow:
                safeIndex === i
                  ? "0 0 25px rgba(201,219,50,0.25)"
                  : "none",
            }}
            whileHover={{
              boxShadow: "0 0 25px rgba(201,219,50,0.2)",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 block w-full h-full relative">
              <Image
                src={t.image}
                alt={t.author}
                fill
                className="object-cover"
                sizes="64px"
              />
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Floating testimonial bubble above avatars */}
      <motion.div
        className="relative max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-[#ADA8D3]/30 bg-[#0f0f0f] text-white backdrop-blur shadow-xl p-8 md:p-10"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <p className="font-display text-xl md:text-2xl leading-relaxed min-h-[4.5em]">
              {display}
              {!done && <span className="animate-pulse">|</span>}
            </p>
            <div className="border-t border-white/10 pt-6 mt-6">
              <p className="font-medium text-[#ADA8D3]">{active?.author}</p>
              {active?.role && (
                <p className="text-sm text-white/60 mt-1">{active.role}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
