/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "SF Pro Display", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
