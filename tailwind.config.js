/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-sunset': {
          50:  '#FFF7EE',
          100: '#FFEFD9',
          200: '#FFDCA6',
          500: '#FF7A00', // orange primary
          600: '#FF3B8C', // pink
          700: '#6F00FF', // purple accent
          800: '#00E6A8'  // teal accent (use as custom key if desired)
        },
        'neon-yellow': '#FFD200'
      },
      boxShadow: {
        'neon-lg': '0 10px 30px rgba(111,0,255,0.18), 0 4px 10px rgba(0,230,168,0.08)'
      }
    }
  },
  plugins: []
}
