import React, { ReactElement, useEffect, useRef } from 'react';
import { Avatar, Box, Button, Container, Grid, Hidden, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import theme from '~/layouts/theme';
import { breezyUrl } from '~/constants/flexcavo';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import rentStyle from './career.style';
const useStyles = makeStyles(rentStyle);

const logos: string[] = [
  'Citi_logo.png',
  'MIT_logo.png',
  'Strabag_logo.png',
  'bcgplatinion_logo.png',
  'ESMT_logo.png',
  'McK_logo.png',
  'TUM_logo.png',
  'bertelsmann_logo.png',
  'HEC_Paris_logo.png',
  'RWTH_logo.png',
  'UN_logo.png',
  'harvard_logo.png',
];

const Career = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();
  const hiringRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    const script = document.createElement('script');

    script.src = breezyUrl;
    script.async = true;

    const widget = document.getElementById('opportunities-widget');
    widget.appendChild(script);
  }, []);

  const scrollToSection = () => hiringRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Grid className={`${websiteClasses.content} ${classes.content}`}>
        <Container>
          <Grid container justify="center" alignItems="center" direction="column">
            <Typography variant="h1" className={websiteClasses.mainTitle}>
              {t('website:career_primary_title')}
            </Typography>
            <Typography variant="h2" className={`${websiteClasses.mainSubtitle} ${classes.mainSubtitle}`}>
              {t('website:career_primary_subtitle')}
            </Typography>

            <Button onClick={scrollToSection} size="medium" variant="contained" color="primary">
              {t('website:view_current_jobs')}
            </Button>
          </Grid>
        </Container>
      </Grid>

      <Box className={classes.diversitySection}>
        <Container className={classes.diversitySectionContainer}>
          <Grid container justify="flex-start">
            <Grid item md={5} sm={12}>
              <Typography variant="h1" className={classes.diversityTitle}>
                {t('website:career_secondary_title')}
              </Typography>
              <Typography variant="h2" className={`${websiteClasses.mainSubtitle} ${classes.diversitySubtitle}`}>
                {t('website:career_secondary_subtitle')}
              </Typography>

              <Button variant="contained" color="primary" onClick={scrollToSection} className={classes.diversityButton}>
                {t('website:become_part_of_flexcavo')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.cultureValuesSection}>
        <Container>
          <Grid container justify="center">
            <Typography variant="h1" className={classes.secondaryTitle}>
              {t('website:our_values_culture')}
            </Typography>

            <Hidden xsDown>
              <img src="/images/careers-infographic.svg" style={{ width: '100%' }} />
            </Hidden>

            <Hidden smUp>
              <Grid container direction="column" justify="center">
                <img src="/images/take-moonshots.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_1')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_1')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/images/customer-centric.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_2')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_2')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/images/diverse-team.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_3')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_3')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/images/sprout.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_4')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_4')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/icons/checkbox-tick-icon.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_5')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_5')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/images/clapping-hands.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_6')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_6')}</Typography>
              </Grid>
              <Grid container direction="column" justify="center">
                <img src="/images/target.svg" />
                <Typography className={classes.cultureValueTitle}>{t('website:our_values_title_7')}</Typography>
                <Typography className={classes.cultureValueSubtitle}>{t('website:our_values_subtitle_7')}</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Container>

        <Hidden smDown>
          <div className={websiteClasses.orangeTriangle} />
        </Hidden>
      </Box>

      <Box className={classes.teamsSection}>
        <Typography variant="h1" className={classes.secondaryTitle}>
          {t('website:teams')}
        </Typography>

        <Container>
          <Grid container direction="row" spacing={5}>
            <Grid item sm={6} xs={12}>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_1')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_1')}
                </Typography>
              </Box>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_2')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_2')}
                </Typography>
              </Box>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_3')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_3')}
                </Typography>
              </Box>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_4')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_4')}
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box className={classes.teamsBlock} style={{ marginTop: isMobile ? -40 : 160 }}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_5')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_5')}
                </Typography>
              </Box>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_6')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_6')}
                </Typography>
              </Box>
              <Box className={classes.teamsBlock}>
                <Typography variant="h3" className={classes.teamsTitle}>
                  {t('website:teams_title_7')}
                </Typography>
                <Typography variant="h4" className={classes.teamsDescription}>
                  {t('website:teams_description_7')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <Grid container justify="center" className={classes.yourContactBox}>
          <Typography className={classes.yourContactTitle}>{t('website:your_contact')}</Typography>

          <Grid container direction="row" spacing={2}>
            <Grid item sm={5} xs={12}>
              <Grid container alignItems="center" justify="center">
                <Avatar src="/images/bene.png" className={classes.yourContactAvatar} />
              </Grid>
            </Grid>

            <Grid item sm={6} xs={12} className={classes.yourContactDetailsColumn}>
              <Typography className={`${classes.yourContactDetails} ${classes.yourContactEmail}`}>
                {t('website:your_contact_email')}
              </Typography>
              <Typography className={`${classes.yourContactDetails} ${classes.yourContactSubtitle}`}>
                {t('website:your_contact_subtitle')}
              </Typography>
              <Typography className={`${classes.yourContactDetails} ${classes.yourContactDescription}`}>
                {t('website:your_contact_description')}
              </Typography>

              <Button color="primary" variant="contained" onClick={scrollToSection}>
                {t('website:apply_now')}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column" justify="center" ref={hiringRef}>
          <Typography variant="h1" className={`${classes.secondaryTitle} ${classes.hiringTitle}`}>
            {t('website:hiring_title')}
          </Typography>
          <Typography variant="h2" className={`${websiteClasses.mainSubtitle} ${classes.hiringSubtitle}`}>
            {t('website:hiring_subtitle')}
          </Typography>
        </Grid>

        <div id="opportunities-widget" className={classes.jobsSection}>
          <div id="bzOpeningsContainer" />
        </div>

        <Typography variant="h1" className={classes.secondaryTitle}>
          {t('website:partners_title')}
        </Typography>
        <Grid container spacing={2}>
          {logos.map((logo) => (
            <Grid item md={2} sm={4} xs={6} key={logo} className={classes.logo}>
              <img src={`/logos/${logo}`} className={classes.logoImage} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Career;
