/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#2b90f9',
      },
      height: {
        '600': '600px',
      },
      scale: {
        '101': '1.01',
      }
    },
  },
  plugins: [],
}
