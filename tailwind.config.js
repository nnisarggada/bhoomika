/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fed2e4",
        background: "#2d0113",
        primary: "#bf2246",
        secondary: "#efd2e2",
        accent: "#8c348d",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Marck Script", "cursive"],
      },
      height: {
        section: "100dvh",
      },
    },
  },
  plugins: [],
};
