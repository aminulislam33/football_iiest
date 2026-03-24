/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'field-dark': '#2F6B3F',
        'field-green': '#1a5d3f',
        'pitch': '#2d7a3d',
        'gold': '#d4af37',
        'stadium-black': '#0a0a0a',
        'navbar-bg': '#ffffff',
      },
      backgroundImage: {
        'grass-texture': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cline x1=%220%22 y1=%2250%22 x2=%22100%22 y2=%2250%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%220.5%22/%3E%3Cline x1=%2250%22 y1=%220%22 x2=%2250%22 y2=%22100%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%220.5%22/%3E%3C/svg%3E')",
      },
      boxShadow: {
        'stadium': '0 0 40px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)',
        'stadium-lg': '0 0 60px rgba(212, 175, 55, 0.4), 0 0 30px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' },
        },
        'slide-in': {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontSize: {
        'scoreboard': '3.5rem',
      },
    },
  },
  plugins: [],
};
