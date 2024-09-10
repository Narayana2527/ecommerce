/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  
  theme: {
    extend: {
      colors: {
        customGreen: '#c3711f', // Adding your custom color        
        bgFooter:"#181818",
        bgBlogCard:'#d5d1cd',
        offerIcon:'#ac7d4f',
        bookingButton:"#e57f1b",
        menuButton:'#d9d9d9',
        aboutsecondGrid:"#d0985f",
        bannerFirstBg:"#1c1c1c",
        bannerSecondBg:"#88531d",
        menuBg:"#f5f5f5"

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}

