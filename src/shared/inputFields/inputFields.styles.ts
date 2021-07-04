import { createStyles } from '@material-ui/core';
import { darkGray } from '~/constants/colors';
import { boxShadow } from '~/constants/commonStyles';
import theme from '~/layouts/theme';

export const buttonCustomStyle = createStyles({
  root: {
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    borderRadius: '0.25rem',
    backgroundColor: theme.palette.background.default,
    '&:-internal-autofill-selected': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    '&$focused': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
  },
  focused: {
    [theme.breakpoints.down('xs')]: {
      ...boxShadow,
    },
  },
});

export const customizeTextFieldStyle = createStyles({
  root: {
    '& p.MuiFormHelperText-root': {
      position: 'absolute',
      top: '60%',
      right: 0,
    },
    '& .MuiInputLabel-filled': {
      fontSize: '1.1rem',
      zIndex: 1,
      transform: 'translate(1.5rem, 1.5rem) scale(1)',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(1.5rem, 0.6rem) scale(0.75)',
    },
    '& .MuiFilledInput-input': {
      fontSize: '1.1rem',
      padding: '1.5rem 0.75rem 1rem 1.5rem',
    },
  },
});

export const customizeCheckboxStyle = createStyles({
  root: {
    color: theme.palette.grey[500],
    padding: '0.1rem 0.5rem',
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
});

export const customizeFormLabelStyle = createStyles({
  root: {},
  label: {
    fontSize: '1.1rem',
  },
});

export const customizeInputStyle = createStyles({
  root: {},
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    fontSize: '1.1rem',
    padding: '1.5rem 1.5rem 1rem 1.5rem',
    overflow: 'hidden',
    '&:focus': {
      borderRadius: 4,
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    focus: {},
  },
});

export const borderlessTextFieldStyle = createStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, 3px) scale(0.75)',
    },
  },
});

export const customizeInputStyleColored = createStyles({
  root: {},
  input: {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: theme.palette.warning.main,
    fontSize: '0.75rem',
    color: 'white',
    margin: '1.8rem 5rem 0.5rem 1rem',
    padding: '0 0 0.2rem 0.2rem',
    '&:focus': {
      backgroundColor: theme.palette.warning.main,
      borderRadius: 2,
    },
    focus: {},
  },
});

export const customizeToggleButtonGroup = createStyles(() => ({
  root: {
    height: '100%',
  },
  grouped: {
    fontSize: 22,
    padding: '0 20px',
  },
}));

export const whiteBackgroundInputStyle = createStyles(() => ({
  root: {
    marginBottom: 22,

    '& .MuiInputBase-input': {
      padding: '20px 23px 17px !important',
      height: 'auto',
      borderColor: 'white',
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 4,
      color: darkGray,
      fontSize: 18,
      letterSpacing: 0.17,
      lineHeight: '23px',
    },
    '& input:valid + fieldset': {},
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderRadius: 4,
    },
    '& input:valid:hover': {
      borderColor: 'white',
    },
  },
}));

export const autocompleteStyle = (theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
});
