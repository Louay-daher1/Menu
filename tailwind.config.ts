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
        sand: {
          50:  "#fdf8ee",
          100: "#f9edcf",
          200: "#f2d99a",
          300: "#e9c165",
          400: "#e0a83a",
          500: "#d4922a",
          DEFAULT: "#C8861E",
        },
        brown: {
          50:  "#f5ede6",
          100: "#e8d3c2",
          200: "#c9a07a",
          300: "#a96f3e",
          400: "#7d4d24",
          500: "#5c3415",
          600: "#3e200a",
          DEFAULT: "#3B1F08",
        },
        flame: {
          light: "#FFB347",
          DEFAULT: "#FF7B00",
          dark: "#CC4400",
        },
      },
      fontFamily: {
        arabic: ["'Noto Naskh Arabic'", "serif"],
        display: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
