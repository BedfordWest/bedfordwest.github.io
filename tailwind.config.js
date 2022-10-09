const colors = require('tailwindcss/colors')
module.exports = {
   purge: [
      './templates/**/*.html',
      './static/js/**/*.js',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fill: theme => ({
      red: theme('colors.red')
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
