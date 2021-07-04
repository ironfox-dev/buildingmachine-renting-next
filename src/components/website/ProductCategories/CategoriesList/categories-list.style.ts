import { makeStyles } from '@material-ui/core/styles';
import { primary } from '~/constants/colors';

export default makeStyles({
  container: {
    padding: '0 2%',
  },

  header: {
    width: '100%',
    margin: '1rem 0 3rem',
    fontSize: '3.4rem',
    fontWeight: 400,
    textAlign: 'center',
  },

  typeItem: {
    width: '24rem',
    padding: '1rem 2rem',
    marginBottom: '5rem',
    cursor: 'pointer',
    '&:hover': {
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);',
    },
  },

  image: {
    height: '12rem',
    marginBottom: '2rem',
  },

  typeName: {
    fontSize: '1.4rem',
    fontWeight: 500,
  },

  typePrice: {
    fontSize: '1rem',
    color: primary,
    fontWeight: 500,
    '& span': {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },

  typeCount: {
    fontSize: '1rem',
    width: '100%',
  },
});
