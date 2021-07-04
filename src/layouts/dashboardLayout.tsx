/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';

import { dashboardLayoutTheme } from './layout.style';
import Appbar from '~/components/appbar';
import { Logout } from '~/components/auth/login/login';
import Sidebar from '~/components/sidebar/sidebar';
import { useAccountInfoQuery } from '~/graphql/graphql';
import clientConfig from '~/components/client_config.json';

const useStyles = makeStyles(dashboardLayoutTheme);

export default function Layout({ children, headline = null, title = 'Flexcavo App' }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data } = useAccountInfoQuery();
  const [menuView, setMenuView] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuView(event.currentTarget);
  };

  const handleClose = () => {
    setMenuView(null);
  };

  let accountName = '';
  if (data?.getAccount?.users) {
    accountName = `${data.getAccount.users[0].firstname} ${data.getAccount.users[0].lastname}`;
  }

  return (
    <>
      <Head key="application-header">
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={classes.root}>
        <Appbar isAuth={false} />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            {!(headline === null || headline === '') && (
              <Box p={2} display="flex" flexDirection="row" alignItems="center">
                {headline && (
                  <Typography variant="h4" component="h1">
                    {headline}
                  </Typography>
                )}
              </Box>
            )}
            {children}
          </div>
        </main>
        <div className={classes.accountPanel}>
          <img src={`/images/customer_logo/${clientConfig.logo}`} className={classes.accountLogo} alt="customer-logo" />
          <Typography className={classes.accountIcon}>{accountName.charAt(0)}</Typography>
          <Button className={classes.accountButton} onClick={handleClick}>
            {accountName}
            <ExpandMoreIcon />
          </Button>
          <Menu
            className={classes.accountMenu}
            anchorEl={menuView}
            keepMounted
            open={Boolean(menuView)}
            onClose={handleClose}
          >
            <MenuItem className={classes.accountMenuItem}>
              <Link href="/settings/account" passHref>
                {t('general:menu_items.account.title')}
              </Link>
            </MenuItem>
            <MenuItem onClick={Logout}>{t('general:menu_items.logout.title')}</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}
