/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        '50': '#f4f7fb',
        '100': '#e8eff6',
        '200': '#ccddeb',
        '300': '#a0c1d9',
        '400': '#6ca0c4',
        '500': '#4a84ad',
        '600': '#386a91',
        '700': '#2e5576',
        '800': '#294963',
        '900': '#273f54',
      },
    },
    container: {
      'center': true,
    }
  },
  plugins: [],
};
