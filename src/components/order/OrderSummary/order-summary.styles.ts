import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  grid: {
    display: 'grid',
    gridRowGap: '1rem',
    gridColumnGap: '2%',
    gridTemplateColumns: 'repeat(6, 15%)',
  },

  header: {
    gridColumn: '1 / -1',
    marginTop: '2rem',
    fontSize: '1.8rem',
  },

  button: {
    marginLeft: '1rem',
  },

  label: {
    fontSize: '0.8rem',
    color: 'grey',
  },

  companyName: {
    gridColumn: '1 / 4',
  },

  name: {
    gridColumn: '4 / -1',

    '& div': {
      marginRight: '1.6rem',
    },
  },

  email: {
    gridColumn: '1 / 4',
  },

  phoneNumber: {
    gridColumn: '4 / -1',
  },

  address: {
    gridColumn: '1 / 3',
  },

  zipCode: {
    gridColumn: '3 / 4 ',
  },

  cityAndCountry: {
    gridColumn: '4 / -1',

    '& div': {
      marginRight: '1.6rem',
    },
  },

  deliveryMethod: {
    gridColumn: '1 / 3 ',
  },

  pickup: {
    gridColumn: '3 / 5',

    '& div': {
      marginRight: '1rem',
    },
  },

  return: {
    gridColumn: '5 / 7',

    '& div': {
      marginRight: '1rem',
    },
  },

  order: {
    gridColumn: '1 / -1',
  },

  footer: {
    gridColumn: '1 / -1',
  },

  paymentInfo: {
    gridColumn: '1 / -1',
  },
});
