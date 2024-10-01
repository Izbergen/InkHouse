

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'mb': '320px',
        'sm': '576px',
        'md': '768px',
        '2xl': '1440px',
      },
      colors: {
        'primary-black': '#2C2D35',
        'deep-green': '#376B44',
        'forest-green': '#598D66',
        'light-green': '#C3D1C6',
        'soft-mint': '#D4E8D9',
        'pale-grey': '#E1EDE6',
        'slate-grey': '#4C5866',
        'stone-grey': '#86928B',
        'off-white': '#F4F6F5'
      },
      gap: {
        '15': '3.75rem',
      },
      padding: {
        '15': '3.75rem',
      },
      margin: {
        '15': '3.75rem',
        '2.5': '0.625rem'
      }

    },
  },

}

