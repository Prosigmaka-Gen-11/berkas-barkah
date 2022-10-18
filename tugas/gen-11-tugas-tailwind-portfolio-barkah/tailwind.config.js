/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sanspro: ["Source Sans Pro"],
      },

      colors: {
        primary: "#101216",
        secondary: "#14181c",
        thirnary: "#0c8bed",
      },
    },
  },
  plugins: [],
};
