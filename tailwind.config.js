/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#051a0a",
      background: "#ddf8e3",
      primary: "#3ed0cb",
      secondary: "#06041b",
      accent: "#17ab24",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Marck Script", "cursive"],
    },
  },
  plugins: [],
};
