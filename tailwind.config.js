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
        },
        rocket: {
          '0%, 100%': { transform: 'translateX(0%)'},
          '50%': {transform: 'translateX(15%)'},
        },
        slowBounce: {
          '0%, 100%': {transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(30%)'},
        }
      },
      animation: {
        twinkle: 'twinkle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rocket: 'rocket 7s cubic-bezier(0.4, 0, 0.6, 1) 40',
        'slow-bounce': 'slowBounce 5s ease-in-out infinite',
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      spacePurple: '#0f001e',
      navy: 'navy',
      gray: 'gray',
      
      primary: {
        bg: '#210049',
        green: '#64b433',
        lightblue: '#74c7ce',
        red: '#cc4a49',
        darkred: '#aa2e25',
        orange: '#ee702d',
        purple: '#0f001e',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
