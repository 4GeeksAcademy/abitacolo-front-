/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        abitacoloGray: "#CCCCCC",
        darkGrayShadow: "#333333",
        abitacoloGreen: "#99CC33",
        black: "#000000",
        grayShadow: "#666666",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
