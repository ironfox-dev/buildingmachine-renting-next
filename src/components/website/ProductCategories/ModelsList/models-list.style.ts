import { makeStyles } from '@material-ui/core/styles';
import { primary, secondary } from '~/constants/colors';

export default makeStyles({
  container: {
    padding: '0 2%',
  },

  header: {
    width: '100%',
    margin: '1rem 0 3rem 2%',
    fontSize: '2rem',
    fontWeight: 400,
  },

  modelItem: {
    width: '28rem',
    padding: '1rem 2rem',
    marginBottom: '5rem',
  },

  image: {
    height: '12rem',
    marginBottom: '2rem',
  },

  modelName: {
    marginRight: '1rem',
    fontSize: '1.4rem',
    fontWeight: 500,
  },

  modelPrice: {
    fontSize: '1rem',
    color: primary,
    fontWeight: 500,
    '& span': {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },

  actionRow: {
    margin: '1rem 0',
  },

  typeName: {
    fontSize: '1rem',
    color: primary,
  },

  accessories: {
    width: '100%',
    color: secondary,
  },
});
