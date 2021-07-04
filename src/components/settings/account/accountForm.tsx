/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormikProps, useFormikContext } from 'formik';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import { AccountInfoForm } from '../settings.interfaces';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useTranslation } from 'react-i18next';
import accountStyle from './account.style';
import { FormControl, InputLabel, RadioGroup, Select, IconButton } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';

import { CssTextField, CssInput, CssFormControlLabel, CssRadio } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';

const useStyles = makeStyles(accountStyle);
const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const countryCodeList = [' ', '+123', '+456', '+789']; //Get this data from database

const accountForm = (props): ReactElement => {
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const { t } = useTranslation();
  const [address, setAddress] = useState<string>('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [resetPassword, setResetPassword] = React.useState(false);

  const { getAccount, mutationLoading } = props;
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  }: FormikProps<AccountInfoForm> = useFormikContext();

  const accountName = getAccount?.users[0].firstname + ' ' + getAccount?.users[0].lastname;

  const isValChanged = () => {
    return !(
      values.companyName === getAccount?.name &&
      values.email === getAccount?.users[0].email &&
      values.firstname === getAccount?.users[0].firstname &&
      values.lastname === getAccount?.users[0].lastname &&
      values.position === getAccount?.users[0].position &&
      values.street === getAccount?.addresses[0].street &&
      values.city === getAccount?.addresses[0].city &&
      values.postalCode === getAccount?.addresses[0].postalCode
    );
  };

  useEffect(() => {
    const user = getAccount?.users[0];
    const address = getAccount?.addresses[0];

    if (getAccount?.name) {
      setFieldValue('companyName', getAccount?.name);
    }

    if (user) {
      setFieldValue('email', user.email);
      setFieldValue('firstname', user.firstname);
      setFieldValue('lastname', user.lastname);
      setFieldValue('position', user.position);
    }

    if (address) {
      setFieldValue('street', address.street);
      setFieldValue('city', address.city);
      setFieldValue('postalCode', address.postalCode);
      setAddress(address.street);
    }
  }, [getAccount]);

  const handleSelectPlace = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const addressComponents = results[0]?.address_components;

      if (addressComponents) {
        const postalCodePart = addressComponents.find((addressComponent) =>
          addressComponent.types.includes('postal_code')
        );
        const cityPart = addressComponents.find((addressComponent) => addressComponent.types.includes('locality'));

        setAddress(address.split(',')[0]);
        setFieldValue('street', address.split(',')[0]);
        setFieldValue('postalCode', postalCodePart?.long_name || '');
        setFieldValue('city', cityPart?.long_name || '');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handlePlaceChange = (address: string) => {
    setAddress(address);
    setFieldValue('street', address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.namePanel}>
        <p className={styles.namePara}>{accountName}</p>
        <Button
          className={styles.updateButton}
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isValChanged() || mutationLoading}
        >
          Update
        </Button>
      </div>
      <div className={styles.dataPanel}>
        <p className={styles.infoPara}>{t('user:account_info')}</p>
        <div className={styles.radioPanel}>
          <FormControl>
            <RadioGroup defaultValue="male" className={styles.radioDisplay}>
              <CssFormControlLabel value="male" control={<CssRadio />} label={t('user:reg_male')} />
              <CssFormControlLabel value="female" control={<CssRadio />} label={t('user:reg_female')} />
            </RadioGroup>
          </FormControl>
        </div>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <CssTextField
              variant="filled"
              fullWidth
              required
              label={t('user:company_name')}
              placeholder={t('user:company_name')}
              name="companyName"
              value={values.companyName || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.companyName && !!errors.companyName}
              helperText={touched.companyName && errors.companyName}
              InputProps={{
                classes,
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <PlacesAutocomplete
              value={address}
              onChange={handlePlaceChange}
              onSelect={handleSelectPlace}
              googleCallbackName="googleMapsCallbackFunc"
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div style={{ position: 'relative' }}>
                  <CssTextField
                    {...getInputProps()}
                    variant="filled"
                    fullWidth
                    required
                    label={t('user:street')}
                    placeholder={t('user:street')}
                    name="street"
                    autoComplete="new-street"
                    value={address || values.street}
                    error={!!touched.street && !!errors.street}
                    helperText={touched.street && errors.street}
                    InputProps={{
                      classes,
                      disableUnderline: true,
                    }}
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
              variant="filled"
              fullWidth
              required
              label={t('user:city')}
              placeholder={t('user:city')}
              name="city"
              value={values.city}
              onChange={handleChange}
              error={!!touched.city && !!errors.city}
              helperText={touched.city && errors.city}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CssTextField
              variant="filled"
              fullWidth
              required
              label={t('user:first_name')}
              placeholder={t('user:first_name')}
              name="firstname"
              value={values.firstname || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.firstname && !!errors.firstname}
              helperText={touched.firstname && errors.firstname}
              InputProps={{
                classes,
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CssTextField
              variant="filled"
              fullWidth
              required
              name="lastname"
              label={t('user:last_name')}
              placeholder={t('user:last_name')}
              value={values.lastname || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.lastname && !!errors.lastname}
              helperText={touched.lastname && errors.lastname}
              InputProps={{
                classes,
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CssTextField
              variant="filled"
              fullWidth
              label={t('user:position')}
              placeholder={t('user:position')}
              name="position"
              value={values.position || ''}
              onChange={handleChange}
              InputProps={{
                classes,
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CssTextField
              variant="filled"
              fullWidth
              required
              name="email"
              label={t('user:email')}
              placeholder={t('user:email')}
              value={values.email || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              InputProps={{
                classes,
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl variant="filled" className={styles.shortInputComponent}>
              <InputLabel className={styles.shortInputPos}>{t('user:reg_country_code')}</InputLabel>
              <Select native label={t('user:reg_country_code')} input={<CssInput />}>
                {countryCodeList.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <CssTextField
              className={styles.phoneField}
              InputProps={{ classes, disableUnderline: true }}
              variant="filled"
              required
              label={t('user:reg_phone_num')}
              placeholder={t('user:reg_phone_num')}
              name="phonenum"
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CssTextField
              InputProps={{ classes, disableUnderline: true }}
              variant="filled"
              fullWidth
              label={t('user:postal_code')}
              placeholder={t('user:postal_code')}
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              error={!!touched.postalCode && !!errors.postalCode}
              helperText={touched.postalCode && errors.postalCode}
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.passwordPanel}>
        <p className={styles.passwordPara}>{t('user:password')}</p>
        <Button
          className={styles.passwordButton}
          variant="contained"
          color="default"
          disabled={resetPassword}
          onClick={() => setResetPassword(true)}
        >
          {t('user:reset_password')}
        </Button>
        {resetPassword && (
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <CssTextField
                variant="filled"
                fullWidth
                label={t('user:password')}
                placeholder={t('user:password')}
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                InputProps={{
                  classes,
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        edge="end"
                        className={styles.iconColor}
                      >
                        {values.password.length ? showPassword ? <VisibilityOff /> : <Visibility /> : ''}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                variant="filled"
                fullWidth
                label={t('user:repeat_password')}
                placeholder={t('user:repeat_password')}
                name="passwordAgain"
                type="passwordAgain"
                autoComplete="new-password-again"
                value={values.passwordAgain}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.passwordAgain && !!errors.passwordAgain}
                helperText={touched.passwordAgain && errors.passwordAgain}
              />
            </Grid>
          </Grid>
        )}
      </div>
    </form>
  );
};

export default accountForm;
