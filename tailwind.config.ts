import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand identity from the original site
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        pink: "var(--color-pink)",
        "paper-translucent": "var(--color-paper-translucent)",
      },
      fontFamily: {
        sans: ["var(--font-helvetica)", "Helvetica", "Arial", "sans-serif"],
        title: ["var(--font-stara)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
