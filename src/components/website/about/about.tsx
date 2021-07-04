import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Avatar, Box, Button, Container, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import websiteStyle from '../website.style';
import theme from '~/layouts/theme';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useWebsiteStyles = makeStyles(websiteStyle);

import aboutStyle from './about.style';
import { flexcavoCalendarUrl } from '~/constants/flexcavo';
const useStyles = makeStyles(aboutStyle);

const About = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid className={`${websiteClasses.content} ${classes.content}`}>
        <Container>
          <Grid container justify="center" alignItems="center" direction="column">
            <Typography variant="h1" className={websiteClasses.mainTitle}>
              {t('website:our_focus')}
            </Typography>
            <Typography variant="h2" className={`${websiteClasses.mainSubtitle} ${classes.mainSubtitle}`}>
              {t('website:flexcavo_optimizes')}
            </Typography>
          </Grid>
        </Container>

        <Grid className={classes.mainContainer} container direction="column" justify="center" alignItems="center">
          <Container>
            <Box className={classes.digitalPartnerContainer}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                  <img
                    src="/images/digital-partner.png"
                    className={classes.digitalPartnerImage}
                    alt={t('website:digital_partner')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h1" className={classes.digitalPartnerTitle}>
                    {t('website:digital_partner_title')}
                  </Typography>
                  <Typography variant="body1" className={classes.digitalPartnerDescription}>
                    {t('website:digital_partner_description')}
                  </Typography>
                  <Box className={classes.buttonWrapper}>
                    <a target="_blank" href={flexcavoCalendarUrl} className={classes.linkButtons}>
                      <Button color="primary" variant="contained" className={classes.freeConsultation}>
                        {t('website:free_consultation_appointment')}
                      </Button>
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box className={classes.ourMissionContainer}>
            <Container>
              <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h1" className={classes.ourMissionTitle}>
                  {t('website:our_mission')}
                </Typography>
                <Typography variant="body1" className={classes.ourMissionDescription}>
                  {t('website:our_mission_description')}
                </Typography>
              </Grid>
            </Container>
          </Box>
          <Container>
            <Grid container direction="column" justify="center" alignItems="center">
              <Box className={classes.foundingCard}>
                <Typography variant="h1" className={classes.foundingTitle}>
                  {t('website:founding_team')}
                </Typography>
                <Grid container direction="row" className={classes.foundersWrapper}>
                  <Grid item xs={12} md={6} className={classes.founderContainer}>
                    <Avatar alt="Leonhard Fricke" src="/images/Leo_official.png" className={classes.founderAvatar} />
                    <Grid container direction="column" className={classes.founderInfoContainer}>
                      <Typography variant="h2" className={classes.founderName}>
                        Leonhard Fricke
                      </Typography>
                      <Typography variant="body1" className={classes.founderInfo}>
                        {t('website:technology_and_operations')}
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="flex-start"
                        className={classes.founderContactIcon}
                      >
                        <a href="mailto:leonhard.fricke@flexcavo.de" className={classes.iconButtonLinks}>
                          <EmailIcon />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/leonhardfricke"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.iconButtonLinks}
                        >
                          <LinkedInIcon />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.founderContainer}>
                    <Avatar alt="Benedict Aicher" src="/images/bene_official.png" className={classes.founderAvatar} />
                    <Grid container direction="column" className={classes.founderInfoContainer}>
                      <Typography variant="h2" className={classes.founderName}>
                        Benedict Aicher
                      </Typography>
                      <Typography variant="body1" className={classes.founderInfo}>
                        {t('website:strategy_and_sales')}
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="flex-start"
                        className={classes.founderContactIcon}
                      >
                        <a href="mailto:benedict.aicher@flexcavo.de" className={classes.iconButtonLinks}>
                          <EmailIcon />
                        </a>
                        <a
                          href="https://de.linkedin.com/in/benedictaicher"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.iconButtonLinks}
                        >
                          <LinkedInIcon />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="h1" className={classes.companyDescTitle}>
                {t('website:climate_protection_at_flexcavo')}
              </Typography>
              <Grid
                container
                direction={isTablet ? 'column' : 'row'}
                alignItems="flex-start"
                justify="space-between"
                className={classes.companyDescSectionRow}
              >
                <Grid item sm={12} md={5} className={classes.companyDescBlock}>
                  <img src="/images/act-now1.png" alt={t('website:act_now')} />
                  <Typography variant="body1" className={classes.companyDescText}>
                    {t('website:act_now_description')}
                  </Typography>
                  <a
                    href="https://www.leadersforclimateaction.com/contribution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkButtons}
                  >
                    <Button color="primary" className={classes.companyDescButton}>
                      {t('website:act_now_button')}
                    </Button>
                  </a>
                </Grid>
                <Grid item sm={12} md={5} className={classes.companyDescBlock}>
                  <img
                    src="/images/renting-construction-machine.png"
                    alt={t('website:renting_construction_machine_alt')}
                  />
                  <Typography variant="body1" className={classes.companyDescText}>
                    {t('website:renting_construction_machine')}
                  </Typography>
                  <a
                    href="https://erarental.org/en/publications/sustainability/carbon-footprint-of-construction-equipment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkButtons}
                  >
                    <Button color="primary" className={classes.companyDescButton}>
                      {t('website:to_study_button')}
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid
                container
                direction={isTablet ? 'column-reverse' : 'row'}
                alignItems="flex-start"
                justify="space-between"
                className={classes.companyDescSectionRow}
              >
                <Grid item sm={12} md={5} className={classes.companyDescBlock}>
                  <Typography variant="h1" className={classes.workingAtTitle}>
                    {t('website:working_at_flexcavo')}
                  </Typography>
                  <Typography variant="body1" className={classes.companyDescText}>
                    <span>{t('website:become_partner_of_our_team')}</span>
                    {t('website:become_partner_desc')}
                  </Typography>
                  <Box className={classes.buttonWrapper}>
                    <Link href="/career">
                      <Button color="primary" variant="contained" className={classes.companyDescButton}>
                        {t('website:apply_now')}
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6} className={classes.companyDescBlock}>
                  <img
                    src="/images/working-at-flexcavo.png"
                    alt={t('website:working_at_flexcavo')}
                    className={classes.workingAtImage}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
