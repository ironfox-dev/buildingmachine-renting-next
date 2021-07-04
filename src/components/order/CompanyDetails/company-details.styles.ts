import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  header: {
    gridColumn: '1 / -1',
    marginTop: '1rem',
    fontSize: '1.8rem',
  },

  companyName: {
    gridColumn: '1 / -1',
  },

  gender: {
    gridColumn: '1 / 4',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },

  firstName: {
    gridColumn: '1 / 4',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },

  lastName: {
    gridColumn: '4 / -1',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },

  email: {
    gridColumn: '1 / 4',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },

  phoneCode: {
    gridColumn: '4 / 5',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 3',
    },
  },

  phoneNumber: {
    gridColumn: '5 / -1',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '-1 / 3',
      marginLeft: 10,
      marginRight: -5,
    },
  },
});
