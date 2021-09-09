import CircularStd from '../../assets/fonts/CircularStd-Bold.woff2';
import { createTheme, Theme, ThemeOptions } from '@material-ui/core';

const circularStd = {
    fontFamily: 'CircularStd',
    fontStyle: 'normal',
    fontDisplay: 'swap' as 'swap',
    fontWeight: 500,
    src: `
      local('CircularStd'),
      local('CircularStd-Bold'),
      url(${CircularStd}) format('woff2')
    `,
}

const common: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      }
    },
    typography: {
      fontFamily: "'CircularStd', sans-serif !important",
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [circularStd],
        },
      },
    },
  };

  export const dark: Theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#7C4DFF',
      },
      secondary: {
        main: '#2196F3',
      },
      background: {
        default: '#030614', //12172F
        paper: '#0a0f23', // 051327
      },
      text: {
        primary: '#D7DCEC',
        secondary: '#8492c4'
      },
      card: {
        default: '#12172F', // 202940
        paper: '#1F2747' // 29314F
      },
      gauge: {
        needle: '#464A4F'
      },
      success: {
        main: '#00C853'
      },
      error: {
        main: '#D9534F' // D84315
      },
      warning: {
        main: '#FFC107'
      },
    },
    ...common
  });

  export const light: Theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#7C4DFF',
      },
      secondary: {
        main: '#2196F3',
      },
      background: {
        default: '#FFFFFF',
        paper: '#e4e7ec',
      },
      text: {
        primary: '#212121',
        secondary: '#616161'
      },
      card: {
        default: '#FBFDFF',
        paper: '#E8EBF0'
      },
      gauge: {
        needle: '#C0C8D2'
      }
    },
    ...common
  });