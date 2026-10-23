/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0d5c4d',
        brandlight: '#e6f4f1',
      }
    },
  },
  plugins: [],
}