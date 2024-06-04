/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors : {
        "mainPurple" : "#6e00ff",
        "PurpleHover" : "#6f15e5",
        "WhiteBackground" :"#fafcff",
        "mainWhite" : "#ffffff",
        "mainGray" : "#ececec",
        "mainBlack" : "#000000",
        "mainYellow" : "#fde201"
      }
    },
  },
  plugins: [],
}

