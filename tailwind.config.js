export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ops: {
          orange: "#ff6600",
          black: "#000000",
          white: "#ffffff",
          gray: "#f5f5f5",
        },
        orange: {
          600: "#ff6600",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
