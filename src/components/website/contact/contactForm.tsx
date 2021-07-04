import React, { ReactElement } from 'react';
import { Button, CircularProgress, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormikProps, useFormikContext } from 'formik';

import { CssTextField } from '~/shared/index';
import { ContactFormInterface } from '../website.interfaces';
import theme from '~/layouts/theme';

import contactStyle from './contact.style';
const useStyles = makeStyles(contactStyle);

import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const ContactForm = ({ status }): ReactElement => {
  const classes = useStyles();
  const inputClasses = useStylesButtonCustom();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  }: FormikProps<ContactFormInterface> = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.contactFormWrap}>
        <Grid
          container
          direction="row"
          spacing={2}
          className={`${classes.contactFormRow} ${classes.contactFormNameRow}`}
        >
          <Grid item sm={6} xs={12}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
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
          <Grid item sm={6} xs={12}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
              variant="filled"
              fullWidth
              required
              label={t('user:last_name')}
              placeholder={t('user:last_name')}
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.lastname && !!errors.lastname}
              helperText={touched.lastname && errors.lastname}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" spacing={2} className={classes.contactFormRow}>
          <Grid item sm={6} xs={12}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
              variant="filled"
              fullWidth
              required
              label={t('user:email')}
              placeholder={t('user:email')}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
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

          <Grid item sm={12} xs={12} className={classes.contactFormRow}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
              variant="filled"
              fullWidth
              required
              label={t('user:company_name')}
              placeholder={t('user:company_name')}
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.company && !!errors.company}
              helperText={touched.company && errors.company}
            />
          </Grid>

          <Grid item sm={12} xs={12} className={classes.contactFormRow}>
            <CssTextField
              InputProps={{ classes: inputClasses, disableUnderline: true }}
              variant="filled"
              fullWidth
              required
              label={t('website:message')}
              placeholder={t('website:message')}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.message && !!errors.message}
              helperText={touched.message && errors.message}
            />
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="body1" className={classes.contactDescription}>
        {t('website:contact_description')}
      </Typography>

      <Grid container alignItems="center" justify={isMobile ? 'center' : 'space-between'}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={status === 'LOADING'}
          size={isMobile ? 'large' : 'small'}
        >
          {t('submit')}
        </Button>

        {status === 'LOADING' && <CircularProgress color="primary" size={20} />}
        {status === 'SUCCESS' && (
          <span className={classes.contactFormSuccess}>{t('website:contact_form_success')}</span>
        )}
        {status === 'ERROR' && <span className={classes.contactFormError}>{t('website:contact_form_error')}</span>}
      </Grid>
    </form>
  );
};

export default ContactForm;
