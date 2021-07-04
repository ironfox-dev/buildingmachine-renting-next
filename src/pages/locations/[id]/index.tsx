import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../../layouts/dashboardLayout';
import LocationEditContainer from '~/components/location/location-edit.container';

const LocationPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout title="Location | Flexcavo" headline="">
      <LocationEditContainer />
    </DashboardLayout>
  );
};

export default LocationPage;
