import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../layouts/dashboardLayout';
import CustomersList from '~/components/customer/customer';
import { useTranslation } from 'react-i18next';

const CustomersPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();

  return ( 
    <DashboardLayout title={`${t('user:customers')} | Flexcavo`} headline={t('user:customers')}>
      <CustomersList />
    </DashboardLayout>
  );
};

export default CustomersPage;
