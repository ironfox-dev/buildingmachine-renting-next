import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import GeneralSettings from '~/components/settings/generalSettings/general';

const GeneralSettingsPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Discount Codes | Flexcavo" headline="Discount Codes">
      <GeneralSettings />
    </Layout>
  );
};

export default GeneralSettingsPage;
