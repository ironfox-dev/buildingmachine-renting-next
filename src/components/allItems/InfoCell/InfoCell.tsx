import React, { memo } from 'react';
import { InfoCellComponent } from '../interfaces';

import useStyles from './InfoCell.styles';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const InfoCell = ({
  label = '',
  value = '',
  title = '',
  isEditable,
  onChange,
  onBlur,
  error = '',
  isNumber = false,
  options,
  select,
  selectedItemId,
}: InfoCellComponent): React.ReactElement => {
  const classes = useStyles();
  let content;
  if (select && isEditable) {
    content = (
      <TextField
        select
        value={selectedItemId}
        onChange={(e) => onChange(options.find((i) => i.id === e.target.value))}
        classes={{ root: classes.selectInput }}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </TextField>
    );
  } else if (isEditable) {
    content = (
      <TextField
        type={isNumber ? 'number' : 'text'}
        classes={{ root: classes.input }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onBlur={onBlur}
        error={Boolean(error)}
        helperText={error}
      />
    );
  } else {
    content = value;
  }

  return (
    <>
      {title && <h3 className={classes.title}>{title}</h3>}
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{content}</div>
    </>
  );
};

export default memo(InfoCell);
