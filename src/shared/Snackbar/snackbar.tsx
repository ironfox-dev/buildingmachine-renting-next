import React, { useState } from 'react';
import { Snackbar as MaterialSnackbar } from '@material-ui/core';
import useStyles from './snackbar.styles';

const useSnackbar = (): {
  showSnackbar: (type: 'error' | 'success', message: string) => void;
  Snackbar: () => JSX.Element;
} => {
  const classes = useStyles();

  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const showSnackbar = (type, message): void => {
    setSnackbar({ isOpen: true, message, type });
  };

  const Snackbar = () => (
    <MaterialSnackbar
      open={snackbar.isOpen}
      message={snackbar.message}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5000}
      onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      classes={{ root: classes[snackbar.type] }}
    />
  );

  return { Snackbar, showSnackbar };
};

export default useSnackbar;
