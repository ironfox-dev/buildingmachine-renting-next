import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from './address-form.styles';
import { AddressFormProps } from '../interfaces/interfaces';

const AddressForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
  addressFieldName,
  zipCodeFieldName,
  cityFieldName,
  countryFieldName,
}: AddressFormProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [address, setAddress] = useState(values[addressFieldName]);
  const [zipCode, setZipCode] = useState(values[zipCodeFieldName]);
  const [city, setCity] = useState(values[cityFieldName]);
  const [country, setCountry] = useState(values[countryFieldName]);

  useEffect(() => {
    setAddress(values[addressFieldName]);
    setZipCode(values[zipCodeFieldName]);
    setCity(values[cityFieldName]);
    setCountry(values[countryFieldName]);
  }, [values[addressFieldName], values[zipCodeFieldName], values[cityFieldName], values[countryFieldName]]);

  const handleSelect = (address) => {
    geocodeByAddress(address).then(([result]) => {
      const addressComponents = result.address_components;
      const findAddressPart = (type) => {
        return addressComponents.find((component) => component.types.includes(type))?.long_name || '';
      };
      const route = findAddressPart('route');
      const streetNumber = findAddressPart('street_number');
      const postalCode = findAddressPart('postal_code');
      const locality = findAddressPart('locality');
      const country = findAddressPart('country');
      const address = route && streetNumber ? `${route} ${streetNumber}` : route || '';

      setAddress(address);
      setZipCode(postalCode);
      setCity(locality);
      setCountry(country);

      setFieldValue(addressFieldName, route && streetNumber ? `${route} ${streetNumber}` : route || '');
      setFieldValue(zipCodeFieldName, postalCode);
      setFieldValue(cityFieldName, locality);
      setFieldValue(countryFieldName, country);
    });
  };

  return (
    <>
      <PlacesAutocomplete value={address} debounce={200} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          const { onChange, onBlur } = getInputProps();
          return (
            <Autocomplete
              freeSolo
              disableClearable
              className={classes.address}
              classes={{ popper: classes.popper }}
              loading={loading}
              inputValue={address}
              options={suggestions}
              getOptionLabel={(option: { description: string }) => option.description}
              filterOptions={(options) => options}
              renderOption={(option: { description: string }) => (
                <div {...getSuggestionItemProps(option)}>
                  <span>{option.description}</span>
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  type="text"
                  variant="outlined"
                  label={t('order:street_number')}
                  name={addressFieldName}
                  value={address}
                  error={errors[addressFieldName] && (touched[addressFieldName] as boolean)}
                  helperText={errors[addressFieldName] && touched[addressFieldName] && errors[addressFieldName]}
                  onChange={(e) => {
                    onChange(e);
                    handleChange(e);
                  }}
                  onBlur={(e) => {
                    onBlur(e);
                    handleBlur(e);
                  }}
                />
              )}
            />
          );
        }}
      </PlacesAutocomplete>

      <PlacesAutocomplete value={zipCode} debounce={200} onChange={setZipCode} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          const { onChange, onBlur } = getInputProps();
          return (
            <Autocomplete
              freeSolo
              disableClearable
              className={classes.zipCode}
              classes={{ popper: classes.popper }}
              loading={loading}
              inputValue={zipCode}
              options={suggestions}
              getOptionLabel={(option: { description: string }) => option.description}
              filterOptions={(options) => options}
              renderOption={(option: { description: string }) => (
                <div {...getSuggestionItemProps(option)}>
                  <span>{option.description}</span>
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  type="string"
                  variant="outlined"
                  label={t('order:postal_code_abbreviation')}
                  name={zipCodeFieldName}
                  value={address}
                  error={errors[zipCodeFieldName] && (touched[zipCodeFieldName] as boolean)}
                  helperText={errors[zipCodeFieldName] && touched[zipCodeFieldName] && errors[zipCodeFieldName]}
                  onChange={(e) => {
                    onChange(e);
                    handleChange(e);
                  }}
                  onBlur={(e) => {
                    onBlur(e);
                    handleBlur(e);
                  }}
                />
              )}
            />
          );
        }}
      </PlacesAutocomplete>

      <TextField
        required
        type="text"
        variant="outlined"
        label={t('order:city')}
        name={cityFieldName}
        className={classes.city}
        value={city}
        error={errors[cityFieldName] && (touched[cityFieldName] as boolean)}
        helperText={errors[cityFieldName] && touched[cityFieldName] && errors[cityFieldName]}
        onBlur={handleBlur}
        onChange={(e) => {
          setCity(e.target.value);
          handleChange(e);
        }}
      />

      <TextField
        required
        type="text"
        variant="outlined"
        label={t('order:country')}
        name={countryFieldName}
        className={classes.country}
        value={country}
        error={errors[countryFieldName] && (touched[countryFieldName] as boolean)}
        helperText={errors[countryFieldName] && touched[countryFieldName] && errors[countryFieldName]}
        onBlur={handleBlur}
        onChange={(e) => {
          setCountry(e.target.value);
          handleChange(e);
        }}
      />
    </>
  );
};

export default AddressForm;
