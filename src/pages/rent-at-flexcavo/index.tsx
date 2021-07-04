import React, { ReactElement } from 'react';
import Layout from '../../layouts/websiteLayout';
import Rent from '../../components/website/rent/rent';
import { useTranslation } from 'react-i18next';

const RentPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Layout title={t('website:rent_title')} showPreFooter={true}>
      <Rent />
    </Layout>
  );
};

export default RentPage;
