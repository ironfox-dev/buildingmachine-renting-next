import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export default makeStyles({
  error: {
    '& div': {
      backgroundColor: red['800'],
    },
  },

  success: {
    '& div': {
      backgroundColor: green['800'],
    },
  },
});
