import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  root: {
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#eee',
    display: 'flex',
  },

  card: {
    padding: '1rem 3%',
    borderRadius: 0,
    height: '100%',
  },

  rightCard: {
    margin: '2rem 3%',
    padding: '0.8rem',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      boxShadow: 'unset',
      borderRadius: 'unset',
    },
  },

  link: {
    fontSize: '1rem',
    cursor: 'pointer',
  },

  header: {
    fontSize: '2.3rem',
    fontWeight: 500,
  },

  subheader: {
    margin: '2rem 0 1rem',
    fontSize: '1.8rem',
  },

  modelImage: {
    maxHeight: '440px',
    maxWidth: '100%',
  },

  modelImageContainer: {
    marginTop: 50,
  },
});
