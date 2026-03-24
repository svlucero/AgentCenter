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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#da7756", // Warm orange like Claude's Cowork
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f4f4f4",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#f0f0f0",
          foreground: "#333333",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
