module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#0b0b0b',
        'glossy': '#1f2937',
        'accent': '#00e5ff'
      },
      boxShadow: {
        'glow': '0 10px 30px rgba(0,229,255,0.12), 0 2px 6px rgba(0,0,0,0.6)'
      }
    },
  },
  plugins: [],
}
