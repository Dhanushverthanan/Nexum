/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          light: '#67E8F9',
        },
        background: {
          DEFAULT: '#F8FAFC',
          alt: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 20px 40px -15px rgba(6, 182, 212, 0.15)',
      }
    },
  },
  plugins: [],
}
