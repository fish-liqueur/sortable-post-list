/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        violet: "#6357b1",
        timeTravelGreen: "#00ff86"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
}

