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
        sans: 'var(--font-quicksand)',
      },
      colors: {
        logoBlue: '#0096BE',
        lightBg: '#F4ECFF',
        mdBgCard: '#6D64A7',
        lgBgCard: '#3A3573',
        xlBgCard: '#27244D',
        card: {
          light: '#8252B1',
          dark: '#502D73',
        },
      },
    },
  },
  plugins: [],
}
