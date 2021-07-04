import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  divider: {
    margin: '1rem 0',
  },

  totalSum: {
    marginBottom: '2rem',
    fontWeight: 'bold',
  },

  checkboxContainer: {
    marginBottom: '1rem',
  },

  checkbox: {
    padding: 0,
    marginRight: '0.6rem',
  },

  button: {
    marginTop: '1rem',

    '& .MuiButton-label': {
      color: 'white',
    },
  },
  modelImage: {
    maxHeight: 70,
    minWidth: 60,
    marginRight: 20,
  },
});
