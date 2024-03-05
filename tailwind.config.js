/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Space Grotesk, sans-serif',
      },
      backgroundImage: {
        'main-desktop': "url('./assets/bg-main-desktop.png')",
        'main-mobile': "url('./assets/bg-main-mobile.png')",
      },
      colors: {
        icdWhite: 'hsl(0, 0%, 100%)',
        icdLightGrayishViolet: 'hsl(270, 3%, 87%)',
        icdDarkGrayishViolet: 'hsl(279, 6%, 55%)',
        icdVeryDarkViolet: 'hsl(278, 68%, 11%)',
        icdRedError: 'hsl(0, 100%, 66%)',
        icdBorder: 'hsl(278, 94%, 30%)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease 0s 1 normal forwards',
      },
      screens: {
        tablet: '890px',
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
}
