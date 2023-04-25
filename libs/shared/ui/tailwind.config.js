const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
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
  plugins: [
    require('@tailwindcss/typography'),
    createThemes({
      light: {
        primary: 'steelblue',
        secondary: 'darkblue',
        brand: '#F3F3F3',
      },
      dark: {
        primary: 'turquoise',
        secondary: 'tomato',
        brand: '#4A4A4A',
      },
      forest: {
        primary: '#2A9D8F',
        secondary: '#E9C46A',
        brand: '#264653',
      },
    }),
  ],
};
