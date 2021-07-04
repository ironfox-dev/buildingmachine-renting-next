import { createStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { black, midBlack, offBlack } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  mainTitle: {
    marginBottom: 35,
    [theme.breakpoints.down('xs')]: {
      fontSize: 50,
      marginBottom: -20,
      marginTop: 25,
    },
  },
  secondTitle: {
    color: black,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    marginTop: 40,
    marginBottom: 21,
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '2.9rem',
    },
  },
  secondSubtitle: {
    color: midBlack,
    whiteSpace: 'break-spaces',
    textAlign: 'center',
    marginBottom: 80,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.25rem',
      marginBottom: 40,
    },
  },

  contactTitle: {
    color: offBlack,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '2.4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      letterSpacing: 0.21,
      lineHeight: '1.813rem',
    },
  },
  contactWrap: {
    marginBottom: 180,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  contactOptionRow: {
    marginTop: 40,
    marginBottom: 30,
  },
  contactOptionIcon: {
    width: 60,
    height: 60,
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 2,
    },
  },
  contactOptionTitle: {
    color: offBlack,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.19,
    lineHeight: ' 1.563',
    margin: '0.938rem 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: 0.17,
      lineHeight: '1.438rem',
    },
  },

  contactFormWrap: {
    marginTop: 25,
    [theme.breakpoints.down('xs')]: {
      marginTop: 15,
    },
  },
  contactFormRow: {
    marginTop: 19,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  contactFormNameRow: {
    marginBottom: 0,
  },
  contactDescription: {
    color: black,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.438rem',
    margin: ' 1.563rem 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
    },
  },
  contactFormError: {
    fontSize: 16,
    color: red[500],
  },
  contactFormSuccess: {
    fontSize: 16,
    color: green[500],
  },
});
