import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import Imprint from '../../components/website/imprint/imprint';
import { useTranslation } from 'react-i18next';

const ImprintPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:imprint_title')} showPreFooter={true}>
      <Imprint />
    </Layout>
  );
};

export default ImprintPage;
