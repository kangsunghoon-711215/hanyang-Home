export const colors = {
  primary: { 50: '#FDF6F0', 100: '#F8E8D8', 200: '#F0CEAD', 300: '#E4AD7A', 400: '#D4894A', 500: '#C06A2A', 600: '#8B4513', 700: '#6E350F', 800: '#52280B', 900: '#3A1C08', DEFAULT: '#8B4513' },
  secondary: { 50: '#F3F7EE', 100: '#E2EDD4', 200: '#C3D9A6', 300: '#9CC273', 400: '#78A84C', 500: '#5C7A3E', 600: '#4A6232', 700: '#3A4D27', 800: '#2B3A1D', 900: '#1E2914', DEFAULT: '#5C7A3E' },
  accent: { 50: '#FEFBF0', 100: '#FDF4D3', 200: '#FAE79F', 300: '#F5D460', 400: '#ECC02C', 500: '#D4A017', 600: '#A97D10', 700: '#7E5D0C', 800: '#5A4209', 900: '#3D2D06', DEFAULT: '#D4A017' },
  neutral: { 50: '#FBF8F3', 100: '#F4EFE7', 200: '#E8DFD0', 300: '#D4C8B4', 400: '#B8A892', 500: '#96856E', 600: '#7A6A57', 700: '#5E5244', 800: '#3D3530', 900: '#1A1A1A' },
  background: '#FBF8F3',
  surface: '#FFFFFF',
  text: { primary: '#1A1A1A', secondary: '#5E5244', muted: '#96856E', inverse: '#FBF8F3' },
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
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(138, 69, 19, 0.08), 0 1px 2px rgba(138, 69, 19, 0.04)',
  DEFAULT: '0 4px 12px rgba(138, 69, 19, 0.10), 0 2px 4px rgba(138, 69, 19, 0.06)',
  md: '0 8px 24px rgba(138, 69, 19, 0.12), 0 4px 8px rgba(138, 69, 19, 0.08)',
  lg: '0 16px 40px rgba(138, 69, 19, 0.14), 0 8px 16px rgba(138, 69, 19, 0.08)',
  xl: '0 24px 64px rgba(138, 69, 19, 0.18), 0 12px 24px rgba(138, 69, 19, 0.10)',
  glow: '0 0 40px rgba(212, 160, 23, 0.25)',
} as const;

export const brand = {
  name: '식품 제조 기업',
  tagline: '자연의 맛, 정성의 향',
  taglineEn: "Nature's Taste, Crafted with Care",
  colors,
  typography,
  shadows,
} as const;

export default brand;
