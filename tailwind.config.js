/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darks: 'rgb(1, 1, 54, 0.4)',
        dark: 'rgb(1, 1, 54, 0.9)',
        lights: 'rgba(30, 30, 233, 0.4)',
        light: 'rgba(30, 30, 233, 0.95)',
        drk: 'rgba(0, 0, 0, 0.623)'
      }
    },
  },
  plugins: [],
}
