import React, { ReactElement, useRef } from 'react';
import { Button, Grid, Icon, makeStyles, Container, Box, useMediaQuery, Hidden } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import theme from '~/layouts/theme';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import functionalityStyle from './functionality.style';
const useStyles = makeStyles(functionalityStyle);

const Functionality = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();
  const bottomRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = () => bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Grid className={`${websiteClasses.content} ${classes.content}`}>
        <Container>
          <Grid container justify="center">
            <h1 className={websiteClasses.mainTitle}>{t('website:functionality_primary_title')}</h1>

            <Grid container direction="row" spacing={2}>
              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/rent-icon.svg" />
                  </Icon>

                  <h3 className={websiteClasses.mainFeaturesTitle}>{t('website:rent')}</h3>
                  <span className={websiteClasses.mainFeaturesDescription}>
                    {t('website:functionality_rent_features')}
                  </span>

                  <Button
                    variant="contained"
                    color="primary"
                    size={isMobile ? 'large' : 'small'}
                    className={classes.mainFeatureButton}
                    href="/categories"
                  >
                    {t('website:rent_now')}
                  </Button>
                </Grid>
              </Grid>

              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/fleet-icon.svg" />
                  </Icon>

                  <h3 className={websiteClasses.mainFeaturesTitle}>{t('website:fleet')}</h3>
                  <span className={websiteClasses.mainFeaturesDescription}>
                    {t('website:functionality_fleet_features')}
                  </span>

                  <Button
                    variant="contained"
                    color="secondary"
                    size={isMobile ? 'large' : 'small'}
                    className={classes.mainFeatureButton}
                    onClick={scrollToSection}
                  >
                    {t('website:reserve_now')}
                  </Button>
                </Grid>
              </Grid>

              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/projects-icon.svg" />
                  </Icon>

                  <h3 className={websiteClasses.mainFeaturesTitle}>{t('website:projects')}</h3>
                  <span className={websiteClasses.mainFeaturesDescription}>
                    {t('website:functionality_projects_features')}
                  </span>

                  <Button
                    variant="contained"
                    color="secondary"
                    size={isMobile ? 'large' : 'small'}
                    className={classes.mainFeatureButton}
                    onClick={scrollToSection}
                  >
                    {t('website:reserve_now')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Hidden smDown>
          <div className={websiteClasses.orangeTriangle} />
        </Hidden>
      </Grid>

      <Grid>
        <h1 className={classes.infographicTitle}>{t('website:functionality_secondary_title')}</h1>
        <h3 className={classes.infographicSubtitle}>{t('website:functionality_secondary_title')}</h3>
      </Grid>

      <Box className={classes.infographicSection}>
        <Container>
          <Grid container direction="row" alignItems="flex-start" spacing={3}>
            <Grid item md={6} sm={12}>
              <img className={classes.infographicImage} src="/images/functionality-infographic.webp" />
            </Grid>

            <Grid item md={6} sm={12}>
              <h4 className={classes.infographicFeatureTitle}>{t('website:easy')}</h4>
              <p className={classes.infographicFeatureDescription}>{t('website:easy_paragraph')}</p>

              <h4 style={{ paddingLeft: isTablet ? 0 : 40 }} className={classes.infographicFeatureTitle}>
                {t('website:partnership')}
              </h4>
              <p style={{ paddingLeft: isTablet ? 0 : 40 }} className={classes.infographicFeatureDescription}>
                {t('website:partnership_paragraph')}
              </p>

              <h4 className={classes.infographicFeatureTitle}>{t('website:future_oriented')}</h4>
              <p className={classes.infographicFeatureDescription}>{t('website:future_oriented_paragraph')}</p>
            </Grid>
          </Grid>
        </Container>

        <Hidden xsDown>
          <div className={websiteClasses.orangeTriangle} />
        </Hidden>
      </Box>

      <Grid className={classes.cockpitScreenshotSectionBG}>
        <Grid container justify="center">
          <img className={classes.cockpitScreenshot} src="/images/cockpit-screenshot-laptop.webp" />
        </Grid>

        <Container>
          <Grid container direction="row" className={classes.cockpitScreenSection}>
            <Hidden xsDown>
              <Grid item sm={4} className={classes.cockpitScreenshotIpadWrap}>
                <img className={classes.cockpitScreenshotIpad} src="/images/cockpit-screenshot-ipad.png" />
              </Grid>
            </Hidden>

            <Grid item sm={8}>
              <h4 className={classes.cockpitScreenshotTitle}>{t('website:cockpit_section_title')}</h4>
              <p className={classes.cockpitScreenshotDescription}>{t('website:cockpit_section_description')}</p>

              <Button
                variant="contained"
                color="secondary"
                size={isMobile ? 'large' : 'small'}
                className={websiteClasses.centerOnMobile}
                onClick={scrollToSection}
              >
                {t('website:reserve_now')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container>
        <Grid
          container
          direction={isTablet ? 'column-reverse' : 'row'}
          className={classes.futureTechnoloySection}
          alignItems="center"
          spacing={5}
        >
          <Grid item md={6} sm={12}>
            <h3 className={classes.futureTechnoloyTitle}>{t('website:future_technology_title')}</h3>
            <p className={classes.futureTechnoloyDescription}>{t('website:future_technology_description')}</p>
          </Grid>

          <Grid item md={6} sm={12}>
            <img src="/images/future-techonoloy-drawing.png" className={classes.futureTechnoloyImage} />
          </Grid>
        </Grid>
      </Container>

      <div ref={bottomRef} />
    </>
  );
};

export default Functionality;
