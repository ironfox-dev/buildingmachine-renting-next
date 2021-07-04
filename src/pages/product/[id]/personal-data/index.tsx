import * as React from 'react';
import { NextPage } from 'next';

import PersonalData from '~/components/order/PersonalData/personal-data';
import WebsiteLayout from '~/layouts/websiteLayout';
import { useTranslation } from 'react-i18next';

const PersonalDataPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <WebsiteLayout title={t('website:checkout_pages_title')} hideRentNowButton={true}>
      <PersonalData />
    </WebsiteLayout>
  );
};

export default PersonalDataPage;
