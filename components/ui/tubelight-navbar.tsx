"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Compass,
  Mail,
} from "lucide-react";

const navItems: { href: string; label: string; icon: React.ElementType }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/work", label: "Work", icon: FolderOpen },
  { href: "/approach", label: "Approach", icon: Compass },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function TubelightNavbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: top center */}
      <nav
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50"
        aria-label="Main navigation"
      >
        <div
          className="flex items-center gap-1 p-1.5 rounded-full shadow-xl"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9DB32] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {isActive && (
                  <motion.span
                    layoutId="tubelight-glow"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(201, 219, 50, 0.2)",
                      boxShadow: "0 0 20px rgba(201, 219, 50, 0.4)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile: bottom center */}
      <nav
        className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        aria-label="Main navigation"
      >
        <div
          className="flex items-center gap-1 p-1.5 rounded-full shadow-xl"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center justify-center w-11 h-11 rounded-full text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9DB32] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {isActive && (
                  <motion.span
                    layoutId="tubelight-glow-mobile"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(201, 219, 50, 0.2)",
                      boxShadow: "0 0 20px rgba(201, 219, 50, 0.4)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
