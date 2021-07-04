import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  section: {
    padding: '0.5rem 1.3rem',
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  sectionTitle: {
    marginTop: 10,
  },
  productImage: {
    maxWidth: 320,
    borderRadius: 5,
    margin: '20px auto 10px',
    display: 'block',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  detailsRow: {
    marginTop: '1rem',
  },
  detailItem: {
    marginBottom: theme.spacing(2),
  },
  datasheetLink: {
    textTransform: 'capitalize',
  },
  datasheetList: {
    margin: 0,
    paddingLeft: 25,
  },
}));
