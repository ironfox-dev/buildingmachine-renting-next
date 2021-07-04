import { createStyles } from '@material-ui/core';
import { midBlack, white } from '~/constants/colors';
import theme from '~/layouts/theme';

export default createStyles({
  content: {
    backgroundImage: 'none',
    borderBottom: 'none',
    whiteSpace: 'break-spaces',
    paddingBottom: 0,
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
  mainContainer: {
    backgroundColor: white,
    paddingBottom: 100,
  },
  digitalPartnerContainer: {
    backgroundColor: white,
    padding: '7rem 0',
    [theme.breakpoints.down('md')]: {
      padding: '5rem 0',
    },
  },
  digitalPartnerImage: {
    width: '100%',
  },
  digitalPartnerTitle: {
    fontSize: 42,
    lineHeight: '3.4rem',
    letterSpacing: 0.39,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 36,
    },
  },
  digitalPartnerDescription: {
    marginTop: 42,
    fontSize: 18,
    lineHeight: '1.4rem',
    letterSpacing: 0.17,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  freeConsultation: {
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  ourMissionContainer: {
    width: '100%',
    boxShadow: 'inset 0 0 0 1000px rgb(13 13 15 / 78%)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/images/excavator-background.jpg)',
    color: white,
    padding: '7.938rem 0 20.75rem 0',
    [theme.breakpoints.down('md')]: {
      padding: '7.938rem 0 20.75rem 0',
    },
  },
  ourMissionTitle: {
    fontSize: 42,
    lineHeight: '3.438rem',
    letterSpacing: 0.39,
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  ourMissionDescription: {
    fontSize: 36,
    lineHeight: '2.938rem',
    letterSpacing: 0.34,
    marginTop: 55,
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  foundingCard: {
    width: '100%',
    borderRadius: 5,
    boxShadow: '1px 1px 3px #999999',
    display: 'flex',
    flexDirection: 'column',
    padding: '2.5rem 3.313rem',
    marginTop: '-11.875rem',
    backgroundColor: white,
  },
  founderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 35,
    },
  },
  foundingTitle: {
    fontSize: 42,
    lineHeight: '3.438rem',
    letterSpacing: 0.39,
    fontWeight: 500,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  foundersWrapper: {
    marginTop: 57,
  },
  founderAvatar: {
    width: 200,
    height: 200,
  },
  founderInfoContainer: {
    marginLeft: 25,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginLeft: 0,
      marginTop: 30,
    },
  },
  founderName: {
    fontSize: 30,
    lineHeight: '2.438rem',
    letterSpacing: 0.28,
    fontWeight: 500,
  },
  founderInfo: {
    marginTop: 15,
    fontSize: 18,
    lineHeight: '1.5rem',
    letterSpacing: 0.17,
    color: midBlack,
  },
  founderContactIcon: {
    marginTop: 19,
  },
  iconButtonLinks: {
    color: midBlack,
    marginRight: 10,
  },
  companyDescTitle: {
    marginTop: 90,
    fontSize: 42,
    lineHeight: '3.438rem',
    letterSpacing: 0.39,
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  companyDescSectionRow: {
    marginTop: 119,
  },
  companyDescBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  },
  companyDescText: {
    fontSize: 18,
    lineHeight: '1.5rem',
    letterSpacing: 0.17,
    fontWeight: 400,
    marginTop: 38,
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  companyDescButton: {
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  workingAtImage: {
    width: '100%',
  },
  workingAtTitle: {
    marginTop: 90,
    fontSize: 42,
    lineHeight: '3.438rem',
    letterSpacing: 0.39,
    fontWeight: 500,
    alignSelf: 'flex-start',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  linkButtons: {
    textDecoration: 'none',
    alignSelf: 'start',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
    },
  },
});
