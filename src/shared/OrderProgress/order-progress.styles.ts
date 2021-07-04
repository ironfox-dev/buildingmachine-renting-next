import { makeStyles } from '@material-ui/core/styles';
import { black, primary, white } from '~/constants/colors';
import theme from '~/layouts/theme';

export default makeStyles({
  root: {
    background: black,
    padding: '28px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '12px 0',
    },
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:last-child': {
      marginRight: '0',
    },
    opacity: '0.7',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  orderItemActive: {
    opacity: '1',
  },
  orderItemCrumb: {
    color: white,
    borderRadius: '50%',
    border: '2px solid',
    borderColor: white,
    background: black,
    marginRight: '5px',
    position: 'relative',
    padding: '12px 12px',
  },
  orderItemCrumbPassed: {
    background: primary,
  },
  orderItemName: {
    color: white,
    [theme.breakpoints.down('xs')]: {
      marginTop: 5,
    },
  },
  orderItemValue: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  orderItemValueNumber: {
    width: 24,
    height: 24,
    lineHeight: '24px',
    textAlign: 'center',
  },
});
