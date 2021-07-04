import { createStyles } from '@material-ui/core/styles';
import theme from '../../layouts/theme';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { boxShadow2 } from '~/constants/commonStyles';

const locationStyle = createStyles({
  //list styles
  mainPanel: {
    padding: '1.25rem 2.5rem',
  },
  titlePara: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    lineHeight: '2.25rem',
    color: theme.palette.grey.A400,
    margin: 0,
    paddingBottom: '1.5rem',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  addButton: {
    fontSize: '1rem',
    fontWeight: 'normal',
    height: '2.75rem',
    width: 'max-content',
    textTransform: 'none',
    color: 'white',
  },
  desktopTable: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileTable: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  paginationPanel: {
    float: 'right',
  },

  //form style
  errorSnackbar: {
    '& div': {
      backgroundColor: red['800'],
    },
  },
  successSnackbar: {
    '& div': {
      backgroundColor: green['800'],
    },
  },
  namePanel: {
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
    ...boxShadow2,
    justifyContent: 'space-between',
  },
  linkPanel: {
    position: 'absolute',
    padding: '1rem 0 0 2rem',
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
    margin: '2.75rem 2rem 1rem 0',
    textTransform: 'none',
  },
  streetPanel: {
    position: 'relative',
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
    top: '4rem',
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
  boxStyle: {
    backgroundColor: 'white',
    ...boxShadow2,
    marginBottom: '1.5rem',
  },
  gridStyle: {
    padding: '1.5rem 0',
  },
  typographyStyle: {
    fontWeight: 'bold',
    color: theme.palette.grey[800],
  },
  operatingTypographyStyle: {
    fontWeight: 'bold',
    color: theme.palette.grey[800],
    paddingBottom: '2rem',
  },
  checkPanel: {
    padding: '2.5rem 0 1.5rem 0',
    display: 'none',
  },
  timeFieldStyle: {
    padding: '0 0.5rem',
    width: '7.25rem',
  },
});

export default locationStyle;
