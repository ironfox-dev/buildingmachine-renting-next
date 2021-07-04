import { makeStyles } from '@material-ui/core/styles';
import { white } from '~/constants/colors';

export default makeStyles({
  content: {
    backgroundColor: white,
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    borderRadius: 2,
    padding: '1rem 1.5625rem',
    marginBottom: '1.375rem',
  },
  titleContent: {
    marginBottom: '1.5rem',
  },
});
