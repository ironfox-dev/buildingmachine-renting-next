// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../layouts/theme';

const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&types=address&libraries=places`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Cookies handling */}
          <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="5580296f-ee4c-4e61-94b0-858fe7d75cb2" data-blockingmode="auto" type="text/javascript"></script>
          {/* Google Tag Manager */}
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${process.env.GTM_AUTH_KEY}&gtm_preview=${process.env.GTM_ENV}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T8C5DCJ');`,
          }} />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color={theme.palette.primary.main} />
        </Head>
        <body style={{ backgroundColor: theme.palette.grey[100] }}>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-T8C5DCJ&gtm_auth=${process.env.GTM_AUTH_KEY}&gtm_preview=${process.env.GTM_ENV}&gtm_cookies_win=x"
                  height="0" width="0" style="display:none;visibility:hidden"
                ></iframe>`,
            }}
          />

          <Main />
          <NextScript />
          <script src={GOOGLE_API_URL} />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/7649841.js"
          ></script>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
