import React from 'react';
import LocationListComponent from '~/components/location/location-list.component';
import { useLocationsListQuery } from '~/graphql/graphql';

export default function LocationListContainer(): React.ReactElement {
  const { loading, data } = useLocationsListQuery();
  return React.createElement(LocationListComponent, { loading, locations: data?.locations });
}
