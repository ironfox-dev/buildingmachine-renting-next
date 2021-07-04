import { createStyles } from '@material-ui/core';
import { black, primary } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  hoverable: {
    cursor: 'pointer',
  },

  content: {
    backgroundColor: black,
    borderBottom: `16px solid ${primary}`,
    position: 'relative',
    paddingTop: 0,
    paddingBottom: 45,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: 'url("/images/single-excavator-outlines.png")',
  },
  contentWithoutBG: {
    paddingTop: 0,
    paddingBottom: 45,
    backgroundColor: black,
    whiteSpace: 'break-spaces',
  },
  orangeTriangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 0 16px 16px',
    borderColor: `transparent transparent ${primary} transparent`,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  mainTitle: {
    color: '#fff',
    fontSize: 62,
    fontWeight: 500,
    letterSpacing: 0.58,
    lineHeight: '70px',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    margin: '65px 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '40px',
      whiteSpace: 'normal',
    },
  },
  mainSubtitle: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '24px',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 35,
  },

  mainFeaturesIcon: {
    height: 90,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  mainFeaturesTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '39px',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      letterSpacing: 0.21,
      lineHeight: '29px',
    },
  },
  mainFeaturesDescription: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '24px',
    marginBottom: 35,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      padding: '0 24px',
    },
  },

  centerOnMobile: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
      display: 'block',
    },
  },
});
