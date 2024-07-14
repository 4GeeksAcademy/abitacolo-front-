/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-light-mode': '#CCCCCC',
        'brown-light-mode': '#333333',
        'green-light-mode': '#99CC33',
        'dark-gray-dark-mode': '#666666',
        'prueba-color': '#121212'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
