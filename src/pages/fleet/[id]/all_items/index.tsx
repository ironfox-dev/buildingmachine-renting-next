import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../../../layouts/dashboardLayout';
import AllItems from '~/components/allItems/allItems/allItems';

const AllItemsPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout>
      <AllItems />
    </DashboardLayout>
  );
};

export default AllItemsPage;
