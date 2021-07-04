import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import DataProtection from '../../components/website/data-protection/data-protection';
import { useTranslation } from 'react-i18next';

const DataProtectionPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:data_protection_title')} showPreFooter={true}>
      <DataProtection />
    </Layout>
  );
};

export default DataProtectionPage;
