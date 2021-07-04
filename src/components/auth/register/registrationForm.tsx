/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, IconButton, RadioGroup, InputLabel, Select } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { FormikProps, useFormikContext } from 'formik';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { Trans, useTranslation } from 'react-i18next';

import { RegistrationForm } from '../auth.interfaces';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import {
  CssTextField,
  CssFormControlLabel,
  CssRadio,
  CssCheckbox,
  CountriesSelect,
  CountriesPhoneCodesSelect,
} from '~/shared/index';
import regStyles from './register.style';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);
const useStyles = makeStyles(regStyles);

const Register = (props): ReactElement => {
  const classes = useStylesButtonCustom();
  const styles = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  }: FormikProps<RegistrationForm> = useFormikContext();
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
      <p className={styles.subTitle}>{t('user:reg_subheader1')}</p>
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={12} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_company_name')}
            placeholder={t('user:reg_company_name')}
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            error={!!touched.companyName && !!errors.companyName}
            helperText={touched.companyName && errors.companyName}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <PlacesAutocomplete
            value={address}
            onChange={handlePlaceChange}
            onSelect={handleSelectPlace}
            googleCallbackName="googleMapsCallbackFunc"
            searchOptions={{
              componentRestrictions: { country: ['DE'] },
            }}
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
        <Grid item sm={2} xs={4}>
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
            error={!!touched.postalCode && !!errors.postalCode}
            helperText={touched.postalCode && errors.postalCode}
          />
        </Grid>
        <Grid item sm={4} xs={8}>
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
        <Grid item sm={6} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel className={styles.longInputPos}>{t('user:reg_country')}</InputLabel>
            <CountriesSelect
              empty={t('user:reg_country')}
              value={values.country}
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.country && !!errors.country}
              required
              disabled
            />
          </FormControl>
        </Grid>
      </Grid>
      <p className={styles.subTitle}>{t('user:reg_subheader2')}</p>
      <div className={styles.radioPanel}>
        <FormControl>
          <RadioGroup defaultValue="male" className={styles.radioDisplay}>
            <CssFormControlLabel value="male" control={<CssRadio />} label={t('user:reg_male')} />
            <CssFormControlLabel value="female" control={<CssRadio />} label={t('user:reg_female')} />
          </RadioGroup>
        </FormControl>
      </div>

      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={6} xs={12}>
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
            error={!!touched.firstname && !!errors.firstname}
            helperText={touched.companyName && errors.firstname}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
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
            error={!!touched.lastname && !!errors.lastname}
            helperText={touched.lastname && errors.lastname}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
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
        <Grid item sm={2} xs={4}>
          <FormControl variant="filled" fullWidth>
            <InputLabel className={styles.shortInputPos}>{t('user:reg_country_code')}</InputLabel>
            <CountriesPhoneCodesSelect
              empty={t('select_country_code')}
              name="phoneCode"
              value={values.phoneCode}
              onChange={handleChange}
              error={!!touched.phoneCode && !!errors.phoneCode}
              disabled
            />
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={8}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('user:reg_phone_num')}
            placeholder={t('user:reg_phone_num')}
            onChange={handleChange}
            name="phone"
            error={!!touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={t('user:position')}
            placeholder={t('user:position')}
            name="position"
            value={values.position}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <p className={styles.subTitle}>{t('user:reg_subheader3')}</p>
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={6} xs={12}>
          <CssTextField
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
            variant="filled"
            fullWidth
            label={t('user:password')}
            placeholder={t('user:password')}
            name="password"
            value={values.password}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CssTextField
            InputProps={{ classes, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={t('user:repeat_password')}
            placeholder={t('user:repeat_password')}
            name="passwordAgain"
            value={values.passwordAgain}
            onChange={handleChange}
            autoComplete="new-password-again"
            type="password"
            error={!!touched.passwordAgain && !!errors.passwordAgain}
            helperText={touched.passwordAgain && errors.passwordAgain}
          />
        </Grid>
      </Grid>
      <p className={styles.subTitle}>{t('user:reg_subheader4')}</p>
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item sm={8}>
          <CssFormControlLabel control={<CssCheckbox checked />} label={t('user:reg_advantage1')} />
        </Grid>
        <Grid item sm={8}>
          <CssFormControlLabel control={<CssCheckbox checked />} label={t('user:reg_advantage2')} />
        </Grid>
        <Grid item sm={8}>
          <CssFormControlLabel control={<CssCheckbox checked />} label={t('user:reg_advantage3')} />
        </Grid>
      </Grid>

      <div className={styles.seperateLine}></div>

      <div className={styles.lastPanel}>
        <FormControl className={styles.formPos} required error={!!errors.acceptTerms}>
          <Grid container>
            <Grid item xs={1}>
              <CssCheckbox
                checked={values.acceptTerms}
                onChange={() => setFieldValue('acceptTerms', !values.acceptTerms)}
              />
            </Grid>
            <Grid item xs={11}>
              <p className={styles.checkboxLabel}>
                <Trans
                  defaults={t('user:reg_agreement1')}
                  components={{ termsLink: <Link href="" />, dataLink: <Link href="" /> }}
                />
              </p>
            </Grid>
          </Grid>
          <FormHelperText className={styles.formHelperPos}>{touched.acceptTerms && errors.acceptTerms}</FormHelperText>
        </FormControl>

        <FormControl className={styles.formPos} required error={!!errors.confirmIsCompany}>
          <Grid container>
            <Grid item xs={1}>
              <CssCheckbox
                checked={values.confirmIsCompany}
                onChange={() => setFieldValue('confirmIsCompany', !values.confirmIsCompany)}
              />
            </Grid>
            <Grid item xs={11}>
              <p className={styles.checkboxLabel}>{t('user:reg_agreement2')}</p>
            </Grid>
          </Grid>
          <FormHelperText className={styles.formHelperPos}>
            {touched.confirmIsCompany && errors.confirmIsCompany}
          </FormHelperText>
        </FormControl>
      </div>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={props.mutationLoading}
        className={styles.button}
      >
        {t('user:join_now')}
      </Button>
    </form>
  );
};

export default Register;
