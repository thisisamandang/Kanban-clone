/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      ss: "375px",
      xs: "540px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
