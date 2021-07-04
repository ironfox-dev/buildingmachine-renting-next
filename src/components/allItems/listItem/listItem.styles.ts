import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    height: '50px',
    borderTop: '1px solid lightgrey',
  },
  column: {
    flexBasis: '200px',
    padding: '10px',
  },
  nameEdit: {
    '& input': {
      maxHeight: '30px',
      padding: '5px 10px',
    },
  },
  previewFile: {
    alignSelf: 'center',
    width: '160px',
    height: '35px',
    background: 'lightgrey',
  },
  deleteIcon: {
    cursor: 'pointer',
  },
});
