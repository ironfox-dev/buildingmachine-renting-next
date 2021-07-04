import { createStyles, makeStyles } from '@material-ui/core/styles';

const discountCodesStyle = makeStyles(() =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modelWrapper: {
      backgroundColor: '#fff',
      borderRadius: 6,
      outline: 0,
    },
    title: {
      padding: '1.25rem',
    },
    body: {
      padding: '2rem',
      borderTop: '1px solid #E4E6E8',
      borderBottom: '1px solid #E4E6E8',
    },
    toggleButton: {
      margin: '0 20px',
    },
    footer: {
      padding: '1.25rem',
    },
    closeButton: {
      marginRight: 15,
    },
    deleteIcon: {
      padding: 5,
      borderRadius: 50,
    },
  })
);

export default discountCodesStyle;
