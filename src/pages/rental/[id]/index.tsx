import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import RentalDetail from '~/components/rental/rental-details/rentalDetail.view';

const RentalPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Account | Flexcavo" headline="">
      <RentalDetail />
    </Layout>
  );
};

export default RentalPage;
