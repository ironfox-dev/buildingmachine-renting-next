import React, { ReactElement, useEffect } from 'react';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useLoginMutation } from '~/graphql/graphql';
import { useTranslation } from 'react-i18next';
import logStyle from './login.style';
import { CssTextField } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import * as Yup from 'yup';
import { setCookie, removeCookie } from '~/utils/cookie';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);
const useStyles = makeStyles(logStyle);

const Login = (): ReactElement => {
  const [login, { error: mutationError, data: mutationData }] = useLoginMutation();
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const [showPassword, setShowPassword] = React.useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const loginUser = mutationData?.loginUser;
    if (!mutationError && loginUser && loginUser.isEmailVerified && loginUser.token) {
      setCookie('flexcavoToken', loginUser.token);
      localStorage.setItem('userId', loginUser.id);
      Router.replace('/dashboard');
    } else if (!mutationError && loginUser && !loginUser.isEmailVerified) {
      localStorage.setItem('flexcavoEmail', loginUser.email);
      Router.replace('/verify-email');
    }
  }, [mutationData]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid eamil').required('Email required'),
    password: Yup.string().min(8).required('Password required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await login({
            variables: {
              user: {
                email: values.email,
                password: values.password,
              },
            },
          });
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5} justify="center">
            <Grid container item direction="column">
              <CssTextField
                InputProps={{ classes, disableUnderline: true }}
                className={styles.emailField}
                variant="filled"
                name="email"
                label={t('user:email')}
                placeholder={t('user:email')}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
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
                className={styles.passwordField}
                variant="filled"
                label={t('user:password')}
                placeholder={t('user:password')}
                name="password"
                value={values.password}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />

              <div className={styles.accountRow}>
                <Link href="/forgot-password">
                  <a className={styles.forgetPassword}>{t('user:forgot_password')}</a>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!values.email.length || !values.password.length}
                  className={styles.buttonLogin}
                >
                  {t('user:register')}
                </Button>
              </div>

              <div className={styles.seperateLine}></div>

              <p className={styles.noAccount}>{t('user:no_account')}</p>
              <Link href="/register">
                <a className={styles.regist}>{t('user:register')}</a>
              </Link>
            </Grid>
          </Grid>
          {!!mutationError && <Alert severity="error">{mutationError.message}</Alert>}
        </form>
      )}
    </Formik>
  );
};

export const Logout = (): void => {
  removeCookie('flexcavoToken');
  localStorage.removeItem('userId');
  Router.replace('/login');
};

export default Login;
