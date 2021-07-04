import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { black, primary } from '../constants/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      dark: '#333',
    },
    secondary: {
      main: '#FAFAFA',
      contrastText: black,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
