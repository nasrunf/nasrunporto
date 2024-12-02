/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: [
        '"Source Sans Pro", sans-serif',
      ],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4338ca',
        secondary: '#60a5fa',
        dark: '#1e1b4b'
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};

