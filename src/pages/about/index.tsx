import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import About from '../../components/website/about/about';
import { useTranslation } from 'react-i18next';

const AboutPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:about_title')} showPreFooter={true}>
      <About />
    </Layout>
  );
};

export default AboutPage;
