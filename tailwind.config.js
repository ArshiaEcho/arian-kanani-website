/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        sandstone: '#D6C29C',
        bronze: '#6F5B3E',
        shadow: '#1C1B1A',
        yellow: '#FFB703',
        gray: {
          50: '#F7F7F7',
          100: '#E6E6E6',
          400: '#BDBDBD',
          600: '#757575',
          800: '#2E2E2E',
        },
      },
      fontFamily: {
        'bebas': ['Oswald', 'Montserrat', 'Arial Black', 'sans-serif'],
        'inter': ['Inter', 'Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.05em',
      },
    },
  },
  plugins: [],
};