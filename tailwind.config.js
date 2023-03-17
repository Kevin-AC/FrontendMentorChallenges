/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      width:{
        '375':'375px',
        '400':'400px',
        '135':'135px',
        '265':'265px'
      },
      fontFamily:{
        'SpaceGrotesk':'Space Grotesk'
      },
      colors:{
        'White':'hsl(0, 0%, 100%)',
        'Lightgrayishviolet':'hsl(270, 3%, 87%)',
        'Darkgrayishviolet':'hsl(279, 6%, 55%)',
        'Verydarkviolet':'hsl(278, 68%, 11%)',
        'Lineargradient':'hsl(249, 99%, 64%)',
        'LineargradientTO':'hsl(278, 94%, 30%)',
        'Red':'hsl(0, 100%, 66%)',
      },
      backgroundImage:{
        'bgmovile':"url(../images/bg-main-mobile.png)",
        'bgDesktop':"url(../images/bg-main-desktop.png)",
        'cardBlack':"url(../images/bg-card-back.png)",
        'cardFront':"url(../images/bg-card-front.png)",
        'cardLogo':"url(../images/card-logo.svg)"
      }


    },
  },
  plugins: [],
}
