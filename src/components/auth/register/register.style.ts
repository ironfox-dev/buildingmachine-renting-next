import { createStyles } from '@material-ui/core';
import theme from '../../../layouts/theme';

const regStyle = createStyles({
  regHeader: {
    textAlign: 'center',
    height: '2.7rem',
    color: theme.palette.grey[800],
    fontFamily: 'Helvetica',
    fontSize: '2.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.34px',
    lineHeight: '2.7rem',
    margin: '2.1rem auto 3.4rem auto',
  },
  checkboxLabel: {
    fontSize: '1.1rem',
    margin: 0,
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
  accountRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '12.5rem',
    height: '2.75rem',
    margin: '2rem 0 2rem 28rem',
    color: theme.palette.background.default,
  },
  gridContainer: {
    padding: '0 1.75rem 2rem 1.75rem',
    flexGrow: 1,
  },
  subTitle: {
    height: '1.5rem',
    color: theme.palette.grey.A400,
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.19px',
    lineHeight: '1.5rem',
    margin: '0 1.75rem 1.75rem 1.75rem',
  },
  radioPanel: {
    marginLeft: '2rem',
    marginBottom: '1.5rem',
  },
  seperateLine: {
    height: 1,
    width: '39.2rem',
    borderWidth: '1px',
    borderStyle: 'solid none none none',
    borderColor: theme.palette.grey[300],
    margin: '0 auto 1.5rem auto',
  },
  lastPanel: {
    width: '80%',
    marginLeft: '7.5rem',
    paddingRight: '3rem',
  },
  iconColor: {
    color: theme.palette.common.black,
  },
  streetPanel: {
    position: 'relative',
  },
  longInputPos: {
    fontSize: '1.1rem',
    marginLeft: '0.8rem',
  },
  shortInputPos: {
    fontSize: '1.1rem',
    marginLeft: '-0.6rem',
  },
  radioDisplay: {
    display: 'block',
  },
  formHelperPos: {
    marginLeft: '0.7rem',
  },
  formPos: {
    marginTop: '1rem',
  },
});

export default regStyle;
