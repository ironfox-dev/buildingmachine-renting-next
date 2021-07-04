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
  options: string[];
  onChange: (name: string, value: unknown) => void;
  settingName: string;
}

export default function CustomSelectBox(props: SelectBoxProps): React.ReactElement {
  const selectClasses = useCustomSelectStyle();
  return (
    <FormControl variant="filled" className={selectClasses.root}>
      <InputLabel htmlFor="outlined-age-native-simple">Pricing structure</InputLabel>
      <Select
        className={selectClasses.select}
        native
        value={props.value}
        onChange={(e) => props.onChange(props.settingName, e.target.value)}
      >
        <option aria-label="None" value="" />
        {props.options.map((item, i) => (
          <option key={i} value={item}>
            {item}
            {props.settingName === 'tax' ? '%' : ''}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
