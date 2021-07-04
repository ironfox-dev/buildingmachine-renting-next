import { makeStyles } from '@material-ui/core/styles';
import { white, lightGray } from '~/constants/colors';

export default makeStyles({
  tabLayoutContainer: {
    height: '100vh',
    position: 'fixed',
    width: 250,
    backgroundColor: white,
    paddingTop: 17,
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
});
