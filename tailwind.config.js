module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      colors :{
        purple: {
          50: '#b2b1cf',
          100: '#77625c',
          150: '#9336ac'
        },
        grey: {
          50: '#2a2929'
        },
        green: {
          50: '#1dbc8d'
        },
        blue: {
          50: '#1d9cbc'
        },
        black: {
          50: '#1c1b1b'
        },

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};
