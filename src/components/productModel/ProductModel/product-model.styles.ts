import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  subHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerWrapper: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 3,
    padding: 15,
    outline: 0,
    overflow: 'scroll',
    maxHeight: 'calc(100vh - 60px)',
    marginTop: 30,
    marginBottom: 30,
  },
  modalTitle: {
    padding: '0.5rem 1.75rem 1rem',
  },
  closeButton: {
    cursor: 'pointer',
    color: '#999',
    '&:hover': {
      color: '#000',
    },
  },
  titleSection: {
    paddingRight: 30,
    marginBottom: 10,
  },
  title: {
    padding: '0 1.75rem 0.7rem',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
