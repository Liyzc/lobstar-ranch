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
        'ranch-green': '#5D8C3E',
        'ranch-green-dark': '#3A5A27',
        'ranch-brown': '#8B5A2B',
        'ranch-brown-light': '#D4A574',
        'ranch-sky': '#87CEEB',
        'ranch-sky-dark': '#5BA3C9',
        'ranch-water': '#4A90A4',
        'ranch-gold': '#FFD700',
        'ranch-soil': '#6B4423',
        'ranch-grass': '#7CBA3D',
      },
    },
  },
  plugins: [],
};
export default config;
