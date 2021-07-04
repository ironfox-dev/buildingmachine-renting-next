import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerWrapper: {
    backgroundColor: theme.palette.background.default,
    width: '90%',
    borderRadius: 2,
    maxHeight: 'calc(100vh - 60px)',
    padding: '1.625rem',
    outline: 0,
  },
  divider: {
    marginRight: '-1.625rem',
    marginLeft: '-1.625rem',
  },
  stepName: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  stepper: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}));
