import { createStyles } from '@material-ui/core/styles';
import { boxShadow2 } from '~/constants/commonStyles';
import theme from '~/layouts/theme';

const accountStyle = createStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  pointer: {
    cursor: 'pointer',
  },
  fullWidth: {
    width: '100%',
  },
  placeSuggestionsContainer: {
    background: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    position: 'absolute',
    borderRadius: 4,
    cursor: 'pointer',
    zIndex: 9999,
    width: '100%',
    top: '4.56rem',
  },
  placeSuggestion: {
    color: theme.palette.common.black,
    padding: '0.3rem 0.625rem',
  },
  activePlaceSuggestion: {
    color: theme.palette.grey.A400,
    padding: '0.3rem 0.625rem',
    background: theme.palette.grey.A200,
  },
  loadingSuggestions: {
    padding: '0.3rem 0.625rem',
  },
  namePanel: {
    display: 'flex',
    backgroundColor: 'white',
    ...boxShadow2,
    justifyContent: 'space-between',
  },
  namePara: {
    color: theme.palette.grey[800],
    fontSize: '1.625rem',
    fontWeight: 'bold',
    lineHeight: '1.875rem',
    letterSpacing: '0.24px',
    padding: '3.3rem 0 2.3rem 2.25rem',
    margin: 0,
  },
  updateButton: {
    width: '7.5rem',
    height: '2.75rem',
    margin: '2.75rem 4.375rem 0 0',
    textTransform: 'none',
  },
  dataPanel: {
    backgroundColor: 'white',
    margin: '2.5rem 3rem 1.5rem 2.1rem',
    padding: '1.2rem 1.4rem 2rem 1.7rem',
    ...boxShadow2,
  },
  infoPara: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    lineHeight: '1.5rem',
    color: theme.palette.grey.A400,
    paddingBottom: '2.3rem',
    margin: 0,
  },
  radioPanel: {
    marginBottom: '2rem',
  },
  radioDisplay: {
    display: 'block',
  },
  shortInputPos: {
    fontSize: '1.1rem',
  },
  shortInputComponent: {
    width: '32%',
    marginRight: '4%',
  },
  phoneField: {
    width: '64%',
  },
  iconColor: {
    color: 'black',
  },
  passwordPanel: {
    backgroundColor: 'white',
    margin: '1.5rem 3rem 1.5rem 2.1rem',
    padding: '1.2rem 1.4rem 2rem 1.7rem',
    ...boxShadow2,
  },
  passwordPara: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    lineHeight: '1.5rem',
    color: theme.palette.grey.A400,
    paddingBottom: '1.5rem',
    margin: 0,
  },
  passwordButton: {
    height: '2.75rem',
    marginBottom: '1.5rem',
    textTransform: 'none',
  },
});

export default accountStyle;
