import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Well Connected | Premium Creative Agency",
  description:
    "Crafting meaningful connections between brands and people. We design immersive events, strategic sponsorships, and unforgettable brand experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col pb-20 md:pb-0">
        <TubelightNavbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
