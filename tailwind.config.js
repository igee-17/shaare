/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_green: '#024751',
        light_green: '#F0F5F4'
      },
      fontFamily: {
        satoshi: 'Satoshi, sans-serif',
        syne: 'Syne, sans-serif'
      }
    },
  },
  plugins: [],
}
