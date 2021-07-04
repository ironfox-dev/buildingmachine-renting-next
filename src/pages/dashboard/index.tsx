import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'layouts/dashboardLayout';

export default function Dashboard() {
  const { t } = useTranslation();

  return <Layout>
    <h2 style={{textAlign: 'center'}}>
      {t('dashboard')}
    </h2>
  </Layout>;
}
