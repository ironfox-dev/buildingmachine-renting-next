import React from 'react';
import { makeStyles, FormControl, InputLabel, Select } from '@material-ui/core';
import { lightGray, white } from '~/constants/colors';

const useCustomSelectStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  select: {
    backgroundColor: white,
    width: '100%',
    border: `1px solid ${lightGray}`,
    borderRadius: 4,
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: white,
    },
  },
}));
interface SelectBoxProps {
  value: string;
  readOnly: boolean;
  onChange: (value: string) => void;
}

export default function CustomSelectBox(props: SelectBoxProps): React.ReactElement {
  const selectClasses = useCustomSelectStyle();
  const handleChange = (e) => {
    if (!props.readOnly) {
      props.onChange(e.target.value);
    }
  };
  return (
    <FormControl variant="filled" className={selectClasses.root}>
      <InputLabel htmlFor="outlined-age-native-simple">Pricing structure</InputLabel>
      <Select
        className={selectClasses.select}
        native
        value={props.value}
        inputProps={{ readOnly: props.readOnly }}
        onChange={handleChange}
      >
        <option aria-label="None" value="" />
        <option value={'hourly'}>Hourly</option>
        <option value={'daily'}>Daily</option>
        <option value={'fixed'}>Fixed</option>
      </Select>
    </FormControl>
  );
}
