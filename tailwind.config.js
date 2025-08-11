/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'romance-pink': '#FF6F91',
        'romance-light': '#FFC1CC',
        'romance-gradient': {
          from: '#FF6F91',
          to: '#FFC1CC',
        },
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'romance-gradient': 'linear-gradient(135deg, #FF6F91 0%, #FFC1CC 100%)',
        'romance-gradient-reverse':
          'linear-gradient(135deg, #FFC1CC 0%, #FF6F91 100%)',
        'text-gradient': 'linear-gradient(135deg, #FF6F91 0%, #FFC1CC 100%)',
      },
    },
  },
  plugins: [],
};
