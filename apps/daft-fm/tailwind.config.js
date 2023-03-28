const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}', 'views/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#252222',
        },
        gray: {
          primary: '#393737',
        },
      },
    },
  },
  plugins: [],
};
