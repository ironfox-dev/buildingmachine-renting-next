import { createStyles } from '@material-ui/core';
import { black, primary } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  content: {
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
    },
  },
  infographicSection: {
    paddingTop: 30,
    paddingBottom: 200,
    borderBottom: `16px solid ${primary}`,
    position: 'relative',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
      paddingBottom: 120,
    },
  },
  infographicTitle: {
    color: black,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '2.938rem',
      padding: '2.5rem 0.625rem 0',
    },
  },
  infographicSubtitle: {
    color: black,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.3rem',
    textAlign: 'center',
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.25rem',
      fontWeight: 'normal',
    },
  },
  infographicImage: {
    width: '100%',
  },
  infographicFeatureTitle: {
    color: primary,
    fontSize: 26,
    fontWeight: 500,
    letterSpacing: 0.24,
    lineHeight: '2.125rem',
    marginBottom: 20,
    marginTop: 50,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      letterSpacing: 0.21,
      lineHeight: '1.8rem',
    },
  },
  infographicFeatureDescription: {
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
  },

  cockpitScreenshotSectionBG: {
    backgroundImage: 'url("/images/grayish-background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  cockpitScreenSection: {
    paddingBottom: 100,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 35,
    },
  },
  cockpitScreenshot: {
    marginTop: -150,
    maxWidth: 890,
    zIndex: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: -75,
    },
  },
  cockpitScreenshotIpadWrap: {
    zIndex: 1,
  },
  cockpitScreenshotIpad: {
    marginTop: -170,
    width: 370,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  cockpitScreenshotTitle: {
    color: black,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    marginTop: 50,
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 35,
      letterSpacing: 0.34,
      lineHeight: '2.625rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      letterSpacing: 0.3,
      lineHeight: '2.625rem',
      textAlign: 'center',
      marginLeft: -5,
      marginRight: -5,
    },
  },
  cockpitScreenshotDescription: {
    color: black,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
    margin: 0,
    marginBottom: 25,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
  },

  futureTechnoloySection: {
    paddingTop: 100,
    paddingBottom: 100,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 60,
    },
  },
  futureTechnoloyTitle: {
    color: black,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    marginTop: 0,
    marginBottom: 22,
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '2.938rem',
      textAlign: 'center',
      margin: '0 -1.25rem 1.25rem',
    },
  },
  futureTechnoloyDescription: {
    color: black,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
    },
  },
  futureTechnoloyImage: {
    maxWidth: '100%',
  },

  mainFeatureButton: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 75,
    },
  },
});
