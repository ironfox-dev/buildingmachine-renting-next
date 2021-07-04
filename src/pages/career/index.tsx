import React, { ReactElement, useEffect } from 'react';
import Layout from '../../layouts/websiteLayout';
import Career from '../../components/website/career/career';
import { useTranslation } from 'react-i18next';

const CareerPage = (): ReactElement => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.history.pushState('', '', '/new-url');
  // }, []);

  return (
    <Layout title={t('website:career_title')} showPreFooter={true}>
      <Career />
    </Layout>
  );
};

export default CareerPage;
