/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px rgba(243, 114, 33, 0.15)',
        'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'display': ['Aptos Display', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}