/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
}
