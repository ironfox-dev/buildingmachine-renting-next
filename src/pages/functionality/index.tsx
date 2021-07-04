import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import Functionality from '../../components/website/functionality/functionality';
import { useTranslation } from 'react-i18next';

const FunctionalityPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:functionality_title')} showPreFooter={true}>
      <Functionality />
    </Layout>
  );
};

export default FunctionalityPage;
