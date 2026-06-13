/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        dark: '#0a0a0a',
        darkGray: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
