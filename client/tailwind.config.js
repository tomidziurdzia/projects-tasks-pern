module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      color1: "#CB997E",
      color2: "#DDBEA9",
      color3: "#FFE8D6",
      color4: "#B7B7A4",
      color5: "#A5A58D",
      color6: "#6B705C",
    }),
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
