/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color here
        'custom-yellow': '#FEE715',
      },
      fontFamily: {
        "Robot": ["Roboto"],
        "Lato": ["Lato"],
        "Poppins": ["Poppins"],
        "PottaOne": ["PottaOne"],
        "averia-serif-libre": ["averia-serif-libre"],

      }
    },
  },
  plugins: [],
}