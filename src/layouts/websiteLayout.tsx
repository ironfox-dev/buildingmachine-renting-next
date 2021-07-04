import React, { ReactElement, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import {
  Button,
  Grid,
  makeStyles,
  CircularProgress,
  Typography,
  Box,
  Container,
  Hidden,
  useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {
  KeyboardArrowDown,
  Phone,
  Event,
  Instagram,
  Facebook,
  LinkedIn,
  Menu,
  Close,
  KeyboardArrowUp,
} from '@material-ui/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import moment from 'moment';
import { getCookie, setCookie } from '~/utils/cookie';

import publicLayoutTheme from './website.style';
import { StyledWhiteTextField } from '../shared/index';
import {
  flexcavoCalendarUrl,
  flexcavoFacebookUrl,
  flexcavoInstagramUrl,
  flexcavoLinkedinUrl,
  faqUrl,
} from '~/constants/flexcavo';
import theme from '~/layouts/theme';
import { useOnClickOutside } from '~/shared/customHooks/useOnClickOutside';

const useStyles = makeStyles(publicLayoutTheme);

const whyFlexcavoMenuItems = [
  {
    title: 'website:functions',
    url: '/functionality',
  },
  {
    title: 'website:rent_from_flexcavo',
    url: '/rent-at-flexcavo',
  },
];

const aboutUsMenuItems = [
  {
    title: 'website:working_at_flexcavo',
    url: '/career',
  },
  {
    title: 'website:about_us',
    url: '/about',
  },
];

const Layout = ({ children, title = 'Flexcavo', showPreFooter = false, hideRentNowButton = false }): ReactElement => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const noneMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const subMenuRef = useRef(null);

  const [currentLanguage, setCurrentLanguage] = React.useState<string>(getCookie('i18nextLng'));

  const [isWhyFlexcavoMenuOpen, setIsWhyFlexcavoMenuOpen] = useState<boolean>(false);
  const [isAboutUsMenuOpen, setIsAboutUsMenuOpen] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [footerContactName, setFooterContactName] = useState<string>('');
  const [footerContactEmail, setFooterContactEmail] = useState<string>('');
  const [formStatus, setFormStatus] = useState<string | null>(null);

  useEffect(() => {
    if (noneMobile) {
      setShowMobileMenu(false);
    }
  }, [noneMobile]);

  useOnClickOutside(subMenuRef, () => {
    setIsAboutUsMenuOpen(false);
    setIsWhyFlexcavoMenuOpen(false);
  });

  const submitContactForm = async () => {
    if (!footerContactEmail || !footerContactName) {
      setFormStatus('MISSING_FIELDS');
      return;
    } else if (!!formStatus) {
      setFormStatus('LOADING');
    }

    try {
      await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/7649841/f31d2188-137b-46a6-8c97-3d98361aa9bc',
        {
          submittedAt: Date.now(),
          fields: [
            {
              name: 'firstname',
              value: footerContactName,
            },
            {
              name: 'email',
              value: footerContactEmail,
            },
          ],
          context: {
            pageUri: router.pathname,
            pageName: title,
          },
        }
      );

      setFormStatus('SUCCESS');
    } catch (err) {
      setFormStatus('ERROR');
    }
  };

  const renderSubMenu = (items: Array<{ title: string; url: string }>) => {
    return (
      <div className={classes.headerSubMenu}>
        {items.map((item, index) => (
          <Link key={`submenu-${item.title}-${index}`} href={item.url}>
            <Box className={`${classes.headerMenuItem} ${classes.headerSubMenuItem}`}>
              <span className={classes.headerMenuItemText}>{t(item.title)}</span>
            </Box>
          </Link>
        ))}
      </div>
    );
  };

  const getLocalizedAsPath = (pathname) => {
    return pathname === '/' ? '/' : `/${t(`url:${pathname.split('/')[1]}`)}`;
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setCookie('i18nextLng', language);
    i18n.changeLanguage(language);
    router.push(router.pathname, getLocalizedAsPath(router.pathname), { locale: language });
  };

  useEffect(() => {
    setCurrentLanguage(router.locale);
    setCookie('i18nextLng', router.locale);
    i18n.changeLanguage(router.locale);
    if (router.locale === 'de') {
      router.push(router.pathname, getLocalizedAsPath(router.pathname), { locale: router.locale });
    }
  }, []);

  return (
    <>
      <Head key="application-header">
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={classes.root}>
        <Box className={classes.header}>
          <Container>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Link href="/">
                <img src="/images/logo.png" className={classes.logo} />
              </Link>

              <Box className={showMobileMenu ? classes.headerMenuWrapOpen : classes.headerMenuWrap}>
                <Grid container direction="row" alignItems="center" className={classes.headerMenu}>
                  <Hidden smUp>
                    <Close onClick={() => setShowMobileMenu(false)} className={classes.closeHeaderMenu} />
                  </Hidden>
                  <div className={classes.headerMenuWrapper} ref={subMenuRef}>
                    <Box
                      className={classes.headerMenuItem}
                      onClick={() => {
                        setIsWhyFlexcavoMenuOpen(!isWhyFlexcavoMenuOpen), setIsAboutUsMenuOpen(false);
                      }}
                    >
                      <span className={classes.headerMenuItemText}>{t('website:why_flexcavo')}</span>
                      {isWhyFlexcavoMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      {isWhyFlexcavoMenuOpen && !isMobile && renderSubMenu(whyFlexcavoMenuItems)}
                    </Box>

                    {isWhyFlexcavoMenuOpen && isMobile && renderSubMenu(whyFlexcavoMenuItems)}

                    <Box
                      className={classes.headerMenuItem}
                      onClick={() => {
                        setIsAboutUsMenuOpen(!isAboutUsMenuOpen), setIsWhyFlexcavoMenuOpen(false);
                      }}
                    >
                      <span className={classes.headerMenuItemText}>{t('website:companies')}</span>
                      {isAboutUsMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      {isAboutUsMenuOpen && !isMobile && renderSubMenu(aboutUsMenuItems)}
                    </Box>

                    {isAboutUsMenuOpen && isMobile && renderSubMenu(aboutUsMenuItems)}

                    <Box className={classes.headerMenuItem}>
                      <Link href="/contact">
                        <span className={classes.headerMenuItemText}>{t('website:contact')}</span>
                      </Link>
                    </Box>
                  </div>
                  {!hideRentNowButton && (
                    <Box className={classes.headerMenuItem}>
                      <Button variant="contained" color="primary" href="/categories" className={classes.headerButton}>
                        {t('website:rent_now')}
                      </Button>
                    </Box>
                  )}

                  <a onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'de' : 'en')}>
                    {currentLanguage === 'en' ? 'DE' : 'EN'}
                  </a>
                </Grid>
              </Box>

              <Hidden smUp>
                <Menu htmlColor="#fff" onClick={() => setShowMobileMenu(!showMobileMenu)} />
              </Hidden>
            </Grid>
          </Container>
        </Box>

        {children}

        {!!showPreFooter && (
          <Grid className={classes.preFooterSection}>
            <Container>
              <Grid container direction="row">
                <Grid item sm={6} xs={12} className={classes.preFooterLeftSide}>
                  <Typography variant="h3" noWrap className={classes.preFooterTitle}>
                    {t('website:stay_informed')}
                  </Typography>
                  <p className={classes.preFooterSubtitle}>{t('website:stay_informed_subtitle')}</p>

                  <Grid container direction="column" className={classes.preFooterForm}>
                    <StyledWhiteTextField
                      variant="outlined"
                      placeholder={t('website:name_in_prefooter')}
                      onChange={(evt) => setFooterContactName(evt.target.value)}
                      value={footerContactName}
                    />

                    <StyledWhiteTextField
                      variant="outlined"
                      placeholder={t('website:email_address')}
                      onChange={(evt) => setFooterContactEmail(evt.target.value)}
                      value={footerContactEmail}
                    />
                  </Grid>

                  <Grid container alignItems="center" justify={isMobile ? 'center' : 'space-between'}>
                    <Button
                      size={isMobile ? 'large' : 'small'}
                      color="primary"
                      variant="contained"
                      className={classes.preFooterFormSubmit}
                      onClick={submitContactForm}
                    >
                      {t('website:contact_us')}
                    </Button>

                    {formStatus === 'LOADING' && <CircularProgress color="primary" size={20} />}
                    {formStatus === 'SUCCESS' && (
                      <span className={classes.preFooterFormSuccess}>{t('website:contact_form_success')}</span>
                    )}
                    {formStatus === 'ERROR' && (
                      <span className={classes.preFooterFormError}>{t('website:contact_form_error')}</span>
                    )}
                    {formStatus === 'MISSING_FIELDS' && (
                      <span className={classes.preFooterFormError}>{t('website:contact_form_missing_fields')}</span>
                    )}
                  </Grid>
                </Grid>

                <Grid item sm={6} xs={12} className={classes.preFooterRightSide}>
                  <Grid container justify={isMobile ? 'center' : 'space-between'}>
                    <Typography variant="h3" className={classes.preFooterTitle}>
                      {t('website:how_to_help_you')}
                    </Typography>
                    <p className={classes.preFooterSubtitle}>{t('website:how_to_help_you_subtitle')}</p>
                    <Button
                      size={isMobile ? 'large' : 'small'}
                      color="primary"
                      variant="contained"
                      target="_blank"
                      href={flexcavoCalendarUrl}
                    >
                      {t('website:make_appointment')}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        )}

        <Grid container className={classes.footer}>
          <Container>
            <Box className={classes.footerLogoWrap}>
              <img src="/images/logo.png" className={classes.footerLogo} />
            </Box>

            <Grid container direction="row" justify="space-between">
              <Grid item md={3} sm={6} xs={12}>
                <ul className={classes.footerMenu}>
                  <li className={classes.footerMenuItem}>
                    <Link href="/functionality">{t('website:functions')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Link href="/rent-at-flexcavo">{t('website:rent_from_flexcavo')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Link href="/about">{t('website:about_us')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <a href={faqUrl} target="_blank">
                      {t('website:faq')}
                    </a>
                  </li>
                </ul>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <ul className={classes.footerMenu}>
                  <li className={classes.footerMenuItem}>
                    <Link href="/career" as={`/${t('url:career')}`} locale={i18n.language}>
                      {t('website:working_at_flexcavo')}
                    </Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Link href="/imprint">{t('website:imprint')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Link href="/data-protection">{t('website:privacy')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Link href="/terms">{t('website:conditions')}</Link>
                  </li>
                </ul>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <ul className={classes.footerMenu}>
                  <li className={classes.footerMenuItem}>
                    <Phone className={classes.footerMenuItemIcon} />
                    <Link href="/contact">{t('website:contact')}</Link>
                  </li>
                  <li className={classes.footerMenuItem}>
                    <Event className={classes.footerMenuItemIcon} />
                    <Link href={flexcavoCalendarUrl}>
                      <a target="_blank">{t('website:make_appointment')}</a>
                    </Link>
                  </li>
                </ul>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <Grid container>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <a href="https://actnow.lfca.earth/e/flexcavo" target="_blank">
                        <img src="/images/act-now.png" className={classes.footerPartnerLogo} />
                      </a>
                    </Grid>
                    <Grid item xs={6}>
                      <a href="https://aachenbuildingexperts.de" target="_blank">
                        <img src="/images/Aachen-Building-Experts.png" className={classes.footerPartnerLogo} />
                      </a>
                    </Grid>
                  </Grid>

                  <a href="https://www.bbi-online.org" target="_blank">
                    <img src="/images/BBI.png" className={classes.footerPartnerLogo} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Typography className={classes.copyrights}>© Copyright {moment().year()} Flexcavo GmbH</Typography>

            <Grid container direction="row" justify="center">
              <a href={flexcavoFacebookUrl} target="_blank">
                <Box component="span" className={classes.socialMediaIcon}>
                  <Facebook fontSize="small" />
                </Box>
              </a>
              <a href={flexcavoInstagramUrl} target="_blank">
                <Box component="span" className={classes.socialMediaIcon}>
                  <Instagram fontSize="small" />
                </Box>
              </a>
              <a href={flexcavoLinkedinUrl} target="_blank">
                <Box component="span" className={classes.socialMediaIcon} style={{ background: '#007bb5' }}>
                  <LinkedIn fontSize="small" />
                </Box>
              </a>
            </Grid>
          </Container>
        </Grid>
      </div>
    </>
  );
};

export default Layout;
