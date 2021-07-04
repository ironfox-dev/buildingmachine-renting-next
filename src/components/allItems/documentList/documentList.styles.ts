import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  content: {
    boxShadow: '1px 1px 5px 1px grey',
  },
  title: {
    display: 'flex',
    fontSize: '20px',
    fontWeight: 'bold' as const,
  },
  columnsRow: {
    display: 'flex',
  },
  columnTitle: {
    fontSize: '15px',
  },
  column: {
    fontSize: '14px',
    flexBasis: '200px',
    margin: '10px',
    color: 'lightgrey',
  },
  fileDropSection: {
    padding: '10px',
  },
  dropdownInner: {
    width: '200px',
  },
  saveBtn: {
    width: '200px',
    marginLeft: '10px',
    background: 'lightgreen',
  },
  fileDropWrapper: {
    marginTop: '10px',
    width: '410px',
  },
  applyBtn: {
    marginLeft: '10px',
    background: 'lightgreen',
  },
  deleteIcon: {
    width: '40px',
  },
  previewFile: {
    alignSelf: 'center',
    width: '160px',
    height: '35px',
    background: 'lightgrey',
  },
});
