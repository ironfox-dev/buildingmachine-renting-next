import { makeStyles } from '@material-ui/core/styles';
import { white } from '~/constants/colors';

export default makeStyles({
  content: {
    boxShadow: '1px 1px 5px 1px grey',
    marginBottom: 30,
    backgroundColor: white,
    padding: '16px 26px !important',
  },
  title: {
    display: 'flex',
    fontSize: '22px',
    fontWeight: 'bold' as const,
    marginTop: 5,
    marginBottom: 15,
  },
});
