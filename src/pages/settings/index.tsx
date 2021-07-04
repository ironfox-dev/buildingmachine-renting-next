import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import Settings from '~/components/settings/settings';

const ServicesPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Settings | Flexcavo" headline="Settings">
      <Settings />
    </Layout>
  );
};

export default ServicesPage;
