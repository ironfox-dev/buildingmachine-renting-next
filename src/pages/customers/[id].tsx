import * as React from 'react';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '../../layouts/dashboardLayout';
import CustomerDetails from '~/components/customer/customerDetails';

const CustomersPage: NextPage = (): React.ReactElement => {
  const { t } = useTranslation();

  return ( 
    <DashboardLayout title={`${t('user:customers')} | Flexcavo`}>
      <CustomerDetails />
    </DashboardLayout>
  );
};

export default CustomersPage;
