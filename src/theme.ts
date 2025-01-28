import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    }
  },
  typography: {
    fontFamily: "Roboto Slab",
    fontSize: 21,
    h1: {
      fontFamily: "Shrikhand"
    },
    h2: {
      fontFamily: "Roboto Mono",
      fontSize: 40
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;