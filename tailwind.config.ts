import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FDF6F0',
          100: '#F8E8D8',
          200: '#F0CEAD',
          300: '#E4AD7A',
          400: '#D4894A',
          500: '#C06A2A',
          600: '#8B4513',
          700: '#6E350F',
          800: '#52280B',
          900: '#3A1C08',
          DEFAULT: '#8B4513',
        },
        secondary: {
          50:  '#F3F7EE',
          100: '#E2EDD4',
          200: '#C3D9A6',
          300: '#9CC273',
          400: '#78A84C',
          500: '#5C7A3E',
          600: '#4A6232',
          700: '#3A4D27',
          800: '#2B3A1D',
          900: '#1E2914',
          DEFAULT: '#5C7A3E',
        },
        accent: {
          50:  '#FEFBF0',
          100: '#FDF4D3',
          200: '#FAE79F',
          300: '#F5D460',
          400: '#ECC02C',
          500: '#D4A017',
          600: '#A97D10',
          700: '#7E5D0C',
          800: '#5A4209',
          900: '#3D2D06',
          DEFAULT: '#D4A017',
        },
        neutral: {
          50:  '#FBF8F3',
          100: '#F4EFE7',
          200: '#E8DFD0',
          300: '#D4C8B4',
          400: '#B8A892',
          500: '#96856E',
          600: '#7A6A57',
          700: '#5E5244',
          800: '#3D3530',
          900: '#1A1A1A',
        },
        brand: {
          bg: '#FBF8F3',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#96856E',
        },
      },
      fontFamily: {
        heading: ['var(--font-noto-serif-kr)', '"Nanum Myeongjo"', 'Georgia', 'serif'],
        body:    ['"Pretendard Variable"', '"Pretendard"', '-apple-system', '"Noto Sans KR"', 'sans-serif'],
        accent:  ['var(--font-cormorant)', '"Libre Baskerville"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['6rem',    { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'display-xl':  ['4.5rem',  { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'display-lg':  ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md':  ['3rem',    { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'display-sm':  ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'display-xs':  ['1.875rem',{ lineHeight: '1.35' }],
      },
      letterSpacing: {
        korean: '0.05em',
        'korean-tight': '0.02em',
      },
      lineHeight: {
        korean: '1.9',
        'korean-tight': '1.6',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '104': '26rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'brand-sm':  '0 1px 3px rgba(138, 69, 19, 0.08), 0 1px 2px rgba(138, 69, 19, 0.04)',
        'brand':     '0 4px 12px rgba(138, 69, 19, 0.10), 0 2px 4px rgba(138, 69, 19, 0.06)',
        'brand-md':  '0 8px 24px rgba(138, 69, 19, 0.12), 0 4px 8px rgba(138, 69, 19, 0.08)',
        'brand-lg':  '0 16px 40px rgba(138, 69, 19, 0.14), 0 8px 16px rgba(138, 69, 19, 0.08)',
        'brand-xl':  '0 24px 64px rgba(138, 69, 19, 0.18), 0 12px 24px rgba(138, 69, 19, 0.10)',
        'brand-2xl': '0 40px 80px rgba(138, 69, 19, 0.22)',
        'glow-gold': '0 0 40px rgba(212, 160, 23, 0.25)',
        'glow-primary': '0 8px 32px rgba(138, 69, 19, 0.30)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':      'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up-slow': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':      'fade-in 0.5s ease forwards',
        shimmer:        'shimmer 2s linear infinite',
        float:          'float 4s ease-in-out infinite',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'warm-gradient': 'linear-gradient(135deg, #FBF8F3 0%, #F4EFE7 50%, #E8DFD0 100%)',
        'primary-gradient': 'linear-gradient(135deg, #8B4513 0%, #C06A2A 50%, #D4894A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #A97D10 0%, #D4A017 50%, #ECC02C 100%)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};

export default config;
