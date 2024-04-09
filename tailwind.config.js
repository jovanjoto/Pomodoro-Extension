/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'light-pink': "#F0DBDB",
        'dark-pink' : '#DBA39A',
        'light-cream' : '#F5EBE0',
        'light-white' : '#FEFCF3'
      }
    },

  },
  plugins: [],
}