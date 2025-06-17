export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
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
