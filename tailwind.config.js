/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popi: "Poppins",
        gaegu: "Gaegu",
        lob: "Lobster",
        lob2: "Lobster Two",
        simple: "Single Day",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
