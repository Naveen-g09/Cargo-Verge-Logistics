/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3C5D',
        secondary: '#F7931E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.22) 1px, transparent 1px)",
      },
      boxShadow: {
        card: '0 16px 44px rgba(11, 60, 93, 0.08)',
      },
    },
  },
  plugins: [],
};
