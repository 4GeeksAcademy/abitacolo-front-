/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        abitacoloGray: "#CCCCCC",
        abitacoloDarkGrayShadow: "#333333",
        abitacoloGreen: "#99CC33",
        black: "#000000",
        abitacoloGrayShadow: "#666666",
        white: "#FFFFFF",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      smartphone: "720px",
      // => @media (min-width: 720px) { ... }

      laptop: "1366px",
      // => @media (min-width: 1366px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
