/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        'LightCyan':'hsl(193, 38%, 86%)',//semiblanco
        'NeonGreen':'hsl(150, 100%, 66%)',//verde
        'GrayishBlue':'hsl(217, 19%, 38%)',//lineas 
        'DarkGrayishBlue':'hsl(217, 19%, 24%)',//cardfondo
        'DarkBlue':'hsl(218, 23%, 16%)'//fondo
      },
      fontFamily:{
        'Manrope':'Manrope',
      },
      width:{
        '500':'500px',
        '375':'375px'
      },
      boxShadow: {
        '3xl': '0 0px 30px 8px ',
      },
      letterSpacing:{
        'ancho':'3px',
      }
    },
  },
  plugins: [],
}
