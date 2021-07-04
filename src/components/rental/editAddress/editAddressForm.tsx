import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import rentalStyle from '../rental.style';
import { FormControl, InputLabel, Select, Button, Grid } from '@material-ui/core';
import { CssInput, CssTextField } from '~/shared/index';
import countryNames from '~/constants/countryNames';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';

const useStyles = makeStyles(rentalStyle);
const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const EditAddressForm = (): ReactElement => {
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const { t } = useTranslation();

  const [address, setAddress] = React.useState<string>('');
  const [postalCode, setPostalCode] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const handleSelectPlace = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const addressComponents = results[0]?.address_components;
      console.log(results);

      if (addressComponents) {
        const postalCodePart = addressComponents.find((addressComponent) =>
          addressComponent.types.includes('postal_code')
        );
        const cityPart = addressComponents.find((addressComponent) => addressComponent.types.includes('locality'));

        setAddress(address.split(',')[0]);
        setPostalCode(postalCodePart?.long_name || '');
        setCity(cityPart?.long_name || '');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handlePlaceChange = (address: string) => {
    setAddress(address);
  };

  return (
    <div className={styles.editAddressPanel}>
      <p className={styles.subTitlePara}>{t('rental:proj_address')}</p>
      <Button className={styles.buttonUpdate} variant="contained" color="primary">
        Update
      </Button>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <PlacesAutocomplete
            value={address}
            onChange={handlePlaceChange}
            onSelect={handleSelectPlace}
            googleCallbackName="googleMapsCallbackFunc"
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className={styles.streetPanel}>
                <CssTextField
                  {...getInputProps()}
                  InputProps={{ classes, disableUnderline: true }}
                  variant="filled"
                  fullWidth
                  required
                  label={t('user:reg_street')}
                  placeholder={t('user:reg_street')}
                  name="street"
                  autoComplete="new-street"
                />
                <div className={loading || suggestions.length ? styles.placeSuggestionsContainer : ''}>
                  {loading && <div className={styles.loadingSuggestions}>Loading...</div>}
                  {suggestions.map((suggestion, index) => (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className: suggestion.active ? styles.activePlaceSuggestion : styles.placeSuggestion,
                      })}
                      key={`place-${index}-${Math.random()}`}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            className={styles.postalField}
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_postal_code')}
            placeholder={t('user:reg_postal_code')}
            name="postalCode"
            value={postalCode}
          />
          <CssTextField
            className={styles.cityField}
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:city')}
            placeholder={t('user:city')}
            name="city"
            value={city}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel>{t('user:reg_country')}</InputLabel>
            <Select native label={t('user:reg_country')} name="country" input={<CssInput />}>
              {Object.values(countryNames).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel>{t('rental:transport')}</InputLabel>
            <Select native label={t('rental:transport')} name="transport" input={<CssInput />}>
              <option value="0">Self pickup</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditAddressForm;
