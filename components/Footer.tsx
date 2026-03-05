"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
              THE WELL CONNECTED
            </p>
            <p className="body-sm text-white/70 max-w-xs">
              Crafting meaningful connections between brands and people.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-las-palmas transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-6">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@thewellconnected.com"
                  className="text-white/80 hover:text-las-palmas transition-colors"
                >
                  hello@thewellconnected.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-las-palmas transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-las-palmas transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} The Well Connected. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
