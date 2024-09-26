/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#F9F9F9',
      black: '#1C2220',
      red: {
        50: '#fff0f1',
        100: '#ffdddf',
        200: '#ffc1c4',
        300: '#ff969b',
        400: '#ff5a62',
        500: '#ff2630',
        600: '#fb0713',
        700: '#e8010c',
        800: '#af050d',
        900: '#900c12',
        950: '#4f0004',
      },
      orange: {
        50: '#FFBA60',
        100: '#FFB237',
        200: '#FF9F1C',
        300: '#F38F24',
        400: '#E7730E',
      },
      yellow: {
        50: '#fffbeb',
        100: '#fff5c6',
        200: '#ffe988',
        300: '#ffd84a',
        400: '#ffc82c',
        500: '#f9a307',
        600: '#dd7b02',
        700: '#b75606',
        800: '#94420c',
        900: '#7a360d',
        950: '#461b02',
      },
      blue: {
        50: '#81BDF5',
        100: '#0A7EC6',
        200: '#0067B6',
        300: '#003F91',
        400: '#0C2779',
        500: '#081568',
      },
      gray: {
        50: '#f8f8f8',
        100: '#ebebeb',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        karla: ['Karla', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
}