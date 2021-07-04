import { createStyles } from '@material-ui/core/styles';
import { primary_soft, typographyTitle, white, offBlack } from '~/constants/colors';

const listStyle = createStyles({
  container: {
    overflowX: 'auto',
    minWidth: 720,
    padding: '21px 24px',
    backgroundColor: white,
  },
  mainContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  headerTitle: {
    fontSize: 22,
    letterSpacing: 0.21,
    lineHeight: '26px',
    fontWeight: 700,
    color: typographyTitle,
  },
  headerDescription: {
    fontSize: 14,
    letterSpacing: 0.13,
    lineHeight: '17px',
    marginTop: 22,
  },
  createButton: {
    fontSize: 16,
    lineHeight: '19px',
    color: primary_soft,
    letterSpacing: 0.15,
    textAlign: 'right',
    padding: 5,
  },
  itemGrid: {
    padding: '0px 5px',
    marginTop: 16,
  },
  actionItemGrid: {
    padding: '0px 20px',
    marginTop: 16,
  },
  actionIconButton: {
    color: offBlack,
    padding: 10,
    borderRadius: 50,
    marginLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      color: primary_soft,
    },
  },
  serviceRow: {
    padding: '10px 0px',
    marginTop: 5,
  },
  editActionButton: {
    marginLeft: 20,
    marginTop: 5,
  },
  actionIconContainer: {
    marginLeft: 'auto',
  },
  alertContainer: {
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
});

export default listStyle;
