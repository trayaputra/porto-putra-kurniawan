import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#080808",
        bgSecondary: "#111111",
        surface: "#181818",
        textPrimary: "#F5F5F5",
        textSecondary: "#929292",
        textMuted: "#686868",
        silver: "#C4C4C4",
        highlight: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        silverGlow: "0 0 40px -10px rgba(196, 196, 196, 0.15)",
        cardGlow: "0 0 25px rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
