/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'primary-col': '#ffc629',
        'secondary-col': '#ffffff',
        'secondary-off': '#f0f0f0',
        'accent-primary-dark': '#d6a724',
        'text-dark': '#010101',
        'text-light': '#f0f0f0',
        'text-primary': '#333333',
      },
    },
  },
  plugins: [],
};
