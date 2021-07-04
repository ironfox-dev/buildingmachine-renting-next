import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  headerProductName: {
    fontWeight: 600,
    fontSize: '1rem',
  },
  headerProductType: {
    fontSize: '0.875rem',
  },
  closeButton: {
    cursor: 'pointer',
    color: '#999',
    '&:hover': {
      color: '#000',
    },
  },
}));
