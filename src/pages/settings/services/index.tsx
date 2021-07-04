import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import ServiceTemplates from '~/components/settings/services/list';

const ServicesPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Services | Flexcavo" headline="Settings ">
      <ServiceTemplates />
    </Layout>
  );
};

export default ServicesPage;
