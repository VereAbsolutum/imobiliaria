/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/resources/views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
