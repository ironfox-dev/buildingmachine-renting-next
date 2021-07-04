import { makeStyles } from '@material-ui/core/styles';
import { white, lightGray } from '~/constants/colors';

export default makeStyles({
  tabLayoutContainer: {
    height: '100vh',
    position: 'fixed',
    width: 270,
    backgroundColor: white,
    paddingTop: 17,
    overflowY: 'auto',
    paddingBottom: 100,
  },
  tabContainer: {
    width: '100%',
    padding: '30px 0px',
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: lightGray,
    borderStyle: 'solid',
  },
  settingsButton: {
    textTransform: 'inherit',
    marginTop: 34,
  },
  wrapper: {
    fontSize: 16,
    lineHeight: '19px',
    letterSpacing: 0.15,
    alignItems: 'flex-start',
  },
  root: {
    textTransform: 'inherit',
    paddingLeft: 36,
  },
  backToOverViewButton: {
    textTransform: 'inherit',
  },
  backArrowIcon: {
    width: 18,
    height: 18,
  },
  fleetItemInfoContainer: {
    padding: '21px 35px',
  },
  fleetNameTitle: {
    fontSize: 26,
    lineHeight: '30px',
    letterSpacing: 0.24,
    fontWeight: 700,
    marginBottom: 10,
  },
  fleetStatus: {
    fontSize: 11,
    lineHeight: '13px',
    letterSpacing: 0.1,
    color: white,
    padding: '0px 5px',
  },
  fleetImage: {
    width: '100%',
    marginTop: 19,
  },
  itemInfoContent: {
    flex: 1,
    paddingLeft: 270,
  },
});
