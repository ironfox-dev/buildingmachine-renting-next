import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  detail: {
    width: 'auto',
    margin: '1rem 2rem 0 0',

    '& label': {
      color: 'grey',
    },
  },
  divider: {
    margin: '1.2rem 0',
  },

  buttonsRow: {
    marginTop: 15,
  },
  applyDiscountBtn: {
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: '20px',
    textTransform: 'capitalize',
  },
});
