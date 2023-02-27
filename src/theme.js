import { createTheme } from '@mui/material'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440
    }
  },
  palette: {
    grey: {
      100: '#343447',
      200: '#3F3F55',
      300: '#747488',
      400: '#9B9BB2',
      500: '#C8C8D7',
      600: '#DEDEE9',
      700: '#F0F0F5',
      800: '#F8F8F9'
    },
    background: {
      default: '#F8F8F9',
      paper: '#FFFFFF'
    },
    primary: {
      main: '#DA0175',
      light: '#F5A8D0',
      dark: '#75003B',
      contrastText: '#F8F8F9'
    },
    secondary: {
      main: '#0E8750',
      light: '#ACD9C5',
      dark: '#034A2A',
      contrastText: '#F8F8F9'
    },
    success: {
      main: '#C3D4FE',
      light: '#5482F6',
      dark: '#243F80'
    },
    warning: {
      main: '#CC7800',
      light: '#EF8F00',
      lighter: '#F5D9B0'
    },
    error: {
      main: '#AE1100',
      light: '#E70000',
      lighter: '#F2D6D0'
    },
    info1: {
      main: '#971D1D',
      light: '#FFEFEF',
      lighter: '#E8CACA'
    },
    info2: {
      main: '#C5A605',
      light: '#FCF6DC',
      lighter: '#E3DEC8'
    },
    info3: {
      main: '#1FA7AF',
      light: '#EEF6F6',
      lighter: '#D2DFE0'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: "'Montserrat', 'Nunito', sans-serif",
    body1: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.7
    },
    body2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.4',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body3: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.2',
      fontWeight: 400,
      lineHeight: 1.5
    },
    subtitle1: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.6rem',
      fontWeight: 700,
      lineHeight: 1.5
    },
    subtitle2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.8rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '2.6rem',
      lineHeight: 1.3
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '2.4rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '1.8rem',
      lineHeight: 1.3
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: 1.5
    },
    button: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '1.8rem',
      lineHeight: '2.5rem',
      color: '#F8F8F9',
      textTransform: 'none'
    }
  }
})
