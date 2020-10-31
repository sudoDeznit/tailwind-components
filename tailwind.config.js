const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/custom.css',
  ],
  theme: {
    fontFamily: {
      body: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#80F0D8',
        primaryLight: '#99F3E0',
        primaryDark: '#66C0AD',
        secondary: '#5173FC',
        secondaryLight: '#748FFD',
        secondaryDark: '#4B5BB6',
        dark: '#172b4d',
        light: '#F4F9FF',
        muted: '#A1A7B2',
        success: '#7CE6B0',
        error: '#FF0A0E',
      },
      lineHeight: {
        title: '5rem',
        head: '3.5rem',
      },
      height: {
        md: '680px',
      },
    },
  },
  variants: {},
  plugins: [],
};
