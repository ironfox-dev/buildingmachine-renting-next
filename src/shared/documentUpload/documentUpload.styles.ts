import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    position: 'relative',
  },
  dropArea: {
    width: '100%',
    maxHeight: '200px',
    height: '200px',
    border: '3px dashed grey',
    backgroundColor: 'lightgrey',
    cursor: 'pointer',
  },
  plus: {
    textAlign: 'center',
    fontSize: 90,
  },
  dragActive: {
    margin: 'auto',
  },
  fileExist: {
    padding: '20px',
    margin: 'auto',
  },

  documentUploadDropdownWrap: {
    marginTop: 15,
  },
  documentUploadDropdown: {
    flexGrow: 1,
  },
  documentUploadBtn: {
    marginLeft: 15,
  },
});
