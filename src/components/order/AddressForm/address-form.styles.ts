import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  popper: {
    minWidth: '300px',
  },

  address: {
    gridColumn: '1 / 4',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },

  zipCode: {
    gridColumn: '4 / 5',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 3',
    },
  },

  city: {
    gridColumn: '5 / -1',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '-1 / 3',
      marginLeft: 10,
      marginRight: -5,
    },
  },

  country: {
    gridColumn: '1 / 4',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 8',
    },
  },
});
