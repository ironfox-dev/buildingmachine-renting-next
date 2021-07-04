import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormikProps, FormikValues } from 'formik';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './company-details.styles';
import countryCodes from '~/constants/countryPhoneCodes';

const CompanyDetails = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}: FormikProps<FormikValues>): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        1. {t('order:firmname_address')}
      </Typography>

      <TextField
        required
        type="text"
        variant="outlined"
        label={t('order:company')}
        name="companyName"
        className={classes.companyName}
        value={values.companyName}
        error={errors.companyName && (touched.companyName as boolean)}
        helperText={errors.companyName && touched.companyName && errors.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <RadioGroup row className={classes.gender} name="gender" value={values.gender} onChange={handleChange}>
        <FormControlLabel value="male" label={t('order:male')} control={<Radio color="primary" />} />
        <FormControlLabel value="female" label={t('order:female')} control={<Radio color="primary" />} />
      </RadioGroup>

      <TextField
        required
        type="text"
        variant="outlined"
        label={t('order:first_name')}
        name="firstName"
        className={classes.firstName}
        value={values.firstName}
        error={errors.firstName && (touched.firstName as boolean)}
        helperText={errors.firstName && touched.firstName && errors.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextField
        required
        type="text"
        variant="outlined"
        label={t('order:last_name')}
        name="lastName"
        className={classes.lastName}
        value={values.lastName}
        error={errors.lastName && (touched.lastName as boolean)}
        helperText={errors.lastName && touched.lastName && errors.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextField
        required
        type="email"
        variant="outlined"
        label={t('order:email')}
        name="email"
        className={classes.email}
        value={values.email}
        error={errors.email && (touched.email as boolean)}
        helperText={errors.email && touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextField
        select
        type="number"
        variant="outlined"
        label={t('order:country_code_phone')}
        name="phoneCode"
        className={classes.phoneCode}
        value={values.phoneCode}
        error={errors.phoneCode && (touched.phoneCode as boolean)}
        helperText={errors.phoneCode && touched.phoneCode && errors.phoneCode}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {Object.values(countryCodes)
          .sort()
          .map((code) => (
            <MenuItem key={code} value={code}>
              +{code}
            </MenuItem>
          ))}
      </TextField>

      <TextField
        required
        type="number"
        variant="outlined"
        label={t('order:phone_number')}
        name="phoneNumber"
        className={classes.phoneNumber}
        value={values.phoneNumber}
        error={errors.phoneNumber && (touched.phoneNumber as boolean)}
        helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default CompanyDetails;
