/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18abc6",
        light: "#a3a3a3",
        light1: "#f8f8f8",
      }
    },
  },
  plugins: [],
}

