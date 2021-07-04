/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Appbar from '~/components/appbar';
import { authLayoutTheme } from './layout.style';

const useStyles = makeStyles(authLayoutTheme);

export default function Layout({ children, headline = null, title = 'Flexcavo' }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Head key="application-header">
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={classes.root}>
        <Appbar isAuth={false} />
        <div className={classes.headofContent}>
          {title.match('Regist') && (
            <p className={classes.subtitleofContent}>
              {t('user:reg_top_question')}
              <Link href="/login">
                <a className={classes.linkTitle}>{t('user:register')}</a>
              </Link>
            </p>
          )}
        </div>
        <main
          className={classes.content}
          style={title.match('Regist') && { width: '43.125rem', marginBottom: '17rem' }}
        >
          {!title.match('Regist') && <img src="/images/logo-black.png" className={classes.panelLogo} />}
          <p className={classes.headline}>{headline}</p>
          {children}
        </main>
      </div>
    </>
  );
}
