/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#661AE6",
          "neutral": "#191D24"

          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

