import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  cardContent: {
    '&:last-child': {
      paddingBottom: '1rem',
    },
  },

  item: {
    width: 'auto',
    minWidth: '50%',
  },

  icon: {
    margin: '0 0.4rem',
  },
});
