/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        faded: 'rgb(187, 187, 187)',
        'moon-darkest': '#2d2d2d',
        'moon-medium': '#777c85',
        'moon-light': '#b3b9c5',
        'moon-lightest': '#ffffff',
        'moon-red': '#f2777a',
        'moon-orange': '#fca369',
        'moon-yellow': '#ffd479',
        'moon-light-yellow': '#ffeea6',
        'moon-green': '#92d192',
        'moon-blue': '#6ab0f3',
        'moon-aqua': '#76d4d6',
        'moon-purple': '#e1a6f2',
        'moon-beige': '#ac8d58',
      },
    },
  },
  plugins: [],
}
