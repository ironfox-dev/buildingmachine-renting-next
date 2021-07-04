import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../layouts/dashboardLayout';
import Fleet from '../../redux/fleet/containers/fleet.container';

const FleetPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout>
      <Fleet />
    </DashboardLayout>
  );
};

export default FleetPage;
