/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary, #4f46e5)',
          light: 'var(--primary-light, #6366f1)',
          dark: 'var(--primary-dark, #4338ca)',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          lighter: '#2D2D2D',
          text: '#FFFFFF',
          'text-secondary': '#A0A0A0',
        },
      },
      borderColor: {
        'primary/50': 'rgba(79, 70, 229, 0.5)',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.border-primary-light-50': {
          '--tw-border-opacity': '0.5',
          'border-color': 'rgba(99, 102, 241, var(--tw-border-opacity))',
        },
        '.hover\\:border-primary-light-50:hover': {
          '--tw-border-opacity': '0.5',
          'border-color': 'rgba(99, 102, 241, var(--tw-border-opacity))',
        },
      })
    },
  ],
};
