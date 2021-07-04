import * as React from 'react';
import { NextPage } from 'next';

import ThanksCard from '~/components/order/ThanksCard/thanks-card';
import WebsiteLayout from '~/layouts/websiteLayout';
import { useTranslation } from 'react-i18next';

const ThanksPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <WebsiteLayout title={t('website:thanks_page_title')}>
      <ThanksCard />
    </WebsiteLayout>
  );
};

export default ThanksPage;
