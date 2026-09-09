/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2A2A',
          dark: '#111111',
          black: '#0a0a0a',
          card: '#161616',
          muted: '#888888',
          border: 'rgba(255, 255, 255, 0.12)'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
        handwritten: ['"Caveat"', '"Permanent Marker"', 'cursive']
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(255, 42, 42, 0.65)',
        'glow-red-lg': '0 0 60px -10px rgba(255, 42, 42, 0.8)',
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
        'badge': '0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}
