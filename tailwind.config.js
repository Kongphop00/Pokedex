/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  daisyui: {
    themes: ['emerald', 'dark'],
  },
  plugins: [require('daisyui')],
};
