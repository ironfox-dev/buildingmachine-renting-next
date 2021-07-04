import React, { ReactElement, useEffect } from 'react';
import { Button, makeStyles, Grid, Link, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useVerifyResetPasswordMutation, useResetPasswordMutation } from '~/graphql/graphql';
import logStyle from '../login/login.style';
import { CssTextField } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import { ResetPasswordProps } from '../auth.interfaces';
import { yupEqualTo } from '~/utils/validation';
import { passwordCriteria } from '~/constants/common';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);
const useStyles = makeStyles(logStyle);

Yup.addMethod(Yup.string, 'equalTo', yupEqualTo);

const ResetPassword = ({ token }: ResetPasswordProps): ReactElement => {
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const [showPassword, setShowPassword] = React.useState(false);
  const { t } = useTranslation();

  const [
    verifyResetPassword,
    { loading: verifyResetPasswordLoading, error: verifyResetPasswordError, data: verifyResetPasswordData },
  ] = useVerifyResetPasswordMutation();

  const [
    resetPassword,
    { loading: resetPasswordLoading, error: resetPasswordError, data: resetPasswordData },
  ] = useResetPasswordMutation();

  const isVerifyResetPasswordSuccessful = verifyResetPasswordData?.verifyResetPassword?.isSuccessful;
  const isResetPasswordSuccessful = resetPasswordData?.resetPassword?.isSuccessful;

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8)
      .required(t('user:password_required'))
      .matches(passwordCriteria, t('user:password_criteria')),
    passwordAgain: Yup.string().equalTo(Yup.ref('password'), t('user:password_should_match')).required(),
  });

  useEffect(() => {
    if (!!token && !verifyResetPasswordLoading) {
      checkResetPasswordToken();
    }
  }, [token]);

  const checkResetPasswordToken = async () => {
    try{
      await verifyResetPassword({
        variables: {
          token,
        },
      });
    }catch(err){
      console.log(err);
    }
  }

  if (!token) {
    return <Typography color="error" variant="h4" className={styles.resetPasswordSubtitle}>{t('user:wrong_happen')}</Typography>;
  } else {
    if (verifyResetPasswordLoading) {
      return <Typography color="primary" variant="h4" className={styles.resetPasswordSubtitle}>{t('user:verify_token')}</Typography>;
    } else if (verifyResetPasswordError) {
      return <Typography color="error" variant="h4" className={styles.resetPasswordSubtitle}>{t('user:wrong_token')}</Typography>;
    } else {
      return (
        <div className={styles.authwrap}>
          {isResetPasswordSuccessful && (
            <div>
              <Typography color="secondary" variant="h4" className={styles.resetPasswordSubtitle}>{t('user:password_changed')}</Typography>
              <Link href="/login">
                <a className={styles.regist}>{t('user:log_page')}</a>
              </Link>
            </div>
          )}

          {isVerifyResetPasswordSuccessful && (
            <Formik
              initialValues={{
                password: '',
                passwordAgain: '',
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  await resetPassword({
                    variables: {
                      user: {
                        token,
                        password: values.password,
                      },
                    },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {({ values, errors, touched, dirty, isValid, handleChange, handleSubmit }) => (
                <form className={styles.authform} onSubmit={handleSubmit}>
                  {!!resetPasswordError && <Alert severity="error">{resetPasswordError.message}</Alert>}

                  <Grid container justify="center">
                    <Grid container item direction="column">
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
                        className={styles.passwordFieldReset}
                        style={{ marginTop: '26.5px' }}
                        margin="normal"
                        variant="filled"
                        label={t('user:enter_password')}
                        placeholder={t('user:enter_password')}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />

                      <CssTextField
                        InputProps={{ classes, disableUnderline: true }}
                        className={styles.passwordFieldReset}
                        margin="normal"
                        variant="filled"
                        label={t('user:repeat_new_password')}
                        placeholder={t('user:repeat_new_password')}
                        name="passwordAgain"
                        value={values.passwordAgain}
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        error={!!touched.passwordAgain && !!errors.passwordAgain}
                        helperText={touched.passwordAgain && errors.passwordAgain}
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={resetPasswordLoading || !dirty || !isValid}
                        className={styles.buttonReset}
                      >
                        {t('user:register')}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          )}
        </div>
      );
    }
  }
};

export default ResetPassword;
