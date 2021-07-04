import React, { memo } from 'react';
import { InfoCardComponent } from '../interfaces';

import useStyles from './InfoCard.styles';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const InfoCard = ({
  children,
  title = '',
  isEditable = false,
  isEdited = false,
  onActivateEditMode,
  onConfirmEdit,
  onCancelEdit,
}: InfoCardComponent): React.ReactElement => {
  const classes = useStyles();
  return (
    <Grid className={classes.content} item xs={12}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <h2 className={classes.title}>{title}</h2>
        {isEditable && (
          <div>
            {isEdited ? (
              <>
                <IconButton onClick={onConfirmEdit}>
                  <CheckIcon />
                </IconButton>
                <IconButton onClick={onCancelEdit}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={onActivateEditMode}>
                <EditIcon />
              </IconButton>
            )}
          </div>
        )}
      </Grid>
      {children}
    </Grid>
  );
};

export default memo(InfoCard);
