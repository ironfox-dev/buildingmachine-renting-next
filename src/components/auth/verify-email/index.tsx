/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect } from 'react';
import { Button, Link, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import logStyle from '../login/login.style';
import { useVerifyEmailMutation, useResendVerificationEmailMutation } from '~/graphql/graphql';

const useStyles = makeStyles(logStyle);

interface VerifyEmailProps {
  token?: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps): ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [
    verify,
    { loading: verificationLoading, error: verificationError, data: verificationData },
  ] = useVerifyEmailMutation();

  const [
    resendVerificationEmail,
    { loading: resendVerificationLoading, data: resendVerificationData },
  ] = useResendVerificationEmailMutation();

  const emailSent = resendVerificationData?.resendVerificationEmail?.emailSent;

  const sendVerificationEmailAgain = () => {
    const email = localStorage.getItem('flexcavoEmail');

    resendVerificationEmail({
      variables: {
        email,
      },
    });
  };

  useEffect(() => {
    if (token) {
      verify({
        variables: {
          token,
        },
      });
    }
  }, []);

  if (token) {
    return (
      <div className={styles.verifywrap}>
        {verificationLoading && <h2>{t('user:loading')}</h2>}
        {!!verificationError && <h2>{verificationError}</h2>}
        {verificationData?.verifyEmail?.isSuccessful && (
          <>
            <h2>{t('user:verify_success')}</h2>
            <Link href="/login" className={styles.link}>
              {t('user:verify_login')}
            </Link>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.verifywrap}>
        <h2>{t('user:verify_email')}</h2>
        <h4>{t('user:verify_send')}</h4>

        {emailSent ? (
          <h4>{t('user:check_inbox')}</h4>
        ) : (
          <Button
            className={styles.buttonVerify}
            variant="contained"
            color="primary"
            disabled={resendVerificationLoading}
          >
            {t('user:verify_resend')}
          </Button>
        )}
      </div>
    );
  }
};

export default VerifyEmail;
