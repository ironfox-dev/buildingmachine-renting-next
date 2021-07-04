import React, { useEffect, ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '../locale/i18n';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'react-dates/lib/css/_datepicker.css';

import ProtectRoute from '../helpers/unprotected-routes';
import theme from '../layouts/theme';
import { Provider } from 'react-redux';
import configureAppStore from '../redux/store/configureStore';
import apolloClient from '~/utils/apollo-client';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false); // <- This makes the state objects mutable which is required my Material UI (anti pattern)

const client = apolloClient();
const store = configureAppStore();

export default function MyApp(props: AppProps): ReactElement {
  new DateFnsUtils({ locale: { code: 'de' } });
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>Flexcavo</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={client}>
          <ProtectRoute>
            <Provider store={store}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Component {...pageProps} />
              </MuiPickersUtilsProvider>
            </Provider>
          </ProtectRoute>
        </ApolloProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
