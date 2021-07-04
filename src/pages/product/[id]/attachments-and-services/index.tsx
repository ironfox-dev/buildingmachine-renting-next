import * as React from 'react';
import { NextPage } from 'next';

import ProductAttachments from '~/components/order/ProductAttachments/product-attachments';
import WebsiteLayout from '~/layouts/websiteLayout';
import { useTranslation } from 'react-i18next';

const AttachmentsPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <WebsiteLayout title={t('website:checkout_pages_title')} hideRentNowButton={true}>
      <ProductAttachments />
    </WebsiteLayout>
  );
};

export default AttachmentsPage;
