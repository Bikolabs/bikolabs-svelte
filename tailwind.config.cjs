/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Lexend"'],
        secondary: ['"Raleway"'],
      },
      colors: {
        primarycolor: "#EB5482",
        secondarycolor: "#3E3E54",
        tertiarycolor: "#acacb6",
        quaternarycolor: "#E3E3E7",
      },
      fontSize: {
        min: ["12px", "24px"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      mobile: "767px",
      // => @media (min-width: 767px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktoplarge: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
