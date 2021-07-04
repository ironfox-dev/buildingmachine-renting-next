import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { white, lightGray } from '~/constants/colors';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      boxShadow: '1px 1px 5px 1px grey',
      marginTop: '15px',
      padding: '21px 25px',
      height: '500px',
      backgroundColor: white,
    },
    datePicker: {
      width: 147,
      border: 'none',
      marginRight: 10,
    },
    mapHeader: {
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: 0.19,
      fontWeight: 700,
      marginBottom: 24,
    },
    barChart: {
      marginTop: 20,
      width: '100%',
    },
    mapAddressTitle: {
      fontSize: 16,
      lineHeight: '19px',
      letterSpacing: 0.15,
      fontWeight: 700,
    },
    infoBox: {
      width: 266,
      height: 180,
      padding: 20,
      flexWrap: 'nowrap',
    },
    mapAddress: {
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 0.13,
      marginTop: 7,
    },
    openMapButton: {
      marginLeft: 'auto',
    },
    separator: {
      height: '1px',
      borderTop: `1px solid ${lightGray}`,
      width: '100%',
      margin: '10px 0',
    },
    tooltipSectionTitle: {
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: 0.13,
      fontWeight: 'bold',
    },
    mapContainer: {
      height: '400px',
      width: '100%',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);
