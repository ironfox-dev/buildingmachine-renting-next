import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import { ConfirmationDialogProps } from '../interfaces';

const ConfirmationDialog = ({ onConfirm, onCancel, open, content }: ConfirmationDialogProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      keepMounted
      style={{ zIndex: 1400 }}
    >
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => onCancel()}>
          {t('common:cancel')}
        </Button>
        <Button onClick={() => onConfirm()} color="primary">
          {t('common:submit')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
