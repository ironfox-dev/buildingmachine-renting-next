import { makeStyles } from '@material-ui/core/styles';
import { black } from '~/constants/colors';

export default makeStyles({
  actionBar: {
    padding: '2rem 0',
    backgroundColor: black,
  },

  notFound: {
    margin: '1rem 2% 3rem',
  },

  link: {
    fontSize: '1.2rem',
    cursor: 'pointer',
  },

  header: {
    margin: '1rem 10% 0',
    fontSize: '2rem',
    textAlign: 'center',
  },
});
