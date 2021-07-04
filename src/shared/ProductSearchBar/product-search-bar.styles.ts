import { makeStyles } from '@material-ui/core/styles';
import { darkGray, lightGray, primary, typographyText } from '~/constants/colors';
import { boxShadow } from '~/constants/commonStyles';
import theme from '~/layouts/theme';

export default makeStyles({
  hoverable: {
    cursor: 'pointer',
  },
  wizard: {
    ...boxShadow,
    height: 90,
    position: 'relative',
    borderRadius: 2,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('xs')]: {
      margin: '3.75rem 0px 0',
    },
  },
  wizardCell: {
    position: 'relative',
    padding: '0.625rem 1.125rem',
    width: '18.5%',
    borderLeft: `1px solid ${lightGray}`,
    '&:last-child': {
      borderLeft: 'none',
    },
    ['@media (max-width: 1000px)']: {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
  wizardCellDateTime: {
    minWidth: 160,
  },
  wizardCellWide: {
    padding: '0.625rem 1.125rem',
    flexGrow: 1,
    ['@media (max-width: 1000px)']: {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
  wizardSubmit: {
    width: '15%',
    backgroundColor: primary,
    color: '#fff',
    textAlign: 'center',
    lineHeight: '5.625rem',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    cursor: 'pointer',
  },
  wizardSubmitDisabled: {
    backgroundColor: 'gray',
    color: typographyText,
    cursor: 'progress',
  },
  wizardCellTitle: {
    color: '#3F3E3E',
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.15,
    lineHeight: '1.25rem',
    textAlign: 'left',
  },
  wizardCellValueWrap: {
    marginTop: 10,
    cursor: 'pointer',
  },
  wizardSelectedValue: {
    width: '90%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  wizardCellValue: {
    fontWeight: 300,
    color: darkGray,
    fontSize: 18,
    letterSpacing: 0.17,
    lineHeight: '1.438rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  wizardWrap: {
    maxWidth: 1000,
    margin: '0 auto',
    height: 90,
    [theme.breakpoints.down('md')]: {
      padding: '0px 1.25rem',
    },
  },

  wizardCellModal: {
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    minHeight: 80,
    left: 0,
    position: 'absolute',
    top: '100%',
    padding: '2rem 1.25rem',
  },
  wizardCellModalItem: {
    paddingBottom: 15,
    color: darkGray,
    fontSize: 18,
    letterSpacing: 0.17,
    cursor: 'pointer',
    '&:last-child': {
      paddingBottom: 0,
    },
  },

  datePicker: {
    marginTop: '0.313rem',
    cursor: 'pointer',
    '& .MuiInput-root': {
      fontSize: '1.125rem',
      fontWeight: 300,

      '&:after, &:before': {
        display: 'none',
      },

      '& .MuiInputBase-input': {
        cursor: 'pointer',
      },
    },
  },
});
