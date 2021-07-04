import React, { ReactElement } from 'react';
import Layout from '../layouts/websiteLayout';
import Home from '../components/website/home/home';
import { useTranslation } from 'react-i18next';

const HomePage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:home_title')}>
      <Home />
    </Layout>
  );
};

export default HomePage;
