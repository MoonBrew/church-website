/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Rasa"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Mukta"', ...defaultTheme.fontFamily.sans],
        'heading': ['"Tw Cen MT"'],
      },
      colors: {
        'black-pearl': {
          '50': '#f0f8ff',
          '100': '#e0f0fe',
          '200': '#bbe3fc',
          '300': '#7fccfa',
          '400': '#3bb2f5',
          '500': '#1199e6',
          '600': '#0579c4',
          '700': '#05609f',
          '800': '#095283',
          '900': '#0e456c',
          '950': '#061d30',
        },
        'blue-zodiac': {
          '50': '#f0f7fe',
          '100': '#ddedfc',
          '200': '#c3e0fa',
          '300': '#99cdf7',
          '400': '#69b2f1',
          '500': '#4594ec',
          '600': '#3076e0',
          '700': '#2762ce',
          '800': '#264fa7',
          '900': '#244584',
          '950': '#14213d',
        },
        'narvik': {
          '50': '#f1faee'
        },
      },
    },
  },
  plugins: [],
}

