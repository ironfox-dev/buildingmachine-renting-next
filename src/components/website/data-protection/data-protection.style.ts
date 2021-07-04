import { createStyles } from '@material-ui/core';
import { typographyTitle, typographyText } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  mainTitle: {
    color: '#fff',
    fontSize: 62,
    fontWeight: 500,
    letterSpacing: 0.58,
    textAlign: 'center',
    margin: '4rem 0 1.25rem 0',
    lineHeight: '4.375rem',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 52,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
    },
  },
  textSection: {
    width: 760,
    padding: '5.625rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '5.625rem 1.25rem',
    },
  },
  dataProtectionTitle: {
    fontSize: 42,
    letterSpacing: 0.39,
    fontWeight: 500,
    color: typographyTitle,
    marginBottom: 53,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  subDescription: {
    fontSize: 18,
    letterSpacing: 0.17,
    color: typographyText,
    margin: '3.125rem 0',
    marginBottom: 39,
    lineHeight: '1.438rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  dataProtectionItemTitle: {
    fontSize: 30,
    marginBottom: 31,
    color: typographyTitle,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
});
