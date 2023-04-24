/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: 'Ubuntu',
        Overpass: 'Overpass'
      },
      colors: {
        'Lightred(CTAtext)': ' hsl(356, 100%, 66%)',
        'Verylightred(CTAhoverbackground)': 'hsl(355, 100%, 74%)',
        'Verydarkblue(headings)': 'hsl(208, 49%, 24%)',
        //  Neutral
        'White-text': 'hsl(0, 0%, 100%)',
        'Grayishblue(footertext)': 'hsl(240, 2%, 79%)',
        Grayishblue: '#EFEFF1',
        'Verydarkgrayishblue(bodycopy)': ' hsl(207, 13%, 34%)',
        'Verydarkblackblue(footerbackground)': 'hsl(240, 10%, 16%)',
        //  Gradient
        // Background gradient - Intro/CTA mobile nav:
        Verylightred: 'hsl(13, 100%, 72%)',
        Lightred: 'hsl(353, 100%, 62%)',
        // Background gradient - body:
        Verydarkgrayblue: 'hsl(237, 17%, 21%)',
        Verydarkdesaturatedblue: ' hsl(237, 23%, 32%)'
      },
      backgroundImage: {
        headImg: "url('/images/bg-pattern-intro-mobile.svg')",
        deskHeadImg: "url('/images/bg-pattern-intro-desktop.svg')",
        arrowL: "url('/images/icon-arrow-light.svg')",
        arrowD: "url('/images/icon-arrow-dark.svg')",
        StateImg: "url('/images/bg-pattern-circles.svg')"
      }

    }
  },
  plugins: []
}
