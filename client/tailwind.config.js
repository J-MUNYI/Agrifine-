/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Green theme colors
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Brown theme colors
        brown: {
          50: '#faf8f6',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a082',
          500: '#9d7f5f',
          600: '#8b6f4f',
          700: '#6d5642',
          800: '#5a4738',
          900: '#4a3c30',
        },
        // Primary green for main brand
        primary: {
          light: '#22c55e',  // green-500
          DEFAULT: '#16a34a', // green-600
          dark: '#15803d',    // green-700
        },
        // Brown for accents
        accent: {
          light: '#b8a082',   // brown-400
          DEFAULT: '#8b6f4f', // brown-600
          dark: '#6d5642',    // brown-700
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
