/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        cloud: '#f8fafc',
        night: '#0b1120',
        steel: '#1e293b',
        court: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        ember: {
          400: '#f59e0b',
          500: '#f97316',
        },
        sky: {
          500: '#0ea5e9',
          600: '#0284c7',
        },
        mint: {
          500: '#22c55e',
        },
        slatewash: '#e2e8f0',
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', '"Segoe UI"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(15, 23, 42, 0.45)',
        lift: '0 22px 45px -30px rgba(15, 23, 42, 0.65)',
        glow: '0 0 0 1px rgba(148, 163, 184, 0.25), 0 15px 40px -25px rgba(14, 165, 233, 0.6)',
      },
      backgroundImage: {
        'court-glow':
          'radial-gradient(80% 80% at 10% 20%, rgba(14, 165, 233, 0.22), transparent 60%), radial-gradient(60% 60% at 85% 10%, rgba(249, 115, 22, 0.2), transparent 65%)',
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.25), transparent 50%), radial-gradient(circle at 80% 0%, rgba(249, 115, 22, 0.25), transparent 45%), radial-gradient(circle at 50% 85%, rgba(34, 197, 94, 0.22), transparent 50%)',
        grid:
          'linear-gradient(to right, rgba(148, 163, 184, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.16) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
