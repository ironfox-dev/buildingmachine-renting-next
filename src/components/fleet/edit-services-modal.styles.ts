import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    paper: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      marginRight: '50px',
    },
    form: {
      marginBottom: '50px',
    },
  });

export default styles;
