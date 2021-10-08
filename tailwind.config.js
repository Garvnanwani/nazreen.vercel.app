module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-green': '#295A5F',
      },
      borderWidth: {
        10: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
