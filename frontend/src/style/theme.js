import { rem, tint } from 'polished';

const gradients = {
  purplePink:
    'linear-gradient(90deg, rgba(109,88,198,1) 0%, rgba(249,119,161,1) 100%);',
  purple: 'linear-gradient(137.08deg, #230A11 -1.96%, #5D0D5F 97.8%)',
};

const colors = {
  white: 'white',
  black: '#111',
  purple: '#380B2D',
  lightPurple: '#C7B8C5', // tint(0.5, '#380B2D'),
};

export default {
  colors: {
    ...colors,
    baseFont: colors.black,
    headingFont: colors.lightPurple,
    h1Font: colors.purple,
  },
  gradients,
  fontFamily: {
    base: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  typography: {
    fontSize: '1rem',
    fontWeight: {
      light: '300',
      regular: '400',
      bold: '500',
    },
    lineHeight: '1.6',
  },
  backgrounds: {
    sideNav: gradients.purple,
    buttons: gradients.purplePink,
  },
  spacing: {
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
  },
  breakpoints: {
    sm: 576, // phone
    md: 768, // tablet
    lg: 992, // desktop
  },
};
