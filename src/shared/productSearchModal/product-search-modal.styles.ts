import { makeStyles } from '@material-ui/core/styles';
import { black, lightGray, primary, white } from '~/constants/colors';

export default makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 10px',
  },
  modalBody: {
    padding: 0,
    height: '90%',
    width: '100%',
    backgroundColor: white,
    borderRadius: 4,
  },
  modalHeader: {
    padding: '32px 20px',
    borderBottom: `1px solid ${lightGray}`,
  },
  modalBackIcon: {
    fontSize: 17,
  },
  modalHeaderTitle: {
    fontSize: 20,
    lineHeight: '25px',
    letterSpacing: 0.19,
    fontWeight: 500,
    marginLeft: 14,
  },
  modalProductSearchBar: {
    borderBottom: `1px solid ${lightGray}`,
    padding: '0px 19px',
    height: 60,
  },
  productSearchInput: {
    flex: 1,
    height: '100%',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    padding: '0px 10px',
    fontSize: 18,
    lineHeight: '23px',
    letterSpacing: 0.17,
  },
  modalRowIcons: {
    marginLeft: 'auto',
  },
  hoverable: {
    cursor: 'pointer',
  },
  bestSellerItemPriceTag: {
    color: primary,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.15,
    textAlign: 'right',
    marginLeft: 'auto',
    alignSelf: 'flex-start',
  },
  bestSellerItemPrice: {
    fontSize: 18,
    letterSpacing: 0.28,
  },
  wizardModal: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    zIndex: 1,
    flex: 1,
    overflowY: 'auto',
  },
  wizardCategoriesSection: {
    flexGrow: 1,
    padding: '0px 20px 35px 20px',
  },
  wizardCategoriesHeader: {
    padding: '0 10px 10px 35px',
  },
  wizardCategoriesHeaderCategories: {
    textAlign: 'left',
    color: '#3F3E3E',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    lineHeight: '20px',
  },
  wizardCategory: {
    paddingTop: 8,
    paddingBottom: 8,
    cursor: 'pointer',
    color: black,
  },
  wizardCategoryIcon: {
    width: 30,
    height: 'auto',
  },
  wizardCategoryName: {
    paddingLeft: 10,
    fontSize: 18,
    letterSpacing: 0.17,
  },
  wizardResultsSection: {
    width: '70.5%',
    padding: '0 20px',
  },
  wizardResultsSectionTitle: {
    color: '#3F3E3E',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    lineHeight: '20px',
  },
  wizardResultsList: {
    padding: '0px 20px',
  },
  wizardResult: {
    marginTop: 15,
  },
  wizardResultIcon: {
    marginRight: 25,
    height: 42,
  },
  wizardResultTitle: {
    color: black,
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.19,
    lineHeight: '25px',
  },
  wizardResultSubtitleManufacturer: {
    fontSize: 12,
    color: primary,
  },
  wizardResultSubtitleDescription: {
    fontSize: 12,
    color: black,
  },
  datePicker: {
    cursor: 'pointer',
    fontWeight: 500,
    '& .MuiInput-root': {
      fontSize: '18px',
      fontWeight: 500,

      '&:after, &:before': {
        display: 'none',
      },

      '& .MuiInputBase-input': {
        cursor: 'pointer',
      },
    },
  },
  wizardCellModal: {
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    minHeight: 80,
    left: 0,
    padding: '15px 20px',
  },
  wizardCellModalItem: {
    paddingBottom: 15,
    color: '#3B3B3B',
    fontSize: 18,
    letterSpacing: 0.17,
    cursor: 'pointer',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  datePickerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px 0px',
  },
  datePickerWrapper: {
    borderBottom: `1px solid ${lightGray}`,
    paddingBottom: 8,
  },
  datePickerTitle: {
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: 0.15,
    fontWeight: 500,
  },
  datePickerComponent: {
    width: '50%',
    padding: '0px 20px',
    cursor: 'pointer',
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textTransform: 'none',
    },
  },
  dateSaveButton: {
    marginTop: 'auto',
    marginLeft: 'auto',
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
  wizardResultHead: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterResultsContainer: {
    height: '100%',
    overflowY: 'auto',
  },
  resultRows: {
    padding: '10px 20px',
    height: 100,
    cursor: 'pointer',
    borderBottom: `1px solid ${lightGray}`,
  },
  resultTitles: {
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: 0.15,
    fontWeight: 500,
    marginBottom: 15,
  },
  resultModelDescripton: {
    fontSize: 18,
    lineHeight: '23px',
    letterSpacing: 0.17,
  },
  searchButton: {
    width: '100%',
    height: 100,
    marginTop: 'auto',
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
  dateResultWrapper: {
    padding: '0px 20px',
  },
  resultDate: {
    fontSize: 18,
    lineHeight: '23px',
    letterSpacing: 0.17,
    marginTop: 10,
    fontWeight: 500,
  },
});
