
import React, { useEffect, useState, ReactElement } from 'react';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Business } from '@material-ui/icons';

import { useProductManufacturersLazyQuery } from '~/graphql/graphql'
import { Manufacturer } from '~/components/productModel/product-model.interfaces';
import { CssTextField } from '..';
import { autocompleteStyle, buttonCustomStyle } from './inputFields.styles';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: Manufacturer) => option.abbreviation,
});

const useStylesButtonCustom = makeStyles(buttonCustomStyle);
const useStyles = makeStyles(autocompleteStyle);

const ManufacturerAutocomplete = (props): ReactElement => {
  const styles = useStyles();
  const classesInput = useStylesButtonCustom();
  const { onSelected, ...inputProps } = props;

  const [value, setValue] = useState<Manufacturer | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<Manufacturer[]>([]);

  const [getManufacturers, { loading: loadingManufacturers, data: manufacturers, refetch: manufacturersRefetch }] = useProductManufacturersLazyQuery();

  const fetchManufacturers = async (inputValue: string) => {
    await getManufacturers({
      variables: { search: inputValue }
    });
  }

  useEffect(() => {
    if(inputValue === ''){
      setOptions(value ? [value] : []);
      return;
    }

    fetchManufacturers(inputValue);
  }, [value, inputValue]);

  useEffect(() => {
    if(manufacturers?.productManufacturers){
      const manufacturersOptions = manufacturers.productManufacturers.map(manufacturer => ({
        id: manufacturer.id,
        name: manufacturer.name,
        abbreviation: manufacturer.abbreviation
      }));

      setOptions(manufacturersOptions);
    }else{
      setOptions([]);
    }
  }, [manufacturers?.productManufacturers])

  return (
    <Autocomplete
      getOptionLabel={option => option.name}
      filterOptions={filterOptions}
      getOptionSelected={(option, value) => option?.id === value?.id}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event: any, newValue: Manufacturer | null) => {
        setValue(newValue);
        onSelected(newValue || {});
      }}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={params => (
        <CssTextField
          {...inputProps}
          {...params}
          InputProps={{
            ...params.InputProps,
            classes: classesInput,
            disableUnderline: true
          }}
        />
      )}
      renderOption={option => (
        <Grid container alignItems="center">
          <Grid item>
            <Business className={styles.icon} />
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="textSecondary">
              {option.abbreviation || option.name}
            </Typography>
          </Grid>
        </Grid>
      )}
    />
  );
}

export default ManufacturerAutocomplete;