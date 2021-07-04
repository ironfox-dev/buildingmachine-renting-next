import { createStyles } from '@material-ui/core/styles';
import { boxShadow2 } from '~/constants/commonStyles';
import theme from '../layouts/theme';

const drawerWidth = 15;

const barStyle = createStyles({
  root: {
    height: '3.2rem',
  },
  appbar: {
    display: 'block',
    backgroundColor: theme.palette.common.white,
    zIndex: 300,
  },
  logo: {
    height: '2rem',
    margin: '0.6rem 0 0.3rem',
    padding: '0.2rem 0 0 1.2rem',
  },
  rightPanel: {
    height: '2.375rem',
    float: 'right',
    margin: '0.375rem 1.2rem 0.44rem 0',
  },
  firstText: {
    height: '0.88rem',
    fontSize: '0.75rem',
    fontFamily: 'Roboto',
    fontWeight: 500,
    letterSpacing: '0.11px',
    color: theme.palette.grey[600],
    lineHeight: '0.8rem',
    margin: 0,
  },
  secondPhone: {
    height: '1.3rem',
    fontSize: '1.125rem',
    fontFamily: 'Roboto',
    letterSpacing: '0.17px',
    color: theme.palette.grey[800],
    lineHeight: '1.3rem',
    margin: '0.2rem 0 0 0',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: `${drawerWidth}rem`,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    position: 'fixed',
    paddingTop: '3.5rem',
    width: `${drawerWidth}rem`,
    zIndex: 200,
    color: 'black',
    backgroundColor: 'white',
    ...boxShadow2,
  },
  hiddenPanel: {
    position: 'sticky',
  },
  menuButton: {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 700,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

export default barStyle;
