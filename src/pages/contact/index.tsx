import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import Contact from '../../components/website/contact/contact';
import { useTranslation } from 'react-i18next';

const ContactPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:contact_title')} showPreFooter={false}>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
