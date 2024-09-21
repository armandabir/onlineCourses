/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '120vh':'120vh',
        '80vh':'80vh',
        '18':'75px'
      },
      fontSize:{
        'xxs':['8px', '14px']
      }
    },
  },
  plugins: [],
}

