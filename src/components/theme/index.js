import typography from './typography';

export const colors = {
  primary: {
    ligth: {
      color: '#7c88cc',
    },
    main: {
      color: '#5c6bc0',
      contrastText: '#FFFFFF',
    },
    darker: {
      color: '#404a86',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

export default {
  colors,
  typography,
  breakpoints,
  fontFamily: 'Fira Sans, sans-serif',
};
