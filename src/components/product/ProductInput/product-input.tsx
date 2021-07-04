import React from 'react';
import TextField from '@material-ui/core/TextField';

import { ProductInputProps } from '../interfaces/interfaces';
import useStyles from './product-input.styles';

const ProductInput = ({
  isNumber,
  name,
  label,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  isSelect,
  children,
  InputProps,
  isMultiline,
  disabled,
  helperText,
  error,
  value,
  required,
}: ProductInputProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <TextField
      type={isNumber ? 'number' : 'text'}
      select={isSelect}
      label={label}
      name={name}
      className={classes.input}
      value={value || values[name]}
      error={error || (errors[name] && (touched[name] as boolean))}
      helperText={helperText || (errors[name] && touched[name] && errors[name])}
      onChange={handleChange}
      onBlur={handleBlur}
      variant="outlined"
      InputProps={InputProps}
      fullWidth
      multiline={isMultiline}
      rows={isMultiline ? 2 : 1}
      disabled={disabled}
      required={required}
    >
      {isSelect && children}
    </TextField>
  );
};

export default ProductInput;
