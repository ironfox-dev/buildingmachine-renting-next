import React from 'react';
import * as _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Checkbox, Typography, Grid, Button, Link } from '@material-ui/core';
import { Form, useFormikContext, FormikProps } from 'formik';
import { FormContainerProps, FormValues } from './interfaces/interfaces';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { useTranslation } from 'react-i18next';
import { CssTextField } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import locationStyle from './location.style';

/**
 * TODO Extract "LocationFormContainer" container from this mixed component
 */

const useStyles = makeStyles(locationStyle);

const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const LocationFormComponent = ({ snackbar, setSnackbar }: FormContainerProps): React.ReactElement => {
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const { t } = useTranslation();

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldTouched,
  }: FormikProps<FormValues> = useFormikContext();

  const [address, setAddress] = React.useState(values.street);

  React.useEffect(() => {
    setAddress(values.street);
  }, [values.street]);

  const handlePlaceChange = (address: string) => {
    setAddress(address.split(',')[0]);
    setFieldValue('street', address.split(',')[0]);
  };

  const handleSelectPlace = (address: string): void => {
    geocodeByAddress(address)
      .then((results) => {
        const addressComponents = _.get(_.head(results), ['address_components']);

        const postalCodeData = _.filter(addressComponents, function (o) {
          return _.includes(o.types, 'postal_code');
        });

        const cityData = _.filter(addressComponents, function (o) {
          return _.includes(o.types, 'locality');
        });

        setAddress(address.split(',')[0]);
        setFieldValue('street', address.split(',')[0]);
        setFieldValue('postalCode', _.get(postalCodeData, `${[0]}.long_name`, ''));
        setFieldValue('city', _.get(cityData, `${[0]}.long_name`, ''));
      })
      .catch((error) => console.error('Error', error));
  };

  const checkIsError = (field: string): boolean => {
    return Boolean(errors[field] && touched[field]);
  };

  const checkOperatingHourError = (index: number, field: string): boolean => {
    return Boolean(
      _.get(errors, ['weeklyOperatingHours', index, field]) && _.get(touched, ['weeklyOperatingHours', index, field])
    );
  };

  const getNumber = (val: string): string => {
    while (val.indexOf(t('euro')) > -1) {
      val = val.substr(0, val.length - 1);
    }
    return val;
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="none">
      <div className={styles.namePanel}>
        <Link href="\locations" className={styles.linkPanel}>
          {'<  '}
          {t('user:rental_park')}s
        </Link>
        <p className={styles.namePara}>{values.name}</p>
        <Button className={styles.updateButton} variant="contained" color="primary" type="submit">
          {values.id ? 'Update' : 'Create'}
        </Button>
      </div>
      <Box p={4}>
        <Snackbar
          open={snackbar.isOpen}
          message={snackbar.message}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
          classes={{
            root: snackbar.type === 'success' ? styles.successSnackbar : styles.errorSnackbar,
          }}
        />
        <Box className={styles.boxStyle} p={3}>
          <Typography variant="h5" gutterBottom>
            {t('user:rental_park')}
          </Typography>
          <Grid container spacing={2} className={styles.gridStyle}>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="name"
                label={t('name') + ' ' + t('user:rental_park')}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                error={checkIsError('name')}
                helperText={checkIsError('name') ? errors.name : ''}
                autoComplete="name"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <PlacesAutocomplete
                value={address}
                onChange={handlePlaceChange}
                onSelect={handleSelectPlace}
                googleCallbackName="myCallbackFunc"
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div className={styles.streetPanel}>
                    <CssTextField
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                      InputProps={{ classes, disableUnderline: true }}
                      fullWidth
                      id="filled-required"
                      label={t('user:reg_street')}
                      variant="filled"
                      value={address || values.street}
                      onBlur={handleBlur}
                      error={checkIsError('street')}
                      helperText={checkIsError('street') ? errors.street : ''}
                      autoComplete="street"
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
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="city"
                label={t('user:city')}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                error={checkIsError('city')}
                helperText={checkIsError('city') ? errors.city : ''}
                autoComplete="city"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="postalCode"
                label={t('user:reg_postal_code')}
                value={values.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                error={checkIsError('postalCode')}
                helperText={checkIsError('postalCode') ? errors.postalCode : ''}
                autoComplete="postalCode"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="telephone"
                value={values.telephone}
                label={t('user:phone')}
                variant="filled"
                onChange={handleChange}
                onBlur={handleBlur}
                error={checkIsError('telephone')}
                helperText={checkIsError('telephone') ? errors.telephone : ''}
                autoComplete="telephone"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.boxStyle} p={3}>
          <Typography variant="h5" gutterBottom className={styles.typographyStyle}>
            {t('fuel_price')}
          </Typography>
          <Grid container spacing={2} className={styles.gridStyle}>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="gasolinePrice"
                label={t('price_gasoline')}
                value={values.gasolinePrice + t('euro')}
                variant="filled"
                onChange={(e) => setFieldValue('gasolinePrice', getNumber(e.target.value))}
                onBlur={handleBlur}
                error={checkIsError('gasolinePrice')}
                helperText={checkIsError('gasolinePrice') ? errors.gasolinePrice : ''}
                autoComplete="gasolinePrice"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                fullWidth
                id="dieselPrice"
                label={t('price_diesel')}
                value={values.dieselPrice + t('euro')}
                variant="filled"
                onChange={(e) => setFieldValue('dieselPrice', getNumber(e.target.value))}
                onBlur={handleBlur}
                error={checkIsError('dieselPrice')}
                helperText={checkIsError('dieselPrice') ? errors.dieselPrice : ''}
                autoComplete="dieselPrice"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.boxStyle} p={3}>
          <Typography variant="h5" gutterBottom className={styles.operatingTypographyStyle}>
            {t('operating_hours')}
          </Typography>
          {_.map(values.weeklyOperatingHours, (value, index) => (
            <Grid container spacing={4} key={index}>
              <Grid lg={2} md={3} sm={4} xs={12} container item alignItems="center">
                <Checkbox
                  checked={value.open}
                  onChange={(): void => {
                    if (value.weekDay === 'sunday') {
                      return;
                    }
                    setFieldValue(`weeklyOperatingHours[${index}].open`, !value.open);
                  }}
                  name="open"
                  color="primary"
                />
                <Typography variant="subtitle1" className={styles.typographyStyle}>
                  {t(value.weekDay)}
                </Typography>
              </Grid>
              {value.open && (
                <Grid sm={8} xs={12} item>
                  <CssTextField
                    InputProps={{ classes, disableUnderline: true }}
                    variant="filled"
                    className={styles.timeFieldStyle}
                    error={checkOperatingHourError(index, 'startTime')}
                    id="time"
                    name="startTime"
                    label={t('rental:open')}
                    value={value.startTime || ''}
                    helperText={
                      checkOperatingHourError(index, 'startTime')
                        ? _.get(errors, ['weeklyOperatingHours', index, 'startTime'])
                        : ''
                    }
                    onChange={(event): void => {
                      setFieldValue(`weeklyOperatingHours[${index}].startTime`, event.target.value);
                    }}
                    onBlur={() => setFieldTouched(`weeklyOperatingHours[${index}].startTime`, true)}
                  />
                  <CssTextField
                    InputProps={{ classes, disableUnderline: true }}
                    variant="filled"
                    className={styles.timeFieldStyle}
                    error={checkOperatingHourError(index, 'endTime')}
                    id="time"
                    name="endTime"
                    label={t('rental:shutdown')}
                    value={value.endTime || ''}
                    helperText={
                      checkOperatingHourError(index, 'endTime')
                        ? _.get(errors, ['weeklyOperatingHours', index, 'endTime'])
                        : ''
                    }
                    onChange={(event): void => {
                      setFieldValue(`weeklyOperatingHours[${index}].endTime`, event.target.value);
                    }}
                    onBlur={() => setFieldTouched(`weeklyOperatingHours[${index}].endTime`, true)}
                  />
                </Grid>
              )}
            </Grid>
          ))}
          <Box display="flex" className={styles.checkPanel} alignItems="center">
            <Checkbox checked color="primary" />
            <Typography variant="subtitle1">{t('close_on_holidays')}</Typography>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default LocationFormComponent;
