/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0D0D0D',
        'cyber-blue': '#00BFFF',
        'cyber-gray': '#1C1C1C',
        'cyber-white': '#EAEAEA',
        'neon-pink': '#FF0080',
        'neon-purple': '#8A2BE2',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'matrix-fall': 'matrixFall 3s linear infinite',
        'hologram-spin': 'hologramSpin 8s linear infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'glitch': 'glitch-animation 0.3s infinite',
      }
    },
  },
  plugins: [],
}