import { makeStyles } from '@material-ui/core/styles';
import theme from '~/layouts/theme';

export default makeStyles({
  label: {
    display: 'inline-block',
    width: '30%',
    [theme.breakpoints.down('xs')]: {
      width: '55%',
    },
  },
});
