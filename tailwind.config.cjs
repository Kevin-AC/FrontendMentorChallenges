/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Lightred: 'hsl(0, 100%, 67%)',
        LightredB: 'hsl(0, 100%, 96%)',
        Orangeyyellow: 'hsl(39, 100%, 56%)',
        OrangeyyellowB: 'hsl(39, 100%, 96%)',
        Greenteal: 'hsl(166, 100%, 37%)',
        GreentealB: 'hsl(166, 100%, 96%)',
        Cobaltblue: 'hsl(234, 85%, 45%)',
        CobaltblueB: 'hsl(234, 85%, 96%)',
        // gradient
        Lightslateblue_background: 'hsl(252, 100%, 67%)',
        Lightroyalblue_background: 'hsl(241, 81%, 54%)',
        // circle gradient
        Violetblue_circle: 'hsla(256, 72%, 46%, 1)',
        Persianblue_circle: 'hsla(241, 72%, 46%, 0)',

        White: 'hsl(0, 0%, 100%)',
        Paleblue: 'hsl(221, 100%, 96%)',
        Lightlavender: 'hsl(241, 100%, 89%)',
        Darkgrayblue: 'hsl(224, 30%, 27%)'
      },
      fontFamily: {
        HankenGrotesk: 'Hanken Grotesk'
      }
    }
  },
  plugins: []
}
