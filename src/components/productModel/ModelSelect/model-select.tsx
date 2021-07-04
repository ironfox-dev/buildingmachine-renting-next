import React from 'react';
import { Chip, MenuItem, Select } from '@material-ui/core';

import { ModelSelectProps } from '../product-model.interfaces';
import useStyles from './model-select.styles';
import { CssInput } from '~/shared/index';

const ModelSelect = ({ models, selectedModel, modelChangeHandler, isMultiple = false, isFullWidth = false }: ModelSelectProps): React.ReactElement => {
  const classes = useStyles();

  const parseModelLabel = (modelId: string) => {
    const model = models.find(item => item.id === modelId);

    return `${model.type.name} ${model.manufacturer.abbreviation || model.manufacturer.name} ${model.name}`;
  }

  return (
    <Select
      input={<CssInput />}
      multiple={isMultiple}
      fullWidth={isFullWidth}
      label="Model"
      name="model"
      className={classes.select}
      value={selectedModel}
      onChange={modelChangeHandler}
      renderValue={(selected: string | string[]) => typeof selected === 'string' ? parseModelLabel(selected) : 
        (<div className={classes.chips}>
          {selected.map(value => <Chip key={value} label={parseModelLabel(value)} className={classes.chip} />)}
        </div>)
      }
    >
      {models.map((model) => (
        <MenuItem key={model.id} value={model.id}>
          {`${model.type.name} ${model.manufacturer.abbreviation || model.manufacturer.name} ${model.name}`}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ModelSelect;
