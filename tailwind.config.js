const { StaticImage } = require("gatsby-plugin-image")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.2' },
        }
      },
      animation: {
        twinkle: 'twinkle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      spacePurple: '#0f001e',
      
      primary: {
        bg: '#210049',
        green: '#64b433',
        lightblue: '#74c7ce',
        red: '#cc4a49',
        orange: '#ee702d',
        purple: '#0f001e'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
