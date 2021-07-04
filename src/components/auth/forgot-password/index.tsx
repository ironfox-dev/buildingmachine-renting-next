/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';

import logStyle from '../login/login.style';
import { validateEmail } from '~/utils/validation';
import { useRequestResetPasswordMutation } from '~/graphql/graphql';
import { CssTextField } from '~/shared/index';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);
const useStyles = makeStyles(logStyle);

const ForgotPassword = (): ReactElement => {
  const styles = useStyles();
  const classes = useStylesButtonCustom();
  const [email, setEmail] = useState<string>('');
  const { t } = useTranslation();

  const [requestResetPassword, { data: requestResetEmailData }] = useRequestResetPasswordMutation();
  const isSuccessful = requestResetEmailData?.requestResetPassword?.isSuccessful;

  const sendResetPasswordEmail = () => {
    requestResetPassword({
      variables: {
        email,
      },
    });
  };

  return (
    <div className={styles.authwrap}>
      <CssTextField
        InputProps={{ classes, disableUnderline: true }}
        className={styles.emailField}
        margin="normal"
        variant="filled"
        name="email"
        label={t('user:enter_email')}
        placeholder={t('user:enter_email')}
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        error={!validateEmail(email) && !!email}
        helperText={!validateEmail(email) && !!email && 'Invalid email address'}
      />

      {isSuccessful === false && <Typography color="primary" align="center">{t('user:reset_password_failure')}</Typography>}
      {isSuccessful && <Typography color="primary" align="center">{t('user:reset_password_email_sent')}</Typography>}

      <div className={styles.accountRow}>
        <Link href="/login">
          <a className={styles.abort}>{t('user:abort')}</a>
        </Link>
        <Button
          className={styles.buttonForgot}
          variant="contained"
          color="primary"
          onClick={sendResetPasswordEmail}
          disabled={!validateEmail(email)}
        >
          {t('user:reset_password')}
        </Button>
      </div>

      <div className={styles.seperateLine}></div>

      <p className={styles.noAccount}>{t('user:no_account')}</p>
      <Link href="/register">
        <a className={styles.regist}>{t('user:register')}</a>
      </Link>
    </div>
  );
};

export default ForgotPassword;
