import { Platform } from 'react-native';

export const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#F2F2F7',
  card: '#FFFFFF',
  text: '#000000',
  border: '#C6C6C8',
  notification: '#FF3B30',
  
  // Dark mode colors
  darkPrimary: '#0A84FF',
  darkSecondary: '#5E5CE6',
  darkBackground: '#000000',
  darkCard: '#1C1C1E',
  darkText: '#FFFFFF',
  darkBorder: '#38383A',
  
  // Performance colors
  recovery: '#34C759',
  fatigue: '#FF3B30',
  neutral: '#8E8E93',
  explosive: '#FF9500',
  endurance: '#5856D6',
  strength: '#007AFF',
  mobility: '#32ADE6',
};

export const typography = {
  heading: {
    fontFamily: Platform.select({ web: 'Inter, system-ui', default: 'System' }),
    fontSize: 28,
    fontWeight: '700' as const,
  },
  subheading: {
    fontFamily: Platform.select({ web: 'Inter, system-ui', default: 'System' }),
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontFamily: Platform.select({ web: 'Inter, system-ui', default: 'System' }),
    fontSize: 16,
    fontWeight: '400' as const,
  },
  caption: {
    fontFamily: Platform.select({ web: 'Inter, system-ui', default: 'System' }),
    fontSize: 14,
    fontWeight: '400' as const,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  round: 9999,
};