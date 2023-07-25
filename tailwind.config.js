/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'krona': '"Krona One", sans-serif',
        'base': '"Poppins", sans-serif'
      },
      colors: {
        dark: '#0C080B',
        green: '#1E3329',
        yellow: '#FFD470',
        grey: '#B8B8B8',
        light: '#FAFAFA',
      }
    },
  },
  plugins: [],
}

