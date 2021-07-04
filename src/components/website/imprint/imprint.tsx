import React, { ReactElement } from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import imprintStyle from './imprint.style';
const useStyles = makeStyles(imprintStyle);

const Imprint = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid className={websiteClasses.contentWithoutBG}>
        <Container>
          <Grid container justify="center">
            <h1 className={classes.mainTitle}>{t('website:imprint')}</h1>
          </Grid>
        </Container>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.textSection}>
          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_info_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_info_comp')} <br />
            {t('website:imprint_info_desc_1')} <br />
            {t('website:imprint_info_desc_2')} <br /> <br />
            {t('website:imprint_info_desc_3')} <br />
            {t('website:imprint_info_desc_4')} <br /> <br />
            <strong>{t('website:imprint_info_desc_5')}</strong>
            <br />
            {t('website:imprint_info_desc_6')}
          </Typography>

          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_contact_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_contact_address')}
          </Typography>

          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_info_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_info_2_desc_1')} <br /> <br />
            {t('website:imprint_info_2_desc_2')}
          </Typography>

          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_content_liability_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_content_liability_paragraph_1')} <br /> <br />
            {t('website:imprint_content_liability_paragraph_2')}
          </Typography>

          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_links_liability_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_links_liability_paragraph_1')} <br /> <br />
            {t('website:imprint_links_liability_paragraph_2')}
          </Typography>

          <Typography variant="h1" className={classes.sectionTitles}>
            {t('website:imprint_copyright_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:imprint_copyright_paragraph_1')} <br /> <br />
            {t('website:imprint_copyright_paragraph_2')}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Imprint;
