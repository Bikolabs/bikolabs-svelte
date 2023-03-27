/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Cabin"'],
      },
    },
    container: {
      center: true,
      padding: "2rem",
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
