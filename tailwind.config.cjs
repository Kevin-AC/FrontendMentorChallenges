/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        218: "218px",
      },
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        /*card top*/
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Instagram1:'hsl(37, 97%, 70%)',
        Instagram2:'hsl(329, 70%, 58%)',
        /*Dark Theme*/
        ToggleBlue: "hsl(210, 78%, 56%)",
        ToggleGreen: "hsl(146, 68%, 55%)",
        "VeryDarkBlue(BG)": "hsl(230, 17%, 14%)",
        "VeryDarkBlue(TopBGPattern)": "hsl(232, 19%, 15%)",
        "DarkDesaturatedBlue(CardBG)": "hsl(228, 28%, 20%)",
        "DarkHover":"hsl(228, 28%, 30%)",
        'DesaturatedBlue(Text)': 'hsl(228, 34%, 66%)',
        "White(Text)": "hsl(0, 0%, 100%)",

        /*Light Theme*/
        ToggleL: "hsl(230, 22%, 74%)",
        "White(BG)": "hsl(0, 0%, 100%)",
        "VeryPaleBlue(TopBGPattern)": "hsl(225, 100%, 98%)",
        "LightGrayishBlue(CardBG)": "hsl(227, 47%, 96%)",
        "DarkGrayishBlue(Text)": "hsl(228, 12%, 44%)",
        "VeryDarkBlue(Text)": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
