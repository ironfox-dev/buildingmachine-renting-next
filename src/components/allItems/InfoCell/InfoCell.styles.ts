import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  label: {
    color: '#8a8a8a',
    fontSize: '14px',
    fontWeight: 500,
    height: '20px',
  },
  value: {
    fontSize: '18px',
    color: 'black',
    minHeight: '25px',
    width: '100%',
  },
  title: {
    fontSize: '18px',
    color: 'black',
    fontWeight: 'bold' as const,
    margin: '10px 0',
    height: '25px',
  },
  input: {
    padding: '0 4px',
    '& .MuiInputBase-input': {
      padding: 0,
    },
    '& .MuiFormHelperText-root': {
      lineHeight: 1,
    },
  },
  selectInput: {
    padding: '0 4px',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: 0,
    },
    '& .MuiFormHelperText-root': {
      lineHeight: 1,
    },
  },
});
