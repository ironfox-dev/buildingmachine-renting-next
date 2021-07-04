import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import RentalContainer from '~/components/rental/rental';

const RentalPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Account | Flexcavo" headline="">
      <RentalContainer />
    </Layout>
  );
};

export default RentalPage;
