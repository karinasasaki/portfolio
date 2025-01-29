import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#1F362D",
      dark: "#0F1B16",
    },
    secondary: {
      main: "#c5dfd6",
    },
    background: {
      default: "#e2ede9"
    }
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 21,
    fontWeightRegular: 300,
    h1: {
      color: "#1F362D",
      fontSize: 60,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      fontWeight: 400,
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;