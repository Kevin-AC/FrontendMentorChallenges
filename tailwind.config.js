/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',],
  theme: {
    extend: {
      fontFamily:{
        'JosefinSans':'Josefin Sans'
      },
      boxShadow:{
        'sombra':'0 10px 15px hsl(0, 80%, 86%)'
      },
      colors:{
        'DesaturatedRed':'hsl(0, 36%, 70%)',
        'SoftRed':'hsl(0, 93%, 68%)',
        'prueba':'#FECFCF',
        'DarkGrayishRed':'hsl(0, 6%, 24%)',
        'gradien1':' hsl(0, 80%, 86%)',
        'gradien2':' hsl(0, 74%, 74%)',
        'Hgradien1':'hsl(0, 0%, 100%)',
        'Hgradien2':'hsl(0, 100%, 98%)'
      },
      backgroundColor: {
        'SoftRed':'hsl(0, 93%, 68%)',
      },
      variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
      width:{
        '375':'375px',
        '400':'400px',
        '610':'610px',
        '85':'85px'
      },
      height:{
        '57':'57px'
      },
      maxHeight: {
        '800': '800px',
      },
      backgroundImage:{
        'heroMobile':'url(/images/hero-mobile.jpg)',
       
        'backgroundD':'url(/images/bg-pattern-desktop.svg)'
      },
      content:{
        'heroDeskt':'url(/images/hero-desktop.jpg)',
      }

    },
  },
  plugins: [],
}
