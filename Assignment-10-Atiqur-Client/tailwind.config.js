/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["winter"], // Set the default theme to "winter"
  },
}