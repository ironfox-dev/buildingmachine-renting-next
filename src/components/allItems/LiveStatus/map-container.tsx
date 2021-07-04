import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { defaultLocation } from '~/constants/common';
import { Typography, Grid, Box } from '@material-ui/core';
import useStyles from './live-status.style';
import { get } from 'lodash';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { ProductData } from '../interfaces';

const MapContainer = ({ product, last24Hours }: { product: ProductData; last24Hours: number }): React.ReactElement => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);

  const productLocation = product?.locationLatitude
    ? { lat: product?.locationLatitude, lng: product?.locationLongitude }
    : defaultLocation;

  return (
    <>
      <GoogleMap
        id="machine-location-map"
        mapContainerClassName={classes.mapContainer}
        zoom={13}
        center={productLocation}
      >
        <Marker key={'machine-current-location'} position={productLocation} onClick={() => setIsInfoOpen(true)} />;
        {isInfoOpen && (
          <InfoWindow onCloseClick={() => setIsInfoOpen(false)} position={productLocation}>
            <Grid container direction="column" className={classes.infoBox}>
              <Typography variant="h1" className={classes.mapAddressTitle}>
                {get(product, ['productModel', 'type', 'name'])} {get(product, ['productModel', 'name'])}
              </Typography>
              <Typography variant="body1" className={classes.mapAddress}>
                {product?.locationFormattedAddress}
              </Typography>
              <Typography variant="body1" className={classes.mapAddress}>
                {moment(product?.locationTimestamp).format('MMMM Do YYYY, h:mm:ss a')}
              </Typography>
              <div className={classes.separator} />
              <Box display="flex" width={1} justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1" className={classes.tooltipSectionTitle}>
                    {product?.operatingHours} {t('hrs')}
                  </Typography>
                  <Typography variant="body1" className={classes.mapAddress}>
                    {t('total')}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1" className={classes.tooltipSectionTitle}>
                    {last24Hours} {t('mins')}
                  </Typography>
                  <Typography variant="body1" className={classes.mapAddress}>
                    {t('last')} 24 {t('hrs')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};
export default MapContainer;
