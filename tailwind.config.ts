import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luxury: ["var(--font-luxury)"],
        sans: ["var(--font-clean)"],
      },
      colors: {
        // We darken the yellow slightly for 100 Accessibility score
        gold: {
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04", 
        }
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;