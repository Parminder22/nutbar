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
        // Brand palette
        choco: {
          dark: "#0D0806",
          mid: "#1A0E08",
          rich: "#2C1810",
          warm: "#3D2314",
        },
        caramel: {
          DEFAULT: "#C8833A",
          light: "#D4A574",
          gold: "#E8B86D",
          pale: "#F5DEB3",
        },
        nutty: {
          beige: "#F5E6D3",
          cream: "#FAF3E8",
          sand: "#D4B896",
        },
        bark: {
          DEFAULT: "#8B5E3C",
          light: "#A67C5B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 9s ease-in-out 1s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(5deg)" },
          "66%": { transform: "translateY(-8px) rotate(-3deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200, 131, 58, 0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(200, 131, 58, 0.8), 0 0 100px rgba(200, 131, 58, 0.4)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "choco-gradient": "radial-gradient(ellipse at center, #2C1810 0%, #0D0806 70%)",
        "gold-gradient": "linear-gradient(135deg, #C8833A, #E8B86D, #C8833A)",
        "noise": "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
