import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { ListItemComponent, Document } from '../interfaces';
import TextField from '@material-ui/core/TextField';
import { throttle } from 'lodash';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import useStyles from './listItem.styles';

const ListItem = ({
  document,
  handlePreviewClick,
  isEditMode,
  handleOnDeleteItem,
  handleOnUpdateItem,
}: ListItemComponent) => {
  const classes = useStyles();
  const { id, name, documentCategory, user, uploadedAt, mimeType }: Document = document;

  const onClickDelete = useCallback(() => {
    handleOnDeleteItem(id);
  }, [id]);

  const onNameChange = (e) => {
    const value = e.target.value;
    handleOnUpdateItem(id, value);
  };

  const throttledItemUpdate = throttle(onNameChange, 500, { leading: false, trailing: true });

  return (
    <Grid className={classes.root} container direction="row" justify="space-between" alignItems="center">
      {isEditMode && <DeleteOutlineIcon className={classes.deleteIcon} onClick={onClickDelete} />}
      {isEditMode && (
        <TextField
          className={clsx(classes.column, classes.nameEdit)}
          variant="outlined"
          defaultValue={name}
          onChange={(e) => {
            e.persist();
            throttledItemUpdate(e);
          }}
        />
      )}
      {!isEditMode && (
        <Grid container alignItems="center" className={classes.column}>
          {name}
        </Grid>
      )}
      <Grid container alignItems="center" className={classes.column}>
        {documentCategory}
      </Grid>
      <Grid container alignItems="center" className={classes.column}>
        {user}
      </Grid>
      <Grid container alignItems="center" className={classes.column}>
        {new Date(+uploadedAt).toDateString()}
      </Grid>
      <Button onClick={() => handlePreviewClick(id)} className={classes.previewFile}>Preview File</Button>
    </Grid>
  );
};

export default ListItem;
