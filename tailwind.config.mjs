/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary
        navy: {
          DEFAULT: '#1a2744',
          light: '#243352',
          dark: '#111b30',
        },
        blue: {
          DEFAULT: '#2d5a8a',
          light: '#3d7cc9',
          dark: '#234569',
        },
        // Secondary
        gold: {
          DEFAULT: '#c9a227',
          light: '#d4a94a',
          dark: '#a8893a',
          muted: '#b8942f',
        },
        // Neutrals
        charcoal: '#2c3e50',
        slate: {
          DEFAULT: '#5a6c7d',
          light: '#6e8294',
          dark: '#485666',
        },
        silver: '#94a3b8',
        pearl: '#e8ecf1',
        ivory: '#f8f9fb',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
        accent: ['Lora', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        '4xl': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.35' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(26, 39, 68, 0.05)',
        'md': '0 4px 6px -1px rgba(26, 39, 68, 0.07), 0 2px 4px -2px rgba(26, 39, 68, 0.05)',
        'lg': '0 10px 15px -3px rgba(26, 39, 68, 0.08), 0 4px 6px -4px rgba(26, 39, 68, 0.05)',
        'xl': '0 20px 25px -5px rgba(26, 39, 68, 0.1), 0 8px 10px -6px rgba(26, 39, 68, 0.05)',
        '2xl': '0 25px 50px -12px rgba(26, 39, 68, 0.15)',
        'gold': '0 4px 14px 0 rgba(201, 162, 39, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(26, 39, 68, 0.05)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-left': 'slideFromLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-right': 'slideFromRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-mesh': `
          radial-gradient(at 40% 20%, rgba(61, 124, 201, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(201, 162, 39, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(45, 90, 138, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(168, 137, 58, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(26, 39, 68, 0.08) 0px, transparent 50%)
        `,
        'gradient-gold': 'linear-gradient(135deg, #c9a227, #d4a94a)',
        'gradient-navy': 'linear-gradient(135deg, #1a2744, #2d5a8a)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
