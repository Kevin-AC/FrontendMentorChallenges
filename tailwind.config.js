/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'SpaceMono':'Space Mono'
      },
      colors:{
        'Verydarkcyan':'hsl(183, 100%, 15%)',
        'Strongcyan':'hsl(172, 67%, 45%)',
        'Darkgrayishcyan':'hsl(186, 14%, 43%)',
        'Grayishcyan':'hsl(184, 14%, 56%)',
        'Lightgrayishcyan':'hsl(185, 41%, 84%)',
        'Verylightgrayishcyan':'hsl(189, 41%, 97%)',
        'White':'hsl(0, 0%, 100%)',

      },
      width:{
        '375':'375px',
      },
      height:{
        
      },
   
    },
  },
  plugins: [],
}
