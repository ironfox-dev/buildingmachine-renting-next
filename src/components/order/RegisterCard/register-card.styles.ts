import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  header: {
    gridColumn: '1 / -1',
    marginTop: '1rem',
    fontSize: '1.8rem',
  },

  card: {
    gridColumn: '1 / -1',
    padding: '1rem',
    paddingTop: 0,
  },

  subHeader: {
    margin: '1rem 0',
  },

  checkIcon: {
    marginRight: '0.6rem',
  },

  password: {
    width: '50%',
  },

  link: {
    display: 'block',
    margin: '1rem 0',
    fontSize: '1rem',
    cursor: 'pointer',
  },
});
