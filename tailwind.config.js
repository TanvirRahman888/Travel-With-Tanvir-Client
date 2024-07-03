/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //Dark Mode
  // purge: [],
 darkMode: 'class', // Enables dark mode based on the class applied to the HTML tag
 //Dark Mode
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('@tailwindcss/forms')],
}

