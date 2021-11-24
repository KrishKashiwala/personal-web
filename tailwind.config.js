module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '0px', max: '430px' },
      md: { max: '690px' },
      lg: { min: '700px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
