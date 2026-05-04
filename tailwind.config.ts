import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#020817',
          surface: '#0B1223',
          card: '#0F1A2E',
          elevated: '#142040',
        },
        brand: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          violet: '#8B5CF6',
          'violet-dark': '#7C3AED',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-dots':
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'gradient-brand':
          'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-hero':
          'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 100%)',
      },
      backgroundSize: {
        'grid-sm': '28px 28px',
        'grid-md': '40px 40px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'blob-1': 'blob1 22s ease-in-out infinite',
        'blob-2': 'blob2 28s ease-in-out infinite',
        'blob-3': 'blob3 18s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 30px) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-80px, 60px) scale(1.15)' },
          '66%': { transform: 'translate(50px, -40px) scale(0.95)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -60px) scale(1.05)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.35)',
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
        'card-hover':
          '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.2)',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.07)',
        accent: 'rgba(59,130,246,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
