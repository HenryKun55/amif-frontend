/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e7eff6',
          100: '#cfdfee',
          150: '#b7d0e5',
          200: '#9fc0dd',
          250: '#88b0d4',
          300: '#70a0cb',
          350: '#5890c3',
          400: '#4081ba',
          450: '#2871b2',
          500: '#1061a9',
        },
      },
    },
  },
  plugins: [],
}
