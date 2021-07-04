import { createStyles } from '@material-ui/core';
import { boxShadow2, boxShadow3 } from '~/constants/commonStyles';
import { black, primary, offBlack, midBlack } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  content: {
    backgroundImage: 'none',
    borderBottom: 'none',
    whiteSpace: 'break-spaces',
  },
  mainSubtitle: {
    padding: '0 12.5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0 1.18rem',
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
      textAlign: 'center',
    },
  },
  secondaryTitle: {
    fontSize: 42,
    fontWeight: 500,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    marginBottom: 70,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      fontWeight: 500,
      letterSpacing: 0.34,
      lineHeight: '2.625rem',
    },
  },

  diversitySection: {
    color: '#fff',
    boxShadow: 'inset 0 0 0 62.5rem rgba(13, 13, 15, 0.78)',
    backgroundImage: 'url("/images/flexcavo-team.jpg")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      backgroundPositionX: '75%',
      boxShadow: 'unset',
    },
  },
  diversitySectionContainer: {
    paddingTop: 260,
    paddingBottom: 210,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 60,
      background: 'linear-gradient(270deg, rgb(0,1, 23, 0.6) 0%, rgba(0,1,23,0.27) 100%)',
    },
  },
  diversityTitle: {
    fontSize: 42,
    letterSpacing: 0.39,
    lineHeight: '3.438rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: 0.3,
      lineHeight: '2.625rem',
      textAlign: 'center',
    },
  },
  diversitySubtitle: {
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 30,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: '1.25rem',
    },
  },
  diversityButton: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
      display: 'block',
    },
  },

  cultureValuesSection: {
    borderBottom: `16px solid ${primary}`,
    padding: '4.375rem 0',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
      paddingBottom: 0,
    },
  },
  cultureValueTitle: {
    color: offBlack,
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: 0.21,
    lineHeight: '1.8rem',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  cultureValueSubtitle: {
    color: midBlack,
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: '1.5rem',
    textAlign: 'center',
    padding: '0 1.875rem',
    marginBottom: 40,
  },

  teamsSection: {
    backgroundImage: 'url("/images/grayish-background.png")',
    paddingTop: 55,
    paddingBottom: 240,
  },
  teamsBlock: {
    padding: 40,
    marginBottom: 40,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    ...boxShadow2,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 20,
    },
  },
  teamsTitle: {
    color: offBlack,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '2.438rem',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      letterSpacing: 0.21,
      lineHeight: '1.8rem',
    },
  },
  teamsDescription: {
    color: black,
    fontSize: 18,
    letterSpacing: '0.011rem',
    lineHeight: '1.5rem',
  },

  yourContactBox: {
    padding: '2.5rem 0.625rem',
    maxWidth: 600,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    margin: '-10rem auto 4.688rem',
    ...boxShadow2,
  },
  yourContactTitle: {
    color: offBlack,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.28,
    lineHeight: '2.438rem',
    textAlign: 'center',
    marginBottom: 32,
  },
  yourContactAvatar: {
    width: 150,
    height: 150,
    marginBottom: 60,
  },
  yourContactDetailsColumn: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingBottom: 40,
      marginTop: -50,
    },
  },
  yourContactDetails: {
    color: midBlack,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.5rem',
  },
  yourContactEmail: {
    color: primary,
  },
  yourContactSubtitle: {
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 500,
  },
  yourContactDescription: {
    marginBottom: 18,
  },

  hiringTitle: {
    color: offBlack,
    marginBottom: 24,
    textAlign: 'center',
  },
  hiringSubtitle: {
    color: midBlack,
    whiteSpace: 'break-spaces',
    textAlign: 'center',
  },

  jobsSection: {
    paddingTop: 10,
    paddingBottom: 60,

    '& .bzOpeningsList': {
      margin: 0,
      padding: 0,
    },
    '& .bzOpening': {
      ...boxShadow2,
      listStyle: 'none',
      padding: '28px 16px 28px 20px',
      borderRadius: 8,
      marginBottom: 16,
      backgroundColor: '#fff',
      position: 'relative',

      '& a': {
        textDecoration: 'none',
        cursor: 'pointer',
        '& h2': {
          color: '#303446',
          fontSize: 18,
          fontWeight: 500,
          marginBottom: 9,
          marginTop: 0,
          paddingRight: 110,
        },
        '& .bzMeta': {
          padding: 0,
          listStyle: 'none',
          paddingRight: 110,
          '& li': {
            display: 'inline-block',
            color: '#8f9cb2',
            paddingRight: 16,
            paddingLeft: 8,
          },
        },
        '& button.bzButtonApply': {
          ...boxShadow3,
          position: 'absolute',
          right: 30,
          top: 'calc(50% - 17.5px)',
          cursor: 'pointer',
          borderRadius: 2,
          height: 35,
          width: 80,
          border: 'none',
          backgroundColor: primary,

          color: '#FFFFFF',
          fontSize: 16,
          letterSpacing: 0.15,
          lineHeight: '20px',
          textAlign: 'center',
        },
      },
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  logoImage: {
    width: '60%',
  },
});
