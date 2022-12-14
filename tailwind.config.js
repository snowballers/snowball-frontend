/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite-react/**/*.js'],
  theme: {
    colors: {
      primary: {
        50: '#f4f7fb',
        100: '#e8eff6',
        200: '#ccddeb',
        300: '#a0c1d9',
        350: '#7DBDE9',
        400: '#6ca0c4',
        450: '#55b8ff',
        500: '#4a84ad',
        600: '#386a91',
        700: '#2e5576',
        800: '#294963',
        900: '#273f54',
      },
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'letter-background': "url('/image/letter_background.png')",
      },
      screens: {
        sm: '480px',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('autoprefixer')],
};
