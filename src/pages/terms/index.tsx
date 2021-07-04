import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import Terms from '../../components/website/terms/terms';
import { useTranslation } from 'react-i18next';

const TermsPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:terms_page_title')} showPreFooter={true}>
      <Terms />
    </Layout>
  );
};

export default TermsPage;
