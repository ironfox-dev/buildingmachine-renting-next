import React, { ReactElement } from 'react';
import { Grid, makeStyles, Button, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import termsStyle from './terms.style';
const useTermsStyles = makeStyles(termsStyle);

const Terms = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useTermsStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid className={websiteClasses.contentWithoutBG}>
        <Container>
          <Grid container justify="center" alignItems="center" direction="column">
            <h1 className={classes.mainTitle}>{t('website:terms_main_title_1')}</h1>
            <h1 className={`${classes.mainTitle} ${classes.mainTitle2}`}>
              {t('website:terms_main_title_2')}
            </h1>
            <a href="/docs/AGB-flexcavo-GmbH.pdf" download className={classes.downloadLink}>
              <Button variant="contained" color="primary" size="large">
                {t('website:pdf_download')}
              </Button>
            </a>
          </Grid>
        </Container>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.textSection}>
          <Typography variant="h1" className={classes.termsTitle}>
            {t('website:terms_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_subDescription')}
          </Typography>

          <Typography variant="h3" className={classes.termsItemTitle}>
            {t('website:terms_1_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_1_1')} <br /> <br />
            {t('website:terms_1_2')} <br /> <br />
            {t('website:terms_1_3')} <br /> <br />
            {t('website:terms_1_4')} <br /> <br />
            {t('website:terms_1_5')} <br /> <br />
            {t('website:terms_1_6')} <br /> <br />
          </Typography>

          <Typography variant="h3" className={classes.termsItemTitle}>
            {t('website:terms_2_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_2_1')} <br /> <br />
            {t('website:terms_2_2')} <br /> <br />
            {t('website:terms_2_3')} <br /> <br />
            {t('website:terms_2_4')} <br /> <br />
            {t('website:terms_2_5')} <br /> <br />
            {t('website:terms_2_6')} <br /> <br />
            {t('website:terms_2_7')} <br /> <br />
            {t('website:terms_2_8')} <br /> <br />
            {t('website:terms_2_9')} <br /> <br />
          </Typography>

          <Typography variant="h3" className={classes.termsItemTitle}>
            {t('website:terms_3_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_3_1')} <br /> <br />
            {t('website:terms_3_2')} <br /> <br />
            {t('website:terms_3_3')} <br /> <br />
            {t('website:terms_3_4')} <br /> <br />
            {t('website:terms_3_5')} <br /> <br />
            {t('website:terms_3_6')} <br /> <br />
          </Typography>

          <Typography variant="h3" className={classes.termsItemTitle}>
            {t('website:terms_4_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_4_1')} <br /> <br />
            {t('website:terms_4_2')} <br /> <br />
            {t('website:terms_4_3')} <br /> <br />
            {t('website:terms_4_4')} <br /> <br />
            {t('website:terms_4_5')} <br /> <br />
          </Typography>

          <Typography variant="h3" className={classes.termsItemTitle}>
            {t('website:terms_5_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:terms_5_1')} <br /> <br />
            {t('website:terms_5_1_paragraph_1')} <br />
            {t('website:terms_5_1_paragraph_2')} <br />
            {t('website:terms_5_1_paragraph_3')} <br />
            {t('website:terms_5_1_paragraph_4')} <br />
            {t('website:terms_5_1_paragraph_5')} <br />
            {t('website:terms_5_1_paragraph_6')} <br /> <br />
            {t('website:terms_5_2')} <br /> <br />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Terms;
