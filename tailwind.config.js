module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: "#E60D2E",
        base: "#071C41",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
