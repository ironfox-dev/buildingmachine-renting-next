import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  options: {
    gridColumn: '1 / -1',
  },

  deliveryPrice: {
    marginLeft: '0.6rem',
    fontSize: '0.8rem',
  },

  location: {
    gridColumn: '1 / -1',
  },

  startTimePicker: {
    gridColumn: '1 / 2',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 4',
    },
  },

  startDate: {
    gridColumn: '2 / 3',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '6 / 5',
      marginTop: -15,
    },
  },

  endTimePicker: {
    gridColumn: '4 / 5',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 4',
    },
  },

  endDate: {
    gridColumn: '5 / 7',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '6 / 5',
      marginTop: -15,
    },
  },
});
