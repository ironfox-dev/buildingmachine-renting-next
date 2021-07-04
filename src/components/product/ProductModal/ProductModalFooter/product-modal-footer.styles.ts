import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(6),
  },
  container: {
    '& button:nth-child(2)': {
      marginLeft: '2rem',
    },
  },
}));
