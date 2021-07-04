import { makeStyles, Theme } from '@material-ui/core';
import { lightOrange } from '~/constants/colors';

export default makeStyles((theme: Theme) => ({
  paper: {
    padding: '0.5rem 1.3rem',
    position: 'relative',
    margin: theme.spacing(3),
  },
  noPaddingPaper: {
    position: 'relative',
    margin: theme.spacing(3),
  },
  discountSection: {
    padding: '0.5rem 1.3rem',
    borderRadius: 0,
  },
  goBackButton: {
    marginTop: 7,
    color: lightOrange,
    fontSize: 16,
  },
  goBackText: {
    color: lightOrange,
    marginLeft: 15,
  },
  discountRow: {
    marginBottom: 10,
  },
  detailsRow: {
    marginTop: '1rem',
  },
  detailItem: {
    flex: 1,
  },
  editButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  done: {
    color: '#f5eae2',
    backgroundColor: '#efa36b',
    padding: '2px 6px',
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 3,
    fontSize: 12,
    width: 'min-content',
  },
  canceled: {
    backgroundColor: '#ebebeb',
    color: '#595858',
    padding: '1px 5px',
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 3,
    fontSize: 12,
    width: 'min-content',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
