import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  content: {
    boxShadow: '1px 1px 5px 1px grey',
    marginBottom: 30,
  },
  title: {
    display: 'flex',
    fontSize: '22px',
    fontWeight: 'bold' as const,
    marginTop: 5,
    marginBottom: 15,
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
  cellLabel: {
    color: '#8a8a8a',
    fontSize: 14,
    fontWeight: 500,
  },
  cellValue: {
    fontSize: '18px',
    color: 'black',
  },
  partTitle: {
    fontSize: '18px',
    color: 'black',
    fontWeight: 'bold' as const,
    margin: '10px 0',
  },
});
