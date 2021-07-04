import { createStyles } from '@material-ui/core';
import { typographyText, typographyTitle } from '~/constants/colors';
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
  },
  textSection: {
    width: 760,
    padding: '5.625rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '5.625rem 1.25rem',
    },
  },
  sectionTitles: {
    fontSize: 42,
    lineHeight: '3.438rem',
    letterSpacing: 0.39,
    fontWeight: 500,
    color: typographyTitle,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '2.9rem',
      textAlign: 'center',
    },
  },
  subDescription: {
    fontSize: 18,
    letterSpacing: 0.17,
    color: typographyText,
    margin: '2rem 0',
    marginBottom: 50,
    lineHeight: '1.438rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
});
