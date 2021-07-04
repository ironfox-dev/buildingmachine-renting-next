import React, { ReactElement } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import logStyle from '../login/login.style';
import { useResendVerificationEmailMutation } from '~/graphql/graphql';

const useStyles = makeStyles(logStyle);

const Thankyou = (): ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();
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

  return (
    <div className={styles.thankwrap}>
      <h2>{t('user:verify_thanks')}</h2>
      <h4>{t('user:verify_send')}</h4>

      {emailSent ? (
        <h4>{t('user:check_inbox')}</h4>
      ) : (
        <Button
          className={styles.buttonVerify}
          variant="contained"
          color="primary"
          onClick={sendVerificationEmailAgain}
          disabled={resendVerificationLoading}
        >
          {t('user:verify_resend')}
        </Button>
      )}
    </div>
  );
};

export default Thankyou;
