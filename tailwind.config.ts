import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-head)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f4ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#4F46E5',
          600: '#4136d0',
          700: '#3730a3',
          800: '#312e81',
          900: '#1B1460',
        },
        accent: '#7F5AF0',
        darkBg: '#0E0B1F',
      },
      boxShadow: {
        elev1: '0 2px 8px rgba(79, 70, 229, 0.15)',
        elev2: '0 4px 16px rgba(79, 70, 229, 0.2)',
        elev3: '0 8px 32px rgba(79, 70, 229, 0.25)',
        elevGlow: '0 0 32px rgba(127, 90, 240, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-y': {
          '0%, 100%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(100%)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            transform: 'translate(0%, 0%)',
          },
          '25%': {
            transform: 'translate(100%, 0%)',
          },
          '50%': {
            transform: 'translate(100%, 100%)',
          },
          '75%': {
            transform: 'translate(0%, 100%)',
          },
        },
      },
      hyphens: {
        'manual': 'manual',
        'auto': 'auto',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-hyphens'),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.glassmorphism': {
          'backdrop-filter': 'blur(16px)',
          'background': 'rgba(255, 255, 255, 0.05)',
          '&.dark': {
            'background': 'rgba(255, 255, 255, 0.02)',
          }
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.1)'
        },
        '.cursor-gradient': {
          'background': 'radial-gradient(600px at var(--x, 0) var(--y, 0), rgba(127, 90, 240, 0.15), transparent 40%)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
  safelist: [
    'animate-pulse',
    'animate-bounce',
    'animate-spin',
    'bg-brand-50',
    'bg-brand-100',
    'bg-brand-200',
    'bg-brand-500',
    'bg-brand-600',
    'bg-brand-900',
    'text-brand-500',
    'text-brand-600',
    'border-brand-500',
    'shadow-elev1',
    'shadow-elevGlow',
  ]
}

export default config 