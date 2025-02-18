/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}