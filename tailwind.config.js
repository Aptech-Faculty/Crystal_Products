/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5A059", // Gold
        secondary: "#1A1A1A", // Dark Grey
        dark: "#050505", // Black
        light: "#F5F5F5", // Off-white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}
