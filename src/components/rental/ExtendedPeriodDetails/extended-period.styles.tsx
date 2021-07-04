import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  detail: {
    width: 'auto',
    margin: '1rem 2rem 0 0',

    '& label': {
      color: 'grey',
    },
  },

  divider: {
    margin: '1rem 0',
  },

  periodTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  totalSum: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  button: {
    margin: '1.2rem 0 0.2rem 0',

    '& .MuiButton-label': {
      color: 'white',
    },
  },
});
