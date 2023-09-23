/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./public/**/*.html",
    "./public/**/*.js",
    "./src/index.html",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      colors: {
        "black-blue-dark": "rgb(21, 23, 25)",
        "black-blue-dark-darker": "rgb(18, 20, 22)",
        "blue-bg": "#2F3C7E",
        "white-fr": "#FBEAEB",
        "cherry-red": "#990011",
        offwhite: "#FCF6F5",
        babyblue: "#8AAAE5",
        peach: "#FCEDDA",
        vanilla: "#ECE4B7",
        paynegray: "#646881",
        periwinkle: "#B7C0EE",
        thistle: "#D1BECF",
        "slate-blue": "#7067CF",
      },
      backdropBrightness: {
        75: "backdrop-filter: brightness(.75);",
        80: "backdrop-filter: brightness(.8);",
        85: "backdrop-filter: brightness(.85);",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Railway: ["Railway", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
      Lora: ["Lora", "serif"],
      Arvo: ["Arvo", "serif"],
      Orkney: ["Orkney", "sans-serif"],
    },
  },
  plugins: [],
};
