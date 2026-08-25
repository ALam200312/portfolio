import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#fafafa",
        panel: "#f2f2f2",
        border: "#c2c2c2",
        muted: "#6b6b6b",
        foreground: "#111111",
        accent: "#1a56db",
        money: "#0f7a3d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
