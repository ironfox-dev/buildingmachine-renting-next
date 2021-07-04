import * as React from 'react';
import { NextPage } from 'next';

import ProductDetails from '~/components/order/ProductDetails/product-details';
import WebsiteLayout from '~/layouts/websiteLayout';
import { useTranslation } from 'react-i18next';

const MachinePage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <WebsiteLayout title={t('website:checkout_pages_title')} hideRentNowButton={true}>
      <ProductDetails />
    </WebsiteLayout>
  );
};

export default MachinePage;
