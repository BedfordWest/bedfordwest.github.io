const colors = require('tailwindcss/colors')
module.exports = {
   content: [
      './templates/**/*.html',
      './static/js/**/*.js',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fill: theme => ({
      red: theme('colors.red'),
      zinc: theme('colors.zinc')
    }),
    extend: {},
  },
  plugins: [],
}
