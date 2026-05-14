/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      boxShadow: {
        glow: "0 24px 80px rgba(14, 12, 28, 0.28)",
        glass: "0 18px 46px rgba(10, 8, 20, 0.18)"
      },
      colors: {
        ink: "#0c0a14",
        mist: "#f7f3ed",
        amber: "#f59e0b"
      },
      fontFamily: {
        display: ["Aptos Display", "Segoe UI Variable", "Segoe UI", "sans-serif"],
        body: ["Aptos", "Segoe UI Variable", "Segoe UI", "sans-serif"]
      },
      animation: {
        "soft-pulse": "softPulse 2.6s ease-in-out infinite"
      },
      keyframes: {
        softPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.82" },
          "50%": { transform: "scale(1.08)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
