/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        darkBlue : "#023047",
        lightBlue : "#00b4d8"
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}