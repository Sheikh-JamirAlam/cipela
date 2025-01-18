import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#080807",
      },
      fontFamily: {
        sans: ["var(--font-aeonik)"],
        ogg: ["var(--font-ogg)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
