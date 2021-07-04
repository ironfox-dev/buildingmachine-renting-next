import React, { useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import rentalStyle from '~/components/rental/rental.style';
import { defaultLocation } from '~/constants/common';

interface OrderAddressMapInterface {
  currentAddress: string;
  city: string;
}

const OrderAddressMap = ({ currentAddress, city }: OrderAddressMapInterface): React.ReactElement => {
  const useStyles = makeStyles(rentalStyle);
  const styles = useStyles();
  const [currentPosition, setCurrentPosition] = React.useState(defaultLocation);

  useEffect(() => {
    if (currentAddress) {
      geocodeByAddress(`${currentAddress}, ${city}`)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => setCurrentPosition(latLng))
        .catch((error) => console.error('Error', error));
    }
  }, [currentAddress]);

  return (
    <GoogleMap id="order-address-map" mapContainerClassName={styles.mapContainer} zoom={13} center={currentPosition}>
      <Marker position={currentPosition} />;
    </GoogleMap>
  );
};

export default OrderAddressMap;
