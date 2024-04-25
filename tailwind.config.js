/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "circleImg": "url(assets/circle-black.png)"
      }
    },
  },
  plugins: [],
};
