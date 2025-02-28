import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        bgBlue: "var(--bg-blue)",
        btnBlue: "var(--btn-blue)",
        grey: "var(--grey)",
        gray: "var(--gray)",
        bgGolden: "var(--bg-golden)",
        textGolden: "var(--text-golden)",
        textDarkBlue: "var(--text-dark-blue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
