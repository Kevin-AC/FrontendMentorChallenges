/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Red: 'hsl(0,100%,68%)',
        VeryDarkBlue: 'hsl(230,29%,20%)',
        DarkGrayishBlue: 'hsl(230,11%,40%)',
        GrayishBlue: 'hsl(231,7%,65%)',
        LightGrayishBlue: 'hsl(207,33%,95%)'
      },
      fontFamily: {
        Barlow: 'Barlow',
        BarlowCondensed: 'Barlow Condensed'
      }
    }
  },
  plugins: []
}
