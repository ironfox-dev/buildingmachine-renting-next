import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export default makeStyles({
  section: {
    width: '100%',
    marginBottom: '2rem',
  },

  datePicker: {
    width: '40%',
    marginRight: '1rem',
  },

  availability: {
    width: 'initial',
  },

  pricePlaceholder: {
    fontStyle: 'italic',
  },

  divider: {
    margin: '1.2rem 0 2rem',
  },

  totalSum: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  button: {
    margin: '2rem 0 1rem 0',

    '& .MuiButton-label': {
      color: 'white',
    },
  },

  checkIcon: {
    color: green[500],
  },

  crossIcon: {
    color: red[500],
  },
});
