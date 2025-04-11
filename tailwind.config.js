/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        siri: "siri 8s ease-in-out infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        float: "float 10s ease-in-out infinite",
      },
      keyframes: {
        siri: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1) rotate(0deg)",
            opacity: 0.5,
          },
          "33%": {
            transform: "translate(-50%, -50%) scale(1.2) rotate(120deg)",
            opacity: 0.7,
          },
          "66%": {
            transform: "translate(-50%, -50%) scale(0.8) rotate(240deg)",
            opacity: 0.6,
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate(0, 0)",
            opacity: 0.5,
          },
          "25%": {
            transform: "translate(20px, -20px)",
            opacity: 0.8,
          },
          "50%": {
            transform: "translate(-10px, -40px)",
            opacity: 0.6,
          },
          "75%": {
            transform: "translate(-20px, -20px)",
            opacity: 0.7,
          },
        },
      },
    },
  },
  plugins: [],
};