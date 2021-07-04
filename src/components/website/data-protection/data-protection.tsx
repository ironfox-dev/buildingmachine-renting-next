import React, { ReactElement, useEffect } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { cookiebotUrl } from '~/constants/flexcavo';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import dataProtectionStyle from './data-protection.style';
const useDataProtectionStyles = makeStyles(dataProtectionStyle);

const DataProtection = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useDataProtectionStyles();
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = cookiebotUrl;
    script.async = true;

    const widget = document.getElementById('cookiebot');
    widget.appendChild(script);
  }, []);

  return (
    <>
      <Grid className={websiteClasses.contentWithoutBG}>
        <Container>
          <Grid container justify="center">
            <h1 className={classes.mainTitle}>{t('website:data_protection')}</h1>
          </Grid>
        </Container>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.textSection}>
          <Typography variant="h1" className={classes.dataProtectionTitle}>
            {t('website:data_protection_at_glance_title')}
          </Typography>
          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:data_protection_general')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:data_protection_general_desc')}
          </Typography>

          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:data_protection_collection_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:data_protection_collection_desc')}
          </Typography>

          <Typography variant="body1" className={classes.subDescription}>
            <strong>{t('website:resp_data_collection_title')}</strong>
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:resp_data_collection_desc')}
          </Typography>

          <Typography variant="body1" className={classes.subDescription}>
            <strong>{t('website:how_collect_title')}</strong>
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:how_collect_desc')}
          </Typography>

          <Typography variant="body1" className={classes.subDescription}>
            <strong>{t('website:what_use_data_for_title')}</strong>
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:what_use_data_for_desc')}
          </Typography>

          <Typography variant="body1" className={classes.subDescription}>
            <strong>{t('website:waht_regard_title')}</strong>
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:what_regard_desc_paragraph_1')} <br /> <br />
            {t('website:what_regard_desc_paragraph_2')}
          </Typography>

          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:tools_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:tools_desc_paragraph_1')}
            <br /> <br />
            <div id="cookiebot" />
            <br />
            {t('website:tools_desc_paragraph_2')}
          </Typography>

          <Typography variant="h1" className={classes.dataProtectionTitle}>
            {t('website:general_and_mandatory_info_title')}
          </Typography>
          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:privacy_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:privacy_desc_paragraph_1')} <br /> <br />
            {t('website:privacy_desc_paragraph_2')} <br /> <br />
            {t('website:privacy_desc_paragraph_3')}
          </Typography>

          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:responsible_note_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:responsible_note_desc')} <br /> <br />
            <strong>{t('website:responsible_note_comp_name')}</strong> <br />
            {t('website:imprint_info_desc_1')} <br />
            {t('website:imprint_info_desc_2')} <br />
            {t('website:responsible_note_body_telefon')} <br />
            {t('website:responsible_note_body_email')} <br /> <br />
            {t('website:responsible_note_desc_paragraph_3')}
          </Typography>

          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:revocation_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:revocation_desc')}
          </Typography>

          <Typography variant="h1" className={classes.dataProtectionItemTitle}>
            {t('website:right_to_object_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:right_to_object_paragraph_1')} <br /> <br />
            {t('website:right_to_object_paragraph_2')}
          </Typography>

          <Typography variant="body1" className={classes.dataProtectionItemTitle}>
            {t('website:right_of_appeal_title')}
          </Typography>
          <Typography variant="body1" className={classes.subDescription}>
            {t('website:right_of_appeal_desc')}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DataProtection;
