import { createStyles } from '@material-ui/core/styles';
import { typographyTitle, white } from '~/constants/colors';

const generalSettingsStyle = createStyles({
  container: {
    overflowX: 'auto',
    padding: '21px 24px',
    backgroundColor: white,
    marginTop: 20,
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
    marginBottom: 35,
  },
});

export default generalSettingsStyle;
