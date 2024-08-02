/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2569ac',
        customRed: '#a2373a',
      },
      fontFamily: {
        notoSansBatak: ['Noto Sans Batak', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
