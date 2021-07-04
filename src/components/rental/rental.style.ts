import { createStyles } from '@material-ui/core/styles';
import theme from '../../layouts/theme';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { boxShadow2 } from '~/constants/commonStyles';

const rentalStyle = createStyles({
  titlePanel: {
    display: 'flex',
    backgroundColor: theme.palette.grey[100],
    justifyContent: 'space-between',
  },
  titlePara: {
    color: theme.palette.grey[800],
    fontSize: '1.875rem',
    fontWeight: 'bold',
    lineHeight: '2.2rem',
    letterSpacing: '0.28px',
    padding: '1.25rem 0 0 2.5rem',
    margin: 0,
  },
  bookingButton: {
    width: '12.5rem',
    height: '2.75rem',
    fontSize: '1rem',
    color: 'white',
    margin: '1rem 2.5rem 1.2rem 0',
    textTransform: 'none',
  },
  filterPanel: {
    display: 'flex',
    margin: '0 2.5rem',
    backgroundColor: 'white',
    ...boxShadow2,
  },
  listPanel: {
    margin: '2rem 2.5rem 6.5rem 2.5rem',
    backgroundColor: 'white',
    ...boxShadow2,
  },

  //filter style
  filtersWrapper: {
    height: '2.75rem',
    zIndex: 2,
    position: 'relative',
  },
  filterContent: {
    width: '100%',
  },
  filterTitle: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '1rem',
    margin: '0.8rem 0',
    color: theme.palette.grey[600],
  },
  filterIcon: {
    height: '2.75rem',
  },
  filterBarText: {
    padding: '0.5rem 2rem 0.5rem 1rem',
    margin: '0.25rem 0.2rem',
    height: 'fit-content',
    backgroundColor: theme.palette.grey[300],
    borderRadius: 30,
  },
  itemLabel: {
    padding: '0.2rem 0 0 0.2rem',
  },
  checkboxWrapper: {
    '& span': {
      padding: 0,
    },
    maxHeight: '1.625rem',
    overflow: 'hidden',
    margin: '0.5rem 0',
  },
  filterGroup: {
    margin: '0.5rem 1.5rem 2.5rem 1.5rem',
  },
  shutdownButton: {
    color: theme.palette.grey[600],
    textTransform: 'none',
    fontSize: '1rem',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem 2.5rem',
  },
  search: {
    position: 'relative',
    width: '100%',
    padding: '0.2rem 0',
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1.5rem',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    fontSize: '0.85rem',
    fontWeight: 500,
    color: theme.palette.grey[1000],
    padding: '0.8rem 0.5rem 0.5rem 3.5rem',
    width: '100%',
  },
  seperateLine: {
    position: 'absolute',
    left: 0,
    height: 1,
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid none none none',
    borderColor: theme.palette.grey[300],
  },

  tableWrapper: {
    '& div': {
      zIndex: 1,
    },
  },
  statusPanel1: {
    borderRadius: 4,
    textAlign: 'center',
    fontSize: '0.75rem',
    width: 'fit-content',
    padding: '0 0.3rem',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  statusPanel2: {
    borderRadius: 4,
    textAlign: 'center',
    fontSize: '0.75rem',
    width: 'fit-content',
    padding: '0 0.3rem',
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
  },
  itemFilter: {
    minWidth: '2rem',
    position: 'absolute',
    padding: 0,
  },
  itemFilterPanel: {
    padding: '1rem 0',
    ...boxShadow2,
  },
  popShadow: {
    boxShadow: '0 2px 5px -1px rgba(0,0,0,0.1)',
  },
  mainFilter: {
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 5rem)',
    },
    width: 'calc(100% - 20rem)',
  },

  //ActionMenu
  menuPanel: {
    display: 'contents',
  },
  menuButton: {
    minWidth: '1rem',
    padding: 0,
    margin: '0.6rem 0',
    textTransform: 'none',
  },
  actionMenu: {
    marginTop: '2rem',
    marginLeft: '-2rem',
  },
  actionMenuItem1: {
    fontSize: 'inherit',
    width: '8rem',
  },
  actionMenuItem2: {
    color: theme.palette.primary.main,
    fontSize: 'inherit',
    width: '8.5rem',
  },

  //responsive style
  cellStyle: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  rowStyle: {
    cursor: 'pointer',
  },

  //detail style
  detailTitlePanel: {
    paddingBottom: '1rem',
    position: 'relative',
    backgroundColor: 'white',
    ...boxShadow2,
  },
  detailTitlePara: {
    color: theme.palette.grey[800],
    fontSize: '1.6rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
    letterSpacing: '0.24px',
    padding: '1rem 0 0 4rem',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  linkStyle: {
    display: 'block',
    color: theme.palette.primary.main,
    fontSize: '0.9rem',
    textDecoration: 'none',
    padding: '1rem 0 0 2rem',
    width: 'fit-content',
  },
  smallImage: {
    position: 'absolute',
    top: '2.5rem',
    left: '1rem',
  },
  headerDetail: {
    display: 'flex',
  },
  selectComponent: {
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    borderRadius: 5,
    height: 'fit-content',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
  simplePanel: {
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
  simpleTitle: {
    padding: 0,
    margin: 0,
    color: theme.palette.grey[500],
    fontSize: '0.75rem',
  },
  simpleName: {
    paddingLeft: 0,
    margin: 0,
    fontSize: '1.2rem',
  },
  buttonExtend: {
    margin: '0.2rem 1rem 0 0',
    height: '2.75rem',
    fontSize: '1rem',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  buttonBill: {
    margin: '0.2rem 1rem 0 0',
    height: '2.75rem',
    fontSize: '1rem',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: 0,
      top: '3rem',
    },
  },
  detailPanel: {
    margin: '1.7rem 2.5rem 4.3rem 2rem',
  },
  detailCustomerPanel: {
    padding: '1rem 1.5rem',
    backgroundColor: 'white',
    ...boxShadow2,
    borderRadius: 2,
  },
  detailPeriodPanel: {
    padding: '1rem 1.5rem',
    position: 'relative',
    backgroundColor: 'white',
    ...boxShadow2,
    marginTop: '1.5rem',
    borderRadius: 2,
  },
  detailMapPanel: {
    position: 'relative',
    padding: '1rem 1.5rem',
    backgroundColor: 'white',
    ...boxShadow2,
    height: '100%',
    borderRadius: 2,
  },
  detailProductPanel: {
    position: 'relative',
    backgroundColor: 'white',
    ...boxShadow2,
    borderRadius: 2,
  },
  subTitlePara: {
    color: theme.palette.grey[800],
    fontSize: '1.375rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subProductTitlePara: {
    color: theme.palette.grey[800],
    fontSize: '1.375rem',
    fontWeight: 'bold',
    padding: '1rem 1.5rem',
    margin: 0,
  },
  companyNamePara: {
    fontSize: '1.2rem',
    padding: '0.2rem 0',
    margin: 0,
  },
  customerPara: {
    fontSize: '0.9rem',
    padding: '0.2rem 0',
    margin: 0,
  },
  emailPara: {
    fontSize: '0.9rem',
    padding: '0.2rem 0',
    margin: 0,
  },
  periodPara: {
    fontSize: '1.2rem',
    padding: '0.2rem 0 1.8rem 0',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
    },
  },
  arrowIcon: {
    width: '2rem',
    height: '1rem',
  },
  mapSubPara: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 4rem 1rem 0',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
    },
  },
  mapView: {
    position: 'relative',
    width: '100%',
    height: '50%',
  },
  mapCell: {
    [theme.breakpoints.down('sm')]: {
      height: '30rem',
    },
  },
  addressPara: {
    paddingTop: '1rem',
  },
  createIcon: {
    position: 'absolute',
    right: '1.5rem',
    top: '1rem',
    cursor: 'pointer',
    minWidth: 0,
  },
  buttonPeriod: {
    position: 'absolute',
    right: '1.8rem',
    top: '3rem',
    height: '2.75rem',
    fontSize: '1rem',
    textTransform: 'none',
  },
  tableHeader: {
    color: theme.palette.grey[600],
    fontWeight: 'normal',
    fontSize: '0.75rem',
  },
  mobileProducts: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileContainer: {
    paddingLeft: '2rem',
  },
  mobileTitle: {
    fontWeight: 'bold',
  },
  mobileSimple: {
    marginTop: '1rem',
    fontSize: '1rem',
  },
  mobileSimplePrice: {
    marginTop: '1rem',
    fontSize: '1rem',
    textAlign: 'right',
  },
  mobilePriceCell: {
    display: 'flex',
  },
  priceButton: {
    height: 'fit-content',
    marginTop: '1.5rem',
  },
  calculatePara: {
    padding: '0',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      padding: '1.7rem 2rem 3rem 2rem',
    },
  },
  calculateSubPara: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  calculateSeperateLine: {
    height: 1,
    borderWidth: '1px',
    borderStyle: 'solid none none none',
    borderColor: theme.palette.grey[300],
  },
  totalPara: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.grey[800],
  },

  //editAddress
  editAddressPanel: {
    padding: '1rem 1.5rem',
    backgroundColor: 'white',
    ...boxShadow2,
    borderRadius: 2,
    minHeight: '20rem',
  },
  modalWindow: {
    backgroundColor: theme.palette.action.hover,
    padding: '10% 20%',
    [theme.breakpoints.down('sm')]: {
      padding: '10% 5%',
    },
  },
  buttonUpdate: {
    height: '2.75rem',
    width: '10rem',
    float: 'right',
    margin: '1rem 0',
    textTransform: 'none',
  },
  buttonCancel: {
    height: '2.75rem',
    width: '10rem',
    float: 'right',
    margin: '1rem 1rem',
    textTransform: 'none',
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
  streetPanel: {
    position: 'relative',
  },
  postalField: {
    width: '32%',
    marginRight: '4%',
  },
  cityField: {
    width: '64%',
  },

  //editPrice
  priceDialog: {
    display: 'grid',
    padding: '1rem',
  },
  priceButtons: {
    display: 'flex',
    paddingTop: '1rem',
  },

  //editPeriod
  periodDlg: {
    backgroundColor: theme.palette.action.hover,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.grey[400],
    },
  },
  mainPanel: {
    width: '60rem',
    padding: '1rem 1.5rem 4rem 1.5rem',
    position: 'relative',
    backgroundColor: 'white',
    ...boxShadow2,
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
      marginRight: '7rem',
      padding: '1rem',
      width: '100%',
    },
  },
  contentPanel: {
    display: 'flex',
  },
  viewRange: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  rangeSeperateLine: {
    marginTop: '1rem',
    height: 1,
    borderWidth: '1px',
    borderStyle: 'solid none none none',
    borderColor: theme.palette.grey[300],
  },
  verticalSeperateLine: {
    height: 'auto',
    borderWidth: '1px',
    borderStyle: 'none solid none none',
    borderColor: theme.palette.grey[300],
  },
  rangeItem: {
    padding: '0.2rem 1rem',
    width: '49%',
  },
  rangeTitle: {
    paddingBottom: '0.3rem',
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  rangeDate: {
    margin: 0,
    fontSize: '1rem',
  },
  mobileTotal: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  calendarPanel: {
    width: '40%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'calc(100vh - 20rem)',
      overflow: 'scroll',
    },
  },
  calendarPart: {
    padding: '1rem 0',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  calendarMobile: {
    padding: '1rem 0',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  returnTime: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  extendDetailPanel: {
    color: theme.palette.grey[800],
    width: '60%',
    padding: '1rem 0 1rem 3rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  extendDetailPanelDisable: {
    color: 'grey',
    width: '60%',
    padding: '1rem 0 1rem 3rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  periodTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  periodComment: {
    textAlign: 'center',
    padding: '1rem 0 0 0',
    color: theme.palette.grey[500],
  },
  periodButtons: {
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      float: 'none',
    },
  },
  abortButton: {
    fontSize: '1rem',
    fontWeight: 'normal',
    margin: '0 2rem',
    height: '2.75rem',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'fit-content',
      margin: '0 0.2rem',
    },
  },
  renewButton: {
    fontSize: '1rem',
    fontWeight: 'normal',
    height: '2.75rem',
    width: '15rem',
    textTransform: 'none',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: 'fit-content',
    },
  },

  buttonServices: {
    height: '2.75rem',
    fontSize: '1rem',
    textTransform: 'none',
  },
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
  endTimePicker: {
    gridColumn: '1 / 2',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
});

export default rentalStyle;
