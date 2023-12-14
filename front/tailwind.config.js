/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Lexend Mega",
      secondary: "Public Sans",
    },
    container: {
      padding: {
        DEFAULT: "10px",
      },
      boxShadow: {
        xl: "7px 7px 0px -0px #0B2447",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#E9DDFF",
        callAction: "#CEED40",
        disabledButton:"#a388ee",
        secondary: "#F5F5F5ff",
        accent: "#ADDD2C",

      },
    },
  },
  plugins: [],
};
