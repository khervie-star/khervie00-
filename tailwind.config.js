/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true
  // },
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        varela_round: ['"Varela Round" sans-serif ',],
        comfortaa: ['"Comfortaa" cursive'],
        fredoka_one: ['"Fredoka One" cursive'],
        anton: ['"Anton" sans-serif'],
      },
      backgroundImage: {
        'khervie': "url('../public/assets/khervie00.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-span-before', ' &:hover span:before, &:focus span:before ');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}