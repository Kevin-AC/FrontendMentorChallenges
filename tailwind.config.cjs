/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'LinearGradient1':'hsl(236, 72%, 79%)',
        'LinearGradient2':'hsl(237, 63%, 64%)',
        'VeryLightGrayishBlue':'hsl(240, 78%, 98%)',
        'LightGrayishBlue':'hsl(234, 14%, 74%)',
        'GrayishBlue':'hsl(233, 13%, 49%)',
        'DarkGrayishBlue':'hsl(232, 13%, 33%)',
        '':'',
      },
      fontFamily:{
        'Montserrat':'Montserrat',
      },
      backgroundImage:{
        'bg-top':"url(/images/bg-top.svg)",
      }
      
    },
  },
  plugins: [],
};
