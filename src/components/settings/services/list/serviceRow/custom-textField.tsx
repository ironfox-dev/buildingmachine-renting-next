import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { lightGray, white } from '~/constants/colors';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: `1px solid ${lightGray}`,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: white,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: white,
    },
    '&$focused': {
      borderColor: lightGray,
    },
  },
}));

interface TextFieldProps {
  readOnly: boolean;
  value: string;
  label: string;
  multiline?: boolean;
  variant: any;
  onChange: (e: string) => void;
}

export default function CustomTextField(props: TextFieldProps): React.ReactElement {
  const classes = useStylesReddit();

  return (
    <TextField
      fullWidth
      InputProps={{ classes, disableUnderline: true, readOnly: props.readOnly }}
      onChange={(e) => {
        !props.readOnly ? props.onChange(e.target.value) : null;
      }}
      label={props.label}
      multiline={props.multiline}
      variant={props.variant}
      value={props.value}
    />
  );
}
