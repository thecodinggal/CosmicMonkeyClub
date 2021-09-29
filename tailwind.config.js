const { StaticImage } = require("gatsby-plugin-image")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      black: '#000',
      spacePurple: '#0f001e',
      
      primary: {
        bg: '#210049',
        green: '#64b433',
        lightblue: '#74c7ce',
        red: '#cc4a49',
        orange: '#ee702d'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
