
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'ops-orange': '#ff6600',
        'ops-gray': '#f5f5f5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
