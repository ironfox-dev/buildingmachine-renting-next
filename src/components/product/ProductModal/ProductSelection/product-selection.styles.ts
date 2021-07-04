import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  hoverable: {
    cursor: 'pointer',
  },
  wizardWrap: {
    marginTop: '2rem',
    height: 90,
    minHeight: '60vh',
    position: 'relative',
  },
  wizardContainer: {
    position: 'relative',
    borderRadius: 4,
    lineHeight: '1.1876em',
    marginBottom: '-90px',
  },
  label: {
    top: 0,
    left: 0,
    position: 'absolute',
    transform: 'translate(14px, -6px) scale(0.75)',
    color: 'rgba(0, 0, 0, 0.54)',
    padding: 0,
    fontSize: '1rem',
    backgroundColor: 'white',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  fieldset: {
    margin: 0,
    padding: '0 1rem',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 'inherit',
    width: '100%',
  },
  wizardSelectedValue: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  wizardCellValue: {
    fontWeight: 300,
    fontSize: '1.25rem',
    letterSpacing: 0.17,
    lineHeight: '23px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
  },
  modelView: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'threedface',
    padding: '2rem',
    marginTop: '116px',
  },
});
