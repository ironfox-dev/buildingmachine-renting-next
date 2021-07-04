import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(() =>
  createStyles({
    tabs: {
      backgroundColor: '#333',
    },
    tab: {
      color: 'white',
    },
    tabPanel: {
      padding: 0,
      marginTop: 25,
    },
  })
);
