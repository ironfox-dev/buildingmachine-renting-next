import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  grid: {
    display: 'grid',
    gridRowGap: '1rem',
    gridColumnGap: '2%',
    gridTemplateColumns: 'repeat(6, 15%)',
  },

  header: {
    gridColumn: '1 / -1',
    marginTop: '1rem',
    fontSize: '1.8rem',
  },

  copyAddress: {
    gridColumn: '1 / -1',
    fontSize: '1rem',
    cursor: 'pointer',
  },

  info: {
    gridColumn: '1 / -1',
  },

  button: {
    gridColumn: '1 / 2',
    margin: '1rem 0',

    '& .MuiButton-label': {
      color: 'white',
    },
  },
});
