/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta tecnológica azul moderna
        'azul-oscuro': '#0f172a',      // slate-900
        'azul-electrico': '#3b82f6',    // blue-500
        'azul-brillante': '#60a5fa',    // blue-400
        'azul-cielo': '#dbeafe',        // blue-50
        'azul-mediano': '#1e40af',      // blue-800
        'gris-oscuro': '#1f2937',       // gray-800
        'gris-medio': '#6b7280',        // gray-500
        'gris-claro': '#f3f4f6',        // gray-100
      },
      fontFamily: {
        'tecnologico': ['Inter', 'system-ui', 'sans-serif'],
        'codigo': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'tecnologico': 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
        'codigo': 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)',
        'grid': `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}
