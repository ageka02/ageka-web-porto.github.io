/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      blue: "#1fb6ff",
      red: "#c9090d",
      purple: "#4c27c2",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        dark: "#160f2a",
        white: "#fff",
        transparent: "transparent"
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
