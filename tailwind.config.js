/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { backgroundColor: 'hsl(200, 20%, 80%)' },
          '100%': { transform: 'hsl(200, 20%, 92%)' },
        },
      },
      animation: {
        loading: 'loading 1.25s linear infinite alternate',
      },
      maxWidth: {
        container: '1500px',
        content: '1366px',
      },
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
        yellow: {
          50: '#f8f4e9',
          100: '#f1e9d3',
          150: '#eadfbe',
          200: '#e3d4a8',
          250: '#dcc992',
          300: '#d5be7c',
          350: '#ceb366',
          400: '#c7a951',
          450: '#c09e3b',
          500: '#b99325',
        },
        brown: {
          50: '#f6f4f0',
          100: '#ede8e0',
          150: '#e3ddd1',
          200: '#dad2c1',
          250: '#d1c7b2',
          300: '#c8bba3',
          350: '#bfb093',
          400: '#b5a584',
          450: '#ac9974',
          500: '#a38e65',
        },
        beige: {
          100: '#fff9ee',
          200: '#e6e0d6',
          300: '#ccc7be',
          400: '#b3aea7',
          500: '#99958f',
        },
      },
      flex: {
        '1/7': '0.8 1 0%',
        '1/3': '1.5 1.5 0%',
        2: '2 2 0%',
        '2/3': '2.5 2.5 0%',
        3: '3 3 0%',
      },
      backgroundImage: {
        world: "url('./src/assets/world.png')",
      },
    },
  },
  plugins: [],
}
