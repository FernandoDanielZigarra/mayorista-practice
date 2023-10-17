/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mariner': {
          '50': '#f0f7fe',
          '100': '#deecfb',
          '200': '#c4e0f9',
          '300': '#9ccbf4',
          '400': '#6cafee',
          '500': '#4a91e7',
          '600': '#3574db',
          '700': '#2d62cd',
          '800': '#2a4ea3',
          '900': '#274481',
          '950': '#1c2c4f',
        },
      }
    },
  },
  plugins: [],
};
