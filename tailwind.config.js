/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveShadow: {
          "0%": {
            boxShadow: "5px 5px 1px rgba(0, 0,0, 0.7)",
          },
          "16.66%": {
            boxShadow: "5px -5px 1px rgba(0, 0,0, 0.7)",
          },
          "33.33%": {
            boxShadow: "0px -5px 1px rgba(0, 0,0, 0.7)",
          },
          "50%": {
            boxShadow: "-5px -5px 1px rgba(0, 0,0, 0.7)",
          },
          "66.66%": {
            boxShadow: "-5px 5px 1px rgba(0, 0,0, 0.7)",
          },
          "83.33%": {
            boxShadow: "0px 5px 1px rgba(0, 0,0, 0.7)",
          },
          "100%": {
            boxShadow: "5px 5px 1px rgba(0, 0,0, 0.7)",
          },
        },
        moveShadowWhite: {
          "0%": {
            boxShadow: "5px 5px 1px rgba(255, 255, 255, 0.7)",
          },
          "16.66%": {
            boxShadow: "5px -5px 1px rgba(255, 255, 255, 0.7)",
          },
          "33.33%": {
            boxShadow: "0px -5px 1px rgba(255, 255, 255, 0.7)",
          },
          "50%": {
            boxShadow: "-5px -5px 1px rgba(255, 255, 255, 0.7)",
          },
          "66.66%": {
            boxShadow: "-5px 5px 1px rgba(255, 255, 255, 0.7)",
          },
          "83.33%": {
            boxShadow: "0px 5px 1px rgba(255, 255, 255, 0.7)",
          },
          "100%": {
            boxShadow: "5px 5px 1px rgba(255, 255, 255, 0.7)",
          },
        },
      },

      animation: {
        moveShadow: "moveShadow 3s infinite linear",
        moveShadowWhite: "moveShadowWhite 3s infinite linear",
      },
      colors: {
        brand: "#069494",
        black: "#333",
        white: "#fff",
      },
    },
    fontFamily: {
      Rubik: ["Rubik Wet Paint", "serif"],
      Bauhaus: ["Bauhs93", "serif"],
      Roboto: ["Roboto Slab", "sans-serif"],
    },
  },
  plugins: [],
};
