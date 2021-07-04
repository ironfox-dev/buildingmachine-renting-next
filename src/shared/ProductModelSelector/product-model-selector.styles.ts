import { makeStyles } from '@material-ui/core/styles';
import { black, lightGray, primary } from '~/constants/colors';

export default makeStyles({
  hoverable: {
    cursor: 'pointer',
  },
  bestSellerItemPriceTag: {
    color: primary,
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.15,
    textAlign: 'right',
  },
  bestSellerItemPrice: {
    fontSize: 30,
    letterSpacing: 0.28,
  },
  wizardModal: {
    position: 'absolute',
    width: '100%',
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 90,
    boxShadow: '0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12)',
    padding: '16px 0',
    zIndex: 1,
  },
  wizardCategoriesSection: {
    flexGrow: 1,
    paddingBottom: 35,
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
  wizardCategoriesList: {
    borderRight: `1px solid ${lightGray}`,
    paddingLeft: 35,
    margin: 0,
  },
  wizardCategory: {
    paddingRight: 32,
    paddingTop: 8,
    paddingBottom: 8,
    cursor: 'pointer',
    color: black,
  },
  wizardCategoryActive: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    marginLeft: -18,
    cursor: 'pointer',
    backgroundColor: primary,
    color: '#fff',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    width: 'calc(100% + 19px)',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: 'url("/images/orange-arrow-right.png")',
      backgroundSize: 'cover',
      position: 'absolute',
      height: '100%',
      width: 13,
      right: -13,
    },
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
    paddingRight: 40,
  },
  wizardResult: {
    marginTop: 25,
  },
  wizardResultIcon: {
    marginRight: 25,
    height: 42,
  },
  wizardResultTitle: {
    color: black,
    margin: 0,
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.19,
    lineHeight: '25px',
  },
  wizardResultSubtitle: {
    margin: 0,
    fontSize: 14,
    letterSpacing: 0.13,
    lineHeight: '16px',
    fontWeight: 'normal',
  },
  wizardResultSubtitleManufacturer: {
    color: primary,
    paddingRight: 40,
  },
  wizardResultSubtitleDescription: {
    color: black,
  },
});
