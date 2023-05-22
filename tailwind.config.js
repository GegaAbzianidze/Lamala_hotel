/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black:'#000000',
      MainGreen: "#256B43",
      LightGreen: "#1FB761",
      DarkGreen: "#1F2D25",
      LightGray: "#EAEAEA",
      DarkGray: "#4b5563",
      Lightpp: "#1D1D1E",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      yellow: "rgb(238, 255, 0)",
    },
  },
  plugins: [],
};
