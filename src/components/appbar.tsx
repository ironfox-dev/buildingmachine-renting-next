import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import barStyle from './style';

const useStyles = makeStyles(barStyle);

const Appbar = ({ isAuth = true }: { isAuth: boolean }): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <img src="/images/logo-black.png" className={classes.logo} />
        {isAuth && (
          <div className={classes.rightPanel}>
            <p className={classes.firstText}>{t('auth:cornerTitle')}</p>
            <p className={classes.secondPhone}>{t('auth:flexcavoNum')}</p>
          </div>
        )}
      </AppBar>
    </div>
  );
};

export default Appbar;
