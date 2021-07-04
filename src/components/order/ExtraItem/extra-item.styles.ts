import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../layouts/theme';

export default makeStyles({
  card: {
    marginBottom: '2rem',
    '& .MuiCardContent-root': {
      padding: '1rem 2rem 1rem 1rem',
    },
  },

  checkIconWrapper: {
    width: 'auto',
    margin: '-1rem 1rem -1rem -1rem',

    '&.selected': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  checkIcon: {
    margin: '0 0.4rem',
    color: 'white',
  },

  cardText: {
    flexGrow: 1,
  },

  cardActions: {
    width: 'auto',
    minWidth: '9rem',
    marginLeft: '1rem',
  },
});
