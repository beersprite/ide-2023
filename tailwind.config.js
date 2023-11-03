/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)'],
      },
      colors: {
        white: '#FFF',
        primary: '#603B88',
        secondary: '#B22559',
        grey: '#353535',
        darkgrey: '#242424',
        blue: '#3B6388',
        green: '#3B8863',
        red: '#AD3F3F',
      },
    },
  },
  plugins: [],
};
