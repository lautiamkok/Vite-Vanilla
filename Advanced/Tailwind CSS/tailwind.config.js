module.exports = {
  purge: {
    // https://tailwindcss.com/docs/optimizing-for-production#enabling-manually
    enabled: true,
    content: ['./index.html', './**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
