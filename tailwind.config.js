const { StaticImage } = require("gatsby-plugin-image")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      primary: {
        bg: '#25204b'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
