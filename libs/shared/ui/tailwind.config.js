const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'shared/ui/**/*.{js,ts,jsx,tsx}')],
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
