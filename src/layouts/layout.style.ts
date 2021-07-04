import { createStyles } from '@material-ui/core';
import { boxShadow2 } from '~/constants/commonStyles';
import theme from './theme';

export const authLayoutTheme = createStyles({
  root: {
    minWidth: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 5px gray',
    height: '3.2rem',
  },
  logo: {
    width: '9.8rem',
    height: '3rem',
    padding: '0.2rem 0 0 1.2rem',
  },
  panelLogo: {
    display: 'block',
    width: '15.8rem',
    margin: '2.5rem auto 1.25rem auto',
  },
  title: {
    textAlign: 'center',
  },
  headofContent: {
    width: '43.125rem',
    height: '3.7rem',
    float: 'right',
    margin: '0 auto',
  },
  linkTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    letterSpacing: '0.15px',
    lineHeight: '1.2rem',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '0 0.5rem',
  },
  subtitleofContent: {
    color: theme.palette.grey[800],
    fontFamily: 'Helvetica',
    fontSize: '1.25rem',
    letterSpacing: '0.19px',
    lineHeight: '1.5rem',
    textAlign: 'right',
  },
  content: {
    display: 'table',
    margin: '0 auto',
    backgroundColor: 'white',
    width: '22rem',
    borderRadius: '2px',
    ...boxShadow2,
  },
  headline: {
    textAlign: 'center',
    color: theme.palette.grey[800],
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.19px',
    lineHeight: '1.5rem',
    margin: 0,
  },
});

export const dashboardLayoutTheme = createStyles({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '3.5rem',
    flexGrow: 1,
  },
  headline: {
    textAlign: 'center',
    color: theme.palette.grey[800],
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.19px',
    lineHeight: '1.5rem',
    margin: 0,
  },
  accountPanel: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    zIndex: 600,
    margin: '0.6rem 0',
    alignItems: 'center',
  },
  accountLogo: {
    height: '2rem',
  },
  accountIcon: {
    textAlign: 'center',
    width: '2rem',
    height: '2rem',
    borderRadius: 50,
    backgroundColor: 'goldenrod',
    color: 'white',
    paddingTop: '0.3rem',
    marginLeft: '1rem',
    marginRight: '0.25rem',
  },
  accountButton: {
    width: '9rem',
    padding: 0,
    textTransform: 'none',
  },
  accountMenu: {
    marginTop: '1.5rem',
    marginLeft: '1rem',
  },
  accountMenuItem: {
    width: '8rem',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.black,
    },
  },
});
