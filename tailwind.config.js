/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
}

