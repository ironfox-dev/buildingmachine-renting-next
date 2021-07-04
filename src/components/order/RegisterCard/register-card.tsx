import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import CheckIcon from '@material-ui/icons/Check';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import useStyles from './register-card.styles';
import { FormikProps, FormikValues } from 'formik';

const RegisterCard = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}: FormikProps<FormikValues>): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        5. {t('order:register_for_free')}
      </Typography>

      <Card variant="outlined" className={classes.card}>
        <Typography variant="h6" className={classes.subHeader}>
          {t('order:advantage_flexcavo_member')}
        </Typography>

        {['quick_order', 'exclusive_discounts', 'view_invoices_orders', 'firststep_intelligent_fleet'].map((item) => (
          <Grid key={item} container>
            <CheckIcon className={classes.checkIcon} />
            <Typography variant="body1" gutterBottom>
              {t(`order:${item}`)}
            </Typography>
          </Grid>
        ))}

        {!values.skipRegistration && (
          <>
            <Typography variant="h6" className={classes.subHeader}>
              {t('order:set_password_registration')}
            </Typography>

            <TextField
              variant="outlined"
              name="password"
              placeholder={t('order:enter_password')}
              type={showPassword ? 'text' : 'password'}
              className={classes.password}
              value={values.password}
              error={errors.password && (touched.password as boolean)}
              helperText={errors.password && touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        )}

        <Link className={classes.link} onClick={() => setFieldValue('skipRegistration', !values.skipRegistration)}>
          {values.skipRegistration ? t('order:i_want_to_register') : t('order:not_register')}
        </Link>
      </Card>
    </>
  );
};

export default RegisterCard;
