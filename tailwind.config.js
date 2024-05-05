/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#84a212',
        secondary: '#a32a2a',
        tertiary: '#222222',
        accent: '#87a32b',
        'dark-grey': '#575760'
      },
      fontFamily: {
        body: ['sans-serif']
      },
      screens: {
        xs: '420px',
        md: '769px'
      }
    }
  },
  plugins: []
}
