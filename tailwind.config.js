/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1a237e',
          light: '#534bae',
        },
        secondary: {
          DEFAULT: '#00bcd4',
          light: '#62efff',
        },
        accent: {
          DEFAULT: '#ffc107',
          light: '#fff350',
        },
        light: '#ecf0f1',
        dark: '#000000',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgba(26, 35, 126, 0.9), rgba(0, 188, 212, 0.8))',
      },
    },
  },
  plugins: [],
};