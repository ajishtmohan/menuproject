/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f0',
          100: '#d9edd9',
          200: '#aed4ae',
          300: '#7ab57a',
          400: '#4e944e',
          500: '#2d7a2d',
          600: '#1f5e1f',
          700: '#174817',
          800: '#103410',
          900: '#0a220a',
        },
        earth: {
          50:  '#fdf6ee',
          100: '#f8e8cc',
          200: '#f0cc90',
          300: '#e6ab50',
          400: '#d48a20',
          500: '#a86a12',
          600: '#7e4e0c',
          700: '#5c3808',
          800: '#3c2505',
          900: '#201303',
        },
        cream: {
          50:  '#fdfaf4',
          100: '#f9f3e3',
          200: '#f2e4c0',
          300: '#e8ce8e',
          400: '#d9b05c',
        },
      },},
  },
  plugins: [],
};
