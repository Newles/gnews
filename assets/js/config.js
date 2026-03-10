// ./tailwind.config.js
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.{md,html}",
    "./_pages/**/*.{md,html}",
    "./*.{html,md}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}