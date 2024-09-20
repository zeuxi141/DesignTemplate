/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
      colors: {
        'light-coffee': '#C89F94',
      },
      zIndex: {
        '2': '2',
      }
    },
  },
  plugins: [],
}

