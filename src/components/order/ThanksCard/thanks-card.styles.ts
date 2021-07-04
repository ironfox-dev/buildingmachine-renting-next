import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  card: {
    width: '60%',
    margin: '2rem auto 1rem',
    padding: '2rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
    },
  },

  grid: {
    '& > *': {
      marginBottom: '1.4rem',
    },
  },

  button: {
    '& .MuiButton-label': {
      color: 'white',
    },
  },

  note: {
    color: 'grey',
  },
});
