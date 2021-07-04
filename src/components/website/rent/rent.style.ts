import { createStyles } from '@material-ui/core';
import { black, primary, offBlack, midBlack } from '~/constants/colors';
import { boxShadow } from '~/constants/commonStyles';
import theme from '~/layouts/theme';

export default createStyles({
  content: {
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
    },
  },
  titleSection: {
    paddingBottom: 90,
  },
  mainTitle: {
    marginBottom: 35,
    [theme.breakpoints.down('xs')]: {
      marginTop: 35,
      marginBottom: 20,
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
    paddingTop: 40,
    marginBottom: 106,
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '2.93rem',
      paddingTop: 65,
      marginBottom: 0,
      padding: '0 0.625rem 0',
    },
  },
  mainSubtitle: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
    },
  },
  mainFeaturesTitle: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 25,
    },
  },
  mainFeaturesDescription: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
    },
  },
  rentBookingTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      letterSpacing: 0.21,
      fontWeight: 'bold',
      lineHeight: '1.8rem',
      marginTop: 0,
      paddingTop: 35,
    },
  },

  rentFlowWrapper: {
    borderBottom: `16px solid ${primary}`,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 35,
    },
  },
  rentFlowSection: {
    marginBottom: 70,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
    },
  },
  rentFlowImage: {
    width: 445,
    [theme.breakpoints.between('md', 'sm')]: {
      width: 300,
    },
    [theme.breakpoints.up('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
      width: '95%',
    },
  },
  rentFlowTitle: {
    color: offBlack,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '2.4rem',
    marginBottom: 22,
    [theme.breakpoints.down('xs')]: {
      padding: '0 1.25rem',
      marginTop: 10,
      width: '100%',
      textAlign: 'center',
    },
  },
  rentFlowDescription: {
    color: midBlack,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
    fontWeight: 'normal',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
      padding: '0 1.25rem',
    },
  },

  bookingSection: {
    backgroundImage: 'url("/images/grayish-background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: 120,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 60,
    },
  },
  bookingCarousel: {
    position: 'relative',
    overflowX: 'hidden',
  },
  bookingNavigationIconWrap: {
    ...boxShadow,
    height: 90,
    width: 90,
    transform: 'scaleX(-1)',
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: 'calc(50% - 2.8rem)',
    zIndex: 9,
    [theme.breakpoints.down('xs')]: {
      height: 40,
      width: 40,
      borderRadius: 20,
      top: 'calc(50% - 1.25rem)',
      background: primary,
    },
  },
  bookingNavigationRight: {
    paddingRight: 10,
    right: 25,
    [theme.breakpoints.down('xs')]: {
      right: 0,
      padding: 0,
    },
  },
  bookingNavigationLeft: {
    paddingLeft: 5,
    left: 25,
    [theme.breakpoints.down('xs')]: {
      left: 0,
      padding: 0,
    },
  },
  bookingNavigationIcon: {
    [theme.breakpoints.down('xs')]: {
      width: 12,
    },
  },
  bookingItemsWrap: {
    width: '100%',
    flex: 'none',
    alignItems: 'flex-start',
  },
  bookingItem: {
    flex: '1 0 20%',
    [theme.breakpoints.down('md')]: {
      flex: '1 0 25%',
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 0 33.333%',
    },
    [theme.breakpoints.down('xs')]: {
      flex: 'none',
      width: '100vw',
      paddingTop: 50,
      opacity: '1 !important',
    },
  },
  bookingItemTitle: {
    color: black,
    fontSize: 26,
    fontWeight: 500,
    letterSpacing: 0.24,
    lineHeight: '2.1rem',
    textAlign: 'center',
  },
  bookingItemDescription: {
    color: primary,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.3rem',
    textAlign: 'center',
  },
  bookingItemImage: {
    height: 120,
    margin: '1.875rem auto',
  },
  bookingItemModel: {
    color: black,
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: 0.21,
    lineHeight: '1.875rem',
  },
  bookingItemPriceTag: {
    color: primary,
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.15,
    marginBottom: 15,
  },
  bookingItemPrice: {
    fontSize: 30,
    letterSpacing: 0.28,
  },

  benefitsSectionContainer: {
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
    },
  },
  benefitsSection: {
    paddingLeft: 25,
    paddingRight: 25,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 40,
    },
  },
  benefitsColumn: {
    [theme.breakpoints.between('xs', 'md')]: {
      padding: '0 0.625rem !important',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1.25rem !important',
    },
  },
  benefitIcon: {
    width: 60,
    height: 60,
  },
  benefitTitle: {
    color: offBlack,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '2.4rem',
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 25,
      whiteSpace: 'unset',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  benefitSubtitle: {
    color: midBlack,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
    marginTop: 22,
    marginBottom: 60,
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
      marginLeft: 25,
      marginTop: 20,
      marginBottom: 30,
      whiteSpace: 'unset',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      fontSize: 15,
    },
  },
});
