import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'layouts/dashboardLayout';
import Account from '~/components/settings/account/account';

const AccountPage: NextPage = (): React.ReactElement => {
  return (
    <Layout title="Account | Flexcavo" headline="">
      <Account />
    </Layout>
  );
};

export default AccountPage;
