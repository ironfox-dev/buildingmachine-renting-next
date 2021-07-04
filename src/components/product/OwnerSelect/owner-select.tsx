import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { OwnerSelectProps } from '../interfaces/interfaces';

import useStyles from './owner-select.styles';

const OwnerSelect = ({
  selectedOwner,
  ownersList,
  ownerChangeHandler,
  ownerCreationHandler,
}: OwnerSelectProps): React.ReactElement => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (isInputVisible) {
      setIsInputVisible(false);
      setInputValue('');
    }
  }, [selectedOwner]);

  return (
    <Grid container alignItems="flex-end">
      {!isInputVisible && (
        <>
          <TextField select label="Owner" name="owner" value={selectedOwner.name} onChange={ownerChangeHandler}>
            {ownersList.map((owner) => {
              return (
                <MenuItem key={owner.id} value={owner.name}>
                  {owner.name}
                </MenuItem>
              );
            })}
          </TextField>

          <IconButton
            color="primary"
            aria-label="create new owner"
            className={classes.button}
            onClick={() => setIsInputVisible(true)}
          >
            <AddCircleIcon />
          </IconButton>
        </>
      )}

      {isInputVisible && (
        <>
          <TextField
            label="New owner"
            name="newOwner"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={!inputValue}
            onClick={() => ownerCreationHandler(inputValue)}
          >
            Save owner
          </Button>

          <Button size="small" variant="outlined" color="primary" onClick={() => setIsInputVisible(false)}>
            Cancel
          </Button>
        </>
      )}
    </Grid>
  );
};

export default OwnerSelect;
