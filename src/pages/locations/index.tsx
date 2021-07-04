import * as React from 'react';
import { NextPage } from 'next';
import DashboardLayout from '../../layouts/dashboardLayout';
import LocationListContainer from '~/components/location/location-list.container';

const LocationsPage: NextPage = (): React.ReactElement => {
  return (
    <DashboardLayout title="Locations | Flexcavo">
      <LocationListContainer />
    </DashboardLayout>
  );
};

export default LocationsPage;
