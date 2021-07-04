import React, { ReactElement, useState } from 'react'
import {
  Button, FormControl, Grid, makeStyles, Theme,
  Typography, InputLabel
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { FormikProps, useFormikContext } from 'formik';

import { CustomerUpdateForm } from './customer.interfaces';
import styles from '~/shared/styles';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import { CountriesPhoneCodesSelect, CountriesSelect, CssTextField } from '~/shared/index';

const useStyles2 = makeStyles((theme: Theme) => ({
  modelWrapper: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 3,
  },
  title: {
    padding: 30
  },
}));

const useStyles = makeStyles(styles);
const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const EditCustomerDetails = (props): ReactElement => {
  const classes = useStylesButtonCustom();
  const classes2 = useStyles2();
  const styles = useStyles();
  const { t } = useTranslation();

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  }: FormikProps<CustomerUpdateForm> = useFormikContext();
  const [address, setAddress] = useState<string>(values.street);

  const handleSelectPlace = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const addressComponents = results[0]?.address_components;

      if (addressComponents) {
        const postalCodePart = addressComponents.find((addressComponent) =>
          addressComponent.types.includes('postal_code')
        );
        const cityPart = addressComponents.find((addressComponent) => addressComponent.types.includes('locality'));
        const countryPart = addressComponents.find((addressComponent) => addressComponent.types.includes('country'));

        setAddress(address.split(',')[0]);
        setFieldValue('street', address.split(',')[0]);
        setFieldValue('postalCode', postalCodePart?.long_name || '');
        setFieldValue('city', cityPart?.long_name || '');
        setFieldValue('country', countryPart?.short_name || '');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handlePlaceChange = (address: string) => {
    setAddress(address);
    setFieldValue('street', address);
  };

  return (<div className={classes2.modelWrapper}>
    <Typography variant="h5" className={classes2.title}>{t('user:customer_details')}</Typography>

    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} className={styles.gridContainer} style={{justifyContent: 'flex-end'}}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={props.mutationLoading || Object.values(errors).filter(error => !!error).length > 0}
          className={styles.button}
        >
          {t('user:update')}
        </Button>
      </Grid>

      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_company_name')}
            placeholder={t('user:reg_company_name')}
            name="companyName"
            value={values.companyName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.companyName && !!errors.companyName}
            helperText={touched.companyName && errors.companyName}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_first_name')}
            placeholder={t('user:reg_first_name')}
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.firstname && !!errors.firstname}
            helperText={touched.firstname && errors.firstname}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="lastname"
            label={t('user:last_name')}
            placeholder={t('user:last_name')}
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.lastname && !!errors.lastname}
            helperText={touched.lastname && errors.lastname}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="email"
            label={t('user:email')}
            placeholder={t('user:email')}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item sm={1} xs={4}>
          <FormControl variant="filled" fullWidth>
            <InputLabel className={styles.shortInputPos}>{t('user:reg_country_code')}</InputLabel>
            <CountriesPhoneCodesSelect
              empty={t('select_country_code')}
              name="phoneCode"
              value={values.phoneCode}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item sm={3} xs={8}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_phone_num')}
            placeholder={t('user:reg_phone_num')}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={styles.gridContainer}>
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
                  onBlur={handleBlur}
                  value={address || values.street}
                  error={!!touched.street && !!errors.street}
                  helperText={touched.street && errors.street}
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
        <Grid item sm={1} xs={4}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_postal_code')}
            placeholder={t('user:reg_postal_code')}
            name="postalCode"
            value={values.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.postalCode && !!errors.postalCode}
            helperText={touched.postalCode && errors.postalCode}
          />
        </Grid>
        <Grid item sm={3} xs={8}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:city')}
            placeholder={t('user:city')}
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.city && !!errors.city}
            helperText={touched.city && errors.city}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel className={styles.longInputPos}>{t('user:reg_country')}</InputLabel>
            <CountriesSelect
              empty={t('select_country')}
              value={values.country}
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  </div>);
}

export default EditCustomerDetails;