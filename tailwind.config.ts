import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          "red-dark": "#A00C24",
          "red-light": "#E8102E",
          black: "#0A0A0A",
          "black-soft": "#111111",
          "gray-dark": "#1A1A1A",
          gray: "#2E2E2E",
          "gray-mid": "#555555",
          "gray-light": "#8A8A8A",
          "gray-border": "#E0E0E0",
          "gray-bg": "#F5F5F5",
          white: "#FFFFFF",
          "off-white": "#FAFAFA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": "0.625rem",
        "heading-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05" }],
        "heading-lg": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.1" }],
        "heading-md": ["clamp(1.25rem, 2vw, 2rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "6rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      letterSpacing: {
        "widest-xl": "0.2em",
        "widest-2xl": "0.3em",
      },
      backgroundImage: {
        "hero-grid": "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
      },
      backgroundSize: {
        "grid-80": "80px 80px",
      },
      borderWidth: {
        "3": "3px",
      },
      animation: {
        "marquee": "marquee 18s linear infinite",
        "marquee-reverse": "marquee-reverse 18s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
