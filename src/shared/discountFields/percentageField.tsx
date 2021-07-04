import React from 'react';
import NumberFormat from 'react-number-format';

import { DiscountFieldProps } from '../interfaces';

const DiscountField = (props: DiscountFieldProps) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isAllowed={(values) => !(values.floatValue > 100)}
      isNumericString
      allowNegative={false}
      suffix="%"
    />
  );
};

export default DiscountField;
