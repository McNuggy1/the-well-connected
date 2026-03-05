"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { FadeUp } from "@/components/scroll-motion";
import { motion } from "framer-motion";

const inputBase =
  "w-full px-5 py-4 bg-white border-2 border-black/10 rounded-lg text-lg text-black placeholder:text-black/40 outline-none transition-all duration-300 focus:border-wistful focus:ring-2 focus:ring-wistful/30 focus:ring-offset-2";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          <div>
            <FadeUp>
              <SectionHeading
                label="Get in touch"
                title="Start a Conversation"
                className="mb-8"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg md:text-xl text-black/80 mb-14 max-w-lg">
                Have a project in mind? We'd love to hear from you. Share your
                vision and we'll get back to you within 24 hours.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <ul className="space-y-8">
                <li>
                  <span className="text-xs font-medium tracking-widest uppercase text-black/50 block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:hello@thewellconnected.com"
                    className="text-lg text-wistful hover:text-las-palmas transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-las-palmas focus-visible:ring-offset-2 rounded"
                  >
                    hello@thewellconnected.com
                  </a>
                </li>
                <li>
                  <span className="text-xs font-medium tracking-widest uppercase text-black/50 block mb-2">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-wistful hover:text-las-palmas transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-las-palmas focus-visible:ring-offset-2 rounded"
                  >
                    @thewellconnected
                  </a>
                </li>
                <li>
                  <span className="text-xs font-medium tracking-widest uppercase text-black/50 block mb-2">
                    LinkedIn
                  </span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-wistful hover:text-las-palmas transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-las-palmas focus-visible:ring-offset-2 rounded"
                  >
                    The Well Connected
                  </a>
                </li>
              </ul>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="bg-alabaster rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <p className="font-display text-3xl md:text-4xl text-wistful mb-6">
                    Thank you.
                  </p>
                  <p className="text-lg text-black/80">
                    We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium tracking-wide text-black/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputBase}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium tracking-wide text-black/70 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputBase}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium tracking-wide text-black/70 mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={inputBase}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium tracking-wide text-black/70 mb-2"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`${inputBase} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-10 py-4 bg-las-palmas text-black font-medium tracking-wide text-lg rounded-lg hover:bg-las-palmas/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-las-palmas focus-visible:ring-offset-2 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
