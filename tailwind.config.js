/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['dark', 'light', 'night'],
  },
  plugins: [require('daisyui')], // eslint-disable-line
}
