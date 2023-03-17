/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'Libre Franklin':'Libre Franklin'
      },
      colors:{
        'Blue':'hsl(223, 87%, 63%)',
        'PaleRed':'hsl(354, 100%, 66%)',
        'Gray':'hsl(0, 0%, 59%)',
        'VeryDarkBlue':'hsl(209, 33%, 12%)',
        'LightRed':'hsl(354, 100%, 66%)',
      },
      width:{
        '375':'375px'
      },
      backgroundImage:{
        'facebook-W':"url('../images/facebook-white.svg')",
        'facebook':"url('../images/facebook.svg')",
        'twitter':"url('../images/twitter.svg')",
        'twitter-W':"url('../images/twitter-white.svg')",
        'instagran':"url('../images/instagram.svg')",
        'instagram-W':"url('../images/instagram-white.svg.svg')",
      },
      backgroundSize:{
        '50%':'50%'
      }

    },
  },
  plugins: [],
}
