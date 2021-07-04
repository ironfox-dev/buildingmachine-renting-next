import * as React from 'react';
import { NextPage } from 'next';

import OrderPlacement from '~/components/order/OrderPlacement/order-placement';
import WebsiteLayout from '~/layouts/websiteLayout';
import { useTranslation } from 'react-i18next';

const OrderPlacementPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <WebsiteLayout title={t('website:checkout_pages_title')} hideRentNowButton={true}>
      <OrderPlacement />
    </WebsiteLayout>
  );
};

export default OrderPlacementPage;
