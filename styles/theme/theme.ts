import { createTheme, Theme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#eeffff',
    },
    secondary: {
      light: '#eeffff',
      main: '#bbdefb',
      dark: '#8aacc8',
      contrastText: '#000a12',
    },
    error: {
      main: '#FF2C52',
    },
    background: {
      default: '#e9ecef',
      paper: '#000a12',
    },
    text: {
      primary: '#eeffff',
      secondary: '#263238',
    }
  }
})

const typographyUtils = (theme: Theme) => ({
  '&.bold': {
    fontWeight: 600,
  },
  '&.default': {
    fontWeight: 500,
  },
  '&.lighter': {
    fontWeight: 400,
  },
  '&.blue': {
    color: theme.palette.primary.main,
  },
  '&.dark-blue': {
    color: theme.palette.text.primary,
  },
  '&.red': {
    color: theme.palette.error.main,
  },
  '&.grey': {
    color: theme.palette.text.secondary,
  },
  '&.centered': {
    textAlign: 'center',
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#000000',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    h1: {
      fontSize: '3.5rem',
      lineHeight: 1.5,
      fontWeight: 900,
      '&.small': { fontSize: '30px', lineHeight: '35px' },

      ...typographyUtils(theme),
    },
    h2: {
      fontSize: '2.5rem',
      lineHeight: 1.5,
      fontWeight: 900,
      ...typographyUtils(theme),
    },
    h3: {
      fontSize: '2rem',
      lineHeight: 1.5,
      fontWeight: 900,
      ...typographyUtils(theme),
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeight: 700,

      ...typographyUtils(theme),
    },
    h5: {
      fontSize: '1.2rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      ...typographyUtils(theme),
    },
    body2: {
      fontSize: '0.8rem',
      lineHeight: 1.5,
      fontWeight: 400,
      ...typographyUtils(theme),
    },
    caption: {
      fontSize: '0.6rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 700,
    }
  },
});

export default theme;