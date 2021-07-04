import React, { ReactElement, useState } from 'react';
import { Button, Container, Grid, Icon, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);

import contactStyle from './contact.style';
const useStyles = makeStyles(contactStyle);

import { flexcavoCalendarUrl, flexcavoContactPhone } from '~/constants/flexcavo';
import ContactForm from './contactForm';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const submitContactForm = async (values) => {
    setFormStatus('LOADING');

    try {
      await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/7649841/ab37983a-8a04-4f97-8b9b-857b0b27579e',
        {
          submittedAt: Date.now(),
          fields: Object.keys(values).map((field) => ({ name: field, value: values[field] })),
          context: {
            pageUri: '/contact',
            pageName: 'Contact',
          },
        }
      );

      setFormStatus('SUCCESS');
    } catch (err) {
      setFormStatus('ERROR');
    }
  };

  return (
    <>
      <Grid className={websiteClasses.contentWithoutBG}>
        <Container>
          <Grid container justify="center" alignItems="center" direction="column">
            <h1 className={`${websiteClasses.mainTitle} ${classes.mainTitle}`}>{t('website:contact')}</h1>
          </Grid>
        </Container>
      </Grid>

      <Grid>
        <Typography variant="h1" className={classes.secondTitle}>
          {t('website:contact_main_title')}
        </Typography>

        <Container>
          <Typography variant="body2" className={`${websiteClasses.mainSubtitle} ${classes.secondSubtitle}`}>
            {t('website:contact_main_subtitle')}
          </Typography>
        </Container>
      </Grid>

      <Container>
        <Grid container direction="row" spacing={4} className={classes.contactWrap}>
          <Grid item sm={12} md={8}>
            <Typography className={classes.contactTitle}>{t('website:send_us_message')}</Typography>

            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={submitContactForm}
            >
              <ContactForm status={formStatus} />
            </Formik>
          </Grid>

          <Grid item sm={12} md={4}>
            <Typography className={classes.contactTitle}>{t('website:other_contacts')}</Typography>

            <Grid container direction="row" justify="space-between" className={classes.contactOptionRow}>
              <Grid item xs={3}>
                <Icon className={classes.contactOptionIcon}>
                  <img src="/icons/call-icon.svg" />
                </Icon>
              </Grid>

              <Grid item xs={9}>
                <Grid container direction="column" alignItems="flex-start">
                  <Typography variant="h4" className={classes.contactOptionTitle}>
                    {t('website:give_us_call')}
                  </Typography>
                  <Button color="primary" variant="contained" href={`tel:${flexcavoContactPhone}`}>
                    {flexcavoContactPhone}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row" justify="space-between" className={classes.contactOptionRow}>
              <Grid item xs={3}>
                <Icon className={classes.contactOptionIcon}>
                  <img src="/icons/calendar-icon.svg" />
                </Icon>
              </Grid>

              <Grid item xs={9}>
                <Grid container direction="column" alignItems="flex-start">
                  <Typography variant="h4" className={classes.contactOptionTitle}>
                    {t('website:booking_meeting')}
                  </Typography>
                  <Button color="primary" variant="contained" target="_blank" href={flexcavoCalendarUrl}>
                    {t('website:free_consultation_appointment')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row" justify="space-between" className={classes.contactOptionRow}>
              <Grid item xs={3}>
                <Icon className={classes.contactOptionIcon}>
                  <img src="/icons/chat-icon.svg" />
                </Icon>
              </Grid>

              <Grid item xs={9}>
                <Grid container direction="column" alignItems="flex-start">
                  <Typography variant="h4" className={classes.contactOptionTitle}>
                    {t('website:chat_with_us')}
                  </Typography>
                  <Button color="primary" variant="contained" href="#hs-chat-open">
                    {t('website:open_chat')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
