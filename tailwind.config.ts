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
        // Stardew Valley inspired palette
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
        // Pixel art friendly
        'pixel-dark': '#1a1a2e',
        'pixel-light': '#eaeaea',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive', 'monospace'],
        'ranch': ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'pixel-grid': "url('/grid-pattern.svg')",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
