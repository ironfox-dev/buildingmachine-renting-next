import { createStyles } from '@material-ui/core/styles';
import { lightGrayTitle, midBlack, white } from '~/constants/colors';

const fleetStyle = createStyles({
  fleetContainer: {
    padding: '20px 40px',
  },
  fleetOverviewTitle: {
    fontSize: 30,
    lineHeight: '36px',
    letterSpacing: 0.28,
    fontWeight: 'bold',
  },
  fleetTitle: {
    fontSize: 30,
    lineHeight: '36px',
    letterSpacing: 0.28,
    fontWeight: 700,
  },
  titleContainer: {
    padding: '20px 0',
  },
  tableWrapper: {
    '& div': {
      zIndex: 1,
    },
  },
  tableHeaderTitle: {
    color: lightGrayTitle,
    fontSize: 12,
    lineHeight: '14px',
    letterSpacing: 0.11,
  },
  columnFilterButton: {
    width: 16,
    height: 16,
  },
  productAbbreviation: {
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: 0.13,
    color: midBlack,
  },
  productName: {
    fontSize: 10,
    lineHeight: '11px',
    letterSpacing: 0.09,
    color: midBlack,
  },
  serialNumber: {
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: 0.13,
    color: midBlack,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 13,
    lineHeight: '16px',
    letterSpacing: 0.13,
    color: midBlack,
    fontWeight: 600,
  },
  orderMarker: {
    padding: '1px 4px',
    marginRight: 5,
    color: white,
  },
});

export default fleetStyle;
