/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2200px",
      "4xl": "1950px",
    },
    extend: {
      colors: {
        yellow: "#FFC700",
        test: "#293462",
        grey: "#B2B2B2",
        red: "#DC0000",
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
