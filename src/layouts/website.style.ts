import { createStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

import { black, darkGray, offWhite } from '../constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  root: {
    fontFamily: '"IBM Plex Sans", Roboto, open-sans',
  },

  header: {
    backgroundColor: black,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 8,
      paddingTop: 18,
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  logo: {
    cursor: 'pointer',
    height: 21,
    [theme.breakpoints.down('xs')]: {
      height: 14,
    },
  },
  headerMenuWrap: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  headerMenuWrapOpen: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      width: '100%',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      zIndex: 9999,
      justifyContent: 'flex-end',
      display: 'flex',
    },
  },
  headerMenu: {
    color: offWhite,
    letterSpacing: 0.13,
    lineHeight: '18px',
    fontSize: 14,
    minHeight: 36,
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#000',
      width: 'calc(100% - 55px)',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      minHeight: 'unset',
    },
  },
  headerMenuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'flex-start',
    },
  },
  headerMenuItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 10,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 14,
      paddingRight: 25,
      marginBottom: 25,
    },
  },
  headerMenuItemText: {
    marginRight: 6,
    whiteSpace: 'nowrap',
  },
  headerSubMenu: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      background: '#fff',
      borderRadius: 2,
      boxShadow: '0 5px 5px -3px rgba(0,0,0,0.1), 0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 2px rgba(0,0,0,0.06)',
      top: 'calc(100% + 10px)',
      zIndex: 99,
      right: 0,
    },
  },
  headerSubMenuItem: {
    [theme.breakpoints.up('sm')]: {
      color: darkGray,
      fontSize: 14,
      letterSpacing: '0.13px',
      lineHeight: '18px',
      marginRight: 0,
      padding: '0.56rem 0.875rem',
      '&:first-child': {
        paddingTop: '1.125rem',
        paddingBottom: '0.56rem',
      },
      '&:last-child': {
        paddingTop: '0.56rem',
        paddingBottom: '1.125rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 42,
    },
  },
  headerButton: {
    whiteSpace: 'nowrap',
    color: '#fff',
  },
  closeHeaderMenu: {
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginTop: 18,
    marginRight: 23,
    marginBottom: 40,
  },

  footer: {
    paddingTop: 30,
    paddingBottom: 25,
    backgroundColor: '#1B1A22',
  },
  footerLogoWrap: {
    marginBottom: 20,
  },
  footerLogo: {
    height: 20,
  },
  footerMenu: {
    padding: 0,
    margin: '0 0 25px',
    listStyle: 'none',
    [theme.breakpoints.down('xs')]: {
      borderBottom: '1px solid #6D6D6D',
      marginBottom: 50,
      paddingBottom: 25,
    },
  },
  footerMenuItem: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '23px',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    '&:last-child': {
      margin: 0,
    },
    '& a': {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  footerMenuItemIcon: {
    fontSize: 20,
    marginRight: 9,
  },
  footerPartnerLogo: {
    maxWidth: '100%',
  },
  copyrights: {
    fontSize: 14,
    color: '#fff',
    lineHeight: '1.7em',
    fontWeight: 'normal',
    WebkitFontSmoothing: 'antialiased',
    textAlign: 'center',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
    },
  },
  socialMediaIcon: {
    color: '#fff',
    background: '#3B5998',
    borderRadius: '50%',
    width: 30,
    height: 30,
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '40px',
    margin: '0 5px',
  },

  preFooterSection: {
    boxShadow: 'inset 0 0 0 1000px rgba(13, 13, 15, 0.78)',
    backgroundImage: 'url("/images/prefooter-background.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: 60,
    paddingBottom: 100,
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 45,
      paddingBottom: 50,
    },
  },
  preFooterRightSide: {
    paddingLeft: 35,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingTop: 40,
    },
  },
  preFooterLeftSide: {
    paddingRight: 80,
    borderRight: '1px solid #fff',
    [theme.breakpoints.down('xs')]: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.58)',
      borderRight: 'none',
      padding: 0,
    },
  },
  preFooterTitle: {
    margin: 0,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '55px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      letterSpacing: 0.3,
      lineHeight: '42px',
      textAlign: 'center',
    },
  },
  preFooterSubtitle: {
    margin: 0,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '24px',
    marginTop: 16,
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
  },
  preFooterForm: {
    color: '#fff',
  },
  preFooterFormSubmit: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 13,
      marginBottom: 45,
    },
  },
  preFooterFormError: {
    fontSize: 16,
    color: red[500],
  },
  preFooterFormSuccess: {
    fontSize: 16,
    color: green[500],
  },
});
