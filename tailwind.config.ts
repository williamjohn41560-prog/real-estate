import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          50: "#F1F4F9",
          100: "#DDE3EE",
          200: "#B8C4D9",
          400: "#5A6E8C",
          600: "#243146",
          800: "#131D30",
          900: "#0F172A",
          950: "#080D18",
        },
        gold: {
          DEFAULT: "#C8A24D",
          50: "#FBF6EB",
          100: "#F3E6C4",
          200: "#E6CD8E",
          400: "#D4B267",
          500: "#C8A24D",
          600: "#A9853B",
          700: "#8A6B2F",
        },
        offwhite: "#F8FAFC",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6CD8E 0%, #C8A24D 50%, #A9853B 100%)",
        "navy-gradient": "linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.95) 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(200,162,77,0.45)",
        card: "0 4px 24px -6px rgba(15,23,42,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
