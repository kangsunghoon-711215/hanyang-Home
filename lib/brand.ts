// ============================================================
// Brand Design Token System
// Korean Food Manufacturing Company
// ============================================================

export const colors = {
  // Primary: warm, earthy saddle brown — trust, tradition, craftsmanship
  primary: {
    50: '#FDF6F0',
    100: '#F8E8D8',
    200: '#F0CEAD',
    300: '#E4AD7A',
    400: '#D4894A',
    500: '#C06A2A',
    600: '#8B4513',  // Core brand brown
    700: '#6E350F',
    800: '#52280B',
    900: '#3A1C08',
    DEFAULT: '#8B4513',
  },

  // Secondary: natural forest green — freshness, ingredients, nature
  secondary: {
    50: '#F3F7EE',
    100: '#E2EDD4',
    200: '#C3D9A6',
    300: '#9CC273',
    400: '#78A84C',
    500: '#5C7A3E',  // Core brand green
    600: '#4A6232',
    700: '#3A4D27',
    800: '#2B3A1D',
    900: '#1E2914',
    DEFAULT: '#5C7A3E',
  },

  // Accent: golden harvest yellow — appetite, warmth, premium quality
  accent: {
    50: '#FEFBF0',
    100: '#FDF4D3',
    200: '#FAE79F',
    300: '#F5D460',
    400: '#ECC02C',
    500: '#D4A017',  // Core brand gold
    600: '#A97D10',
    700: '#7E5D0C',
    800: '#5A4209',
    900: '#3D2D06',
    DEFAULT: '#D4A017',
  },

  // Neutrals — warm-tinted to stay on-brand
  neutral: {
    50: '#FBF8F3',   // Warm off-white background
    100: '#F4EFE7',
    200: '#E8DFD0',
    300: '#D4C8B4',
    400: '#B8A892',
    500: '#96856E',
    600: '#7A6A57',
    700: '#5E5244',
    800: '#3D3530',
    900: '#1A1A1A',  // Deep charcoal text
  },

  // Semantic
  background: '#FBF8F3',
  surface: '#FFFFFF',
  text: {
    primary: '#1A1A1A',
    secondary: '#5E5244',
    muted: '#96856E',
    inverse: '#FBF8F3',
  },

  // Status
  success: '#5C7A3E',
  warning: '#D4A017',
  error: '#C0392B',
} as const;

export const typography = {
  fonts: {
    heading: '"Noto Serif KR", "Nanum Myeongjo", Georgia, serif',
    body: '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif',
    accent: '"Cormorant Garamond", "Libre Baskerville", Georgia, serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem',  // 60px
    '6xl': '4.5rem',   // 72px
    '7xl': '6rem',     // 96px
  },

  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeights: {
    tight: '1.2',
    snug: '1.4',
    normal: '1.6',
    relaxed: '1.8',
    loose: '2.0',
    // Korean text benefits from more generous line height
    korean: '1.9',
  },

  letterSpacings: {
    tightest: '-0.04em',
    tight: '-0.02em',
    normal: '0',
    wide: '0.04em',
    wider: '0.08em',
    widest: '0.16em',
    // Korean headings often use slight tracking
    korean: '0.05em',
  },
} as const;

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  32: '8rem',       // 128px
  40: '10rem',      // 160px
  48: '12rem',      // 192px
  64: '16rem',      // 256px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px — subtle
  DEFAULT: '0.375rem', // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(138, 69, 19, 0.08), 0 1px 2px rgba(138, 69, 19, 0.04)',
  DEFAULT: '0 4px 12px rgba(138, 69, 19, 0.10), 0 2px 4px rgba(138, 69, 19, 0.06)',
  md: '0 8px 24px rgba(138, 69, 19, 0.12), 0 4px 8px rgba(138, 69, 19, 0.08)',
  lg: '0 16px 40px rgba(138, 69, 19, 0.14), 0 8px 16px rgba(138, 69, 19, 0.08)',
  xl: '0 24px 64px rgba(138, 69, 19, 0.18), 0 12px 24px rgba(138, 69, 19, 0.10)',
  '2xl': '0 40px 80px rgba(138, 69, 19, 0.22)',
  inner: 'inset 0 2px 4px rgba(138, 69, 19, 0.08)',
  glow: '0 0 40px rgba(212, 160, 23, 0.25)',
  'primary-glow': '0 8px 32px rgba(138, 69, 19, 0.30)',
  none: 'none',
} as const;

export const transitions = {
  fast: '150ms ease',
  DEFAULT: '250ms ease',
  slow: '400ms ease',
  slower: '600ms cubic-bezier(0.16, 1, 0.3, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Semantic component tokens
export const components = {
  button: {
    primary: {
      bg: colors.primary.DEFAULT,
      text: colors.text.inverse,
      hover: colors.primary[700],
      border: 'transparent',
    },
    secondary: {
      bg: 'transparent',
      text: colors.primary.DEFAULT,
      hover: colors.primary[50],
      border: colors.primary.DEFAULT,
    },
    accent: {
      bg: colors.accent.DEFAULT,
      text: colors.primary[900],
      hover: colors.accent[600],
      border: 'transparent',
    },
  },
  card: {
    bg: colors.surface,
    border: colors.neutral[200],
    shadow: shadows.DEFAULT,
    radius: borderRadius.xl,
  },
  nav: {
    bg: colors.neutral[50],
    text: colors.text.primary,
    active: colors.primary.DEFAULT,
    height: '72px',
  },
} as const;

// Brand voice tokens (for content guidelines)
export const brand = {
  name: '식품 제조 기업',
  tagline: '자연의 맛, 정성의 향',
  taglineEn: 'Nature\'s Taste, Crafted with Care',
  tone: ['따뜻한', '신뢰로운', '전통적인', '정성스러운', '자연친화적인'],
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  components,
} as const;

export default brand;
