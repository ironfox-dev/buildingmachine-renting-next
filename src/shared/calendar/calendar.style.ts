import { createStyles } from '@material-ui/core';
import theme from '../../layouts/theme';

const calendarStyle = createStyles({
  header: {
    textAlign: 'center',
  },
  headerDate: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  iconButton: {
    minWidth: 0,
    height: '2rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cellStyle: {
    padding: '1rem 0',
    borderStyle: 'none',
    textAlign: 'center',
    cursor: 'pointer',
  },
});

export default calendarStyle;
