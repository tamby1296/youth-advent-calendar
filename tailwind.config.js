module.exports = {
  content: [
    "./src/**/*.{ts,tsx}", 
    "./public/index.html", 
  ],

  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', 
        secondary: '#9333EA',
      },
      fontFamily: {
        sans: ['Baskervville SC', 'Arial', 'sans-serif'], 
      },
      spacing: {
        128: '32rem', 
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
