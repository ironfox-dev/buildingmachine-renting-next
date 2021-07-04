import { makeStyles } from '@material-ui/core/styles';
import { primary } from '~/constants/colors';
import theme from '~/layouts/theme';

export default makeStyles({
  discountCodeWrap: {
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 4,
    border: '1px solid #E0DFDF',
    height: 61,
    width: '100%',
  },
  discountCodeInputWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: '0 10px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  discountCodeSubmitBtn: {
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: -1,
    marginRight: -1,
    cursor: 'pointer',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
  activeSubmitBtn: {
    backgroundColor: primary,
    color: '#FFF',
  },
  inactiveSubmitBtn: {
    backgroundColor: '#F3F1F0',
    color: '#D7D7D7',
  },
  cancelBtn: {
    '& span': {
      paddingLeft: 8,
      paddingRight: 8,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        width: 40,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      width: 40,
    },
  },
});
