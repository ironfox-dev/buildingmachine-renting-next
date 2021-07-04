import { createStyles } from '@material-ui/core';
import { black, primary, offBlack, midBlack } from '~/constants/colors';
import { boxShadow } from '~/constants/commonStyles';
import theme from '~/layouts/theme';

export default createStyles({
  content: {
    backgroundColor: black,
    borderBottom: `1rem solid ${primary}`,
    position: 'relative',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundImage: 'url("/images/excavators-outlines-bg@2x.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },
  orangeTriangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 0 1rem 1rem',
    borderColor: `transparent transparent ${primary} transparent`,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  mainTitle1: {
    color: '#fff',
    fontSize: 66,
    fontWeight: 500,
    letterSpacing: 0.62,
    lineHeight: '3.625rem',
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: 42,
    },
  },
  mainTitle2: {
    color: primary,
  },
  subtitle: {
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.438rem',
    textAlign: 'center',
    color: '#fff',
    marginTop: 40,
    marginBottom: 45,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  categoriesSection: {
    ...boxShadow,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  categoriesWrap: {
    padding: '1.875rem 0',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  categoryWrap: {
    cursor: 'pointer',
    borderRight: '1px solid #E4E4E4',
    [theme.breakpoints.down('xs')]: {
      padding: '0 0.938rem',
    },
    '&:last-child > div': {
      border: 'none !important',
    },
  },
  category: {
    padding: 0,
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      borderRight: 'none',
      borderBottom: '1px solid #E4E4E4',
      padding: '1.875rem 0',
    },
  },
  categoryImage: {
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: 50,
      height: 'unset',
      marginRight: 20,
    },
  },
  categoryName: {
    textAlign: 'center',
    color: black,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 0.17,
    lineHeight: '1.438rem',
    marginTop: 25,
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  viewAllCategories: {
    color: primary,
    fontSize: 18,
    fontWeight: 300,
    letterSpacing: 0.17,
    lineHeight: '1.438rem',
    textAlign: 'center',
    cursor: 'pointer',
    margin: 0,
  },

  grayBackgroundSection: {
    backgroundImage: 'url("/images/grayish-background.png")',
    paddingBottom: 110,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 70,
    },
  },
  bestSellersTitle: {
    margin: '3.125rem 0',
    textAlign: 'center',
    color: black,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      lineHeight: '3rem',
      margin: '1.875rem 0 0.938rem',
    },
  },
  bestSellersContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  bestSellersWrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  bestSellers: {
    marginBottom: 30,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  bestSellersIconWrap: {
    height: 40,
    width: 40,
    borderRadius: 45,
    backgroundColor: primary,
    position: 'absolute',
    top: 'calc(50% - 2.8rem)',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...boxShadow,
  },
  bestSellersRightIconWrap: {
    left: 'unset',
    right: 0,
  },
  bestSellersIcon: {
    width: 12,
    color: '#fff',
  },
  bestSellerItem: {
    padding: 15,
    flex: '1 0 33.333%',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.25rem',
      width: '100vw',
      flex: 1,
    },
  },
  bestSellerItemImage: {
    marginBottom: 30,
    height: 228,
  },
  bestSellerItemTitleRow: {
    marginBottom: 16,
  },
  bestSellerItemTitle: {
    color: black,
    fontSize: 26,
    fontWeight: 500,
    letterSpacing: 0.24,
    lineHeight: '2rem',
  },
  bestSellerItemDetailsRow: {
    marginBottom: 10,
  },
  bestSellerItemPriceTag: {
    color: primary,
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.15,
    textAlign: 'right',
  },
  bestSellerItemPrice: {
    fontSize: 24,
    letterSpacing: 0.28,
  },
  bestSellerItemNote: {
    marginTop: 32,
    textAlign: 'center',
    color: '#726F6F',
    fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: '1.2rem',
    fontWeight: 300,
  },

  rentEasilyTextSection: {
    paddingLeft: 100,
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  rentEasilyTitle: {
    color: offBlack,
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.4rem',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      letterSpacing: 0.34,
      lineHeight: '3rem',
      textAlign: 'center',
    },
  },
  rentEasilyParagraph: {
    color: midBlack,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.43rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.25rem',
    },
  },
  deviceMockupContainer: {
    position: 'relative',
    paddingBottom: '33%',
    height: 0,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '56.25%',
      marginTop: 35,
    },
  },
  devicesMockups: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  quotesSection: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%)',
    padding: '6.25rem 0 3.125rem',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  quoteIconWrap: {
    ...boxShadow,
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: primary,
    position: 'absolute',
    top: -45,
    left: 'calc(50% - 2.8rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteIcon: {
    width: 38,
  },
  quoteButton: {
    cursor: 'pointer',
  },
  quoteButtonIcon: {
    [theme.breakpoints.down('xs')]: {
      width: 12,
    },
  },
  quoteButtonIconRight: {
    [theme.breakpoints.down('xs')]: {
      float: 'right',
    },
  },
  quoteText: {
    color: '#676767',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 500,
    letterSpacing: 0.34,
    padding: '0 2.5rem',
    lineHeight: '2.9375rem',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
      letterSpacing: 0.3,
      lineHeight: '2.375rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 12,
      padding: 0,
      fontSize: 26,
      letterSpacing: 0.24,
      lineHeight: '2.125rem',
    },
  },
  quoteOwner: {
    color: primary,
    fontSize: 20,
    letterSpacing: 0.19,
    lineHeight: '1.5rem',
    paddingLeft: 40,
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.25rem',
    },
  },
  partnersWrap: {
    maxWidth: 800,
    margin: '2.188rem auto 1.25rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1.25rem 2.5rem 0',
      margin: '0 auto',
    },
  },
  partnerLogo: {
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80%',
      margin: '0.625rem auto',
    },
  },
});
