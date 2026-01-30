/**
 * GoldMarket.ge Design Tokens
 * Style guide based on provided design mockups
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    DEFAULT: '#0D6B5F', // Dark teal - main brand color
    50: '#ECFDF8',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#0D6B5F', // Main brand
    700: '#0A5A50',
    800: '#065F46',
    900: '#064E3B',
  },

  // Gold/Amber accent for VIP and highlights
  gold: {
    DEFAULT: '#E8B44B',
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#E8B44B', // Main gold
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  // Neutrals
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic colors
  error: {
    light: '#FEE2E2',
    DEFAULT: '#DC2626',
    dark: '#991B1B',
  },
  success: {
    light: '#D1FAE5',
    DEFAULT: '#16A34A',
    dark: '#166534',
  },
  warning: {
    light: '#FEF3C7',
    DEFAULT: '#F59E0B',
    dark: '#B45309',
  },

  // Background colors
  background: {
    page: '#F5F5F5',
    card: '#FFFFFF',
    elevated: '#FFFFFF',
  },
};

export const vipBadges = {
  superVip: {
    bg: '#DC2626',      // Red
    text: '#FFFFFF',
    label: 'S-VIP',
  },
  vipPlus: {
    bg: '#0D6B5F',      // Teal
    text: '#FFFFFF', 
    label: 'VIP +',
  },
  vip: {
    bg: '#6B7280',      // Gray
    text: '#FFFFFF',
    label: 'VIP',
  },
};

export const typography = {
  fontFamily: {
    sans: ['var(--font-geist-sans)', 'BPG Glaho WEB Caps', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const spacing = {
  container: {
    padding: '1rem',      // Mobile
    paddingMd: '1.5rem',  // Tablet
    paddingLg: '2rem',    // Desktop
    maxWidth: '1280px',
  },
  card: {
    padding: '1rem',
    gap: '0.75rem',
    borderRadius: '0.75rem',
  },
  section: {
    gap: '2rem',
    marginY: '3rem',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Component-specific tokens
export const components = {
  header: {
    height: '64px',
    heightMobile: '56px',
    bg: colors.primary.DEFAULT,
  },
  footer: {
    bg: colors.gray[900],
  },
  button: {
    primary: {
      bg: colors.primary.DEFAULT,
      bgHover: colors.primary[700],
      text: '#FFFFFF',
    },
    secondary: {
      bg: colors.gold.DEFAULT,
      bgHover: colors.gold[600],
      text: '#FFFFFF',
    },
    outline: {
      border: colors.gray[300],
      borderHover: colors.primary.DEFAULT,
      text: colors.gray[700],
      textHover: colors.primary.DEFAULT,
    },
  },
  input: {
    border: colors.gray[300],
    borderFocus: colors.primary.DEFAULT,
    bg: '#FFFFFF',
    placeholder: colors.gray[400],
  },
  card: {
    bg: '#FFFFFF',
    border: colors.gray[200],
    shadow: shadows.sm,
    hoverShadow: shadows.md,
  },
  modal: {
    bg: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
    borderRadius: borderRadius.xl,
  },
  badge: {
    price: {
      bg: colors.gold[500],
      text: '#FFFFFF',
    },
  },
  categoryCard: {
    bg: '#FFFFFF',
    bgActive: colors.primary.DEFAULT,
    textActive: '#FFFFFF',
    border: colors.gray[200],
  },
  filter: {
    sectionBg: '#FFFFFF',
    checkboxActive: colors.primary.DEFAULT,
  },
};
