const gradients = {
  purplePink: 'linear-gradient(91.78deg, #6D58C6 -9.27%, #F977A1 90.73%)',
  purple: 'linear-gradient(137.08deg, #230A11 -1.96%, #5D0D5F 97.8%)',
};

const colors = {
  white: 'white',
  black: '#111',
  darkPurple: '#3F0B37',
  gradients,
};

export default {
  colors: {
    ...colors,
    bgColor: colors.white,
    textColor: colors.black,
    sideBarColor: colors.darkPurple,
    buttonColor: colors.gradients.purplePink,
  },
  font: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif',
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
    },
  },
};
