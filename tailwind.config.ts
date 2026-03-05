import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
        "creator-cloud": "1100px",
      },
      colors: {
        lavender: "#ADA8D3",
        lime: "#C9DB32",
        wistful: "#ADA8D3",
        "las-palmas": "#C9DB32",
        alabaster: "#EEECE1",
        "dark-lavender": "#0f0f12",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        "glow-lavender": "0 0 40px rgba(173, 168, 211, 0.15)",
        "glow-lime": "0 0 40px rgba(201, 219, 50, 0.2)",
        "glow-lime-sm": "0 0 30px rgba(201, 219, 50, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
