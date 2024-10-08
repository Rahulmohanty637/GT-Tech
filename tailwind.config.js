/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        titlr: "#acb9bf",
        btn: "#44d5ee",
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-100%)" }
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
