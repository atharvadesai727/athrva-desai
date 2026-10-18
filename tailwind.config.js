/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // One playful palette for the whole page
        cream: '#FFF4E0',   // page background
        sun: '#FFD23F',     // sunny yellow highlight
        accent: '#FF2A2A',  // brand red
        ink: '#1A1A1A'      // text and outlines
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', '"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        // Hard, offset "sticker" shadows
        pop: '4px 4px 0 0 #1A1A1A',
        'pop-lg': '7px 7px 0 0 #1A1A1A'
      }
    },
  },
  plugins: [],
}
