import React, { ReactElement, useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link';

import { green, primary } from '~/constants/colors';
import clientConfig from '~/components/client_config.json';
import useStyles from './allItems-layout.style';
import { useVerticalTabbable } from '~/shared/index';
import { useProductsModelsLazyQuery } from '~/graphql/graphql';

// Machine temporary data for display
const fleetItem = {
  fleetName: 'Flexcavo 001 - ',
};

const AllItems = (): ReactElement => {
  const { t } = useTranslation();
  const classes = useStyles();
  const router = useRouter();
  const { NavigationTab, ControlledPannel } = useVerticalTabbable();
  const [tabItems] = useState(clientConfig.components.find((c) => c.component === 'AllItems').properties.tabItems);

  const { id: currentProductId } = router.query;
  const currentDateTime = moment().toISOString();
  const [getProductModel, { data: productModel }] = useProductsModelsLazyQuery();

  useEffect(() => {
    if (getProductModel) {
      getProductModel({
        variables: { id: currentProductId as string, fromDate: currentDateTime },
      });
    }
  }, [getProductModel]);

  const productTypeImageSwitch = (type) => {
    switch (type) {
      case 'Minibagger':
        return '/images/minibagger.png';
      case 'Rüttelplatte':
        return '/images/ruttelplatte.png';
      case 'Radlader':
        return '/images/radlader.png';
      case 'Raupenbagger':
        return '/images/raupenbagger.png';
      case 'Mini-Raupenkipper':
        return '/images/mini-raupenkipper.png';
      case 'Stampfer':
        return '/images/stampfer.png';
      default:
        return '/images/minibagger.png';
    }
  };
  return (
    <Grid>
      <Grid className={classes.tabLayoutContainer}>
        <Grid container justify="center" alignItems="center">
          <Link href="/fleet">
            <Button
              color="primary"
              className={classes.backToOverViewButton}
              startIcon={<ArrowBackIosIcon color="primary" fontSize="small" className={classes.backArrowIcon} />}
            >
              {t('fleet:fleet_overview')}
            </Button>
          </Link>
        </Grid>
        {productModel && (
          <Grid item className={classes.fleetItemInfoContainer}>
            <Typography variant="h1" className={classes.fleetNameTitle}>
              {fleetItem.fleetName}
              {productModel.product.productModel.manufacturer.abbreviation}&nbsp;
              {productModel.product.productModel.name}
            </Typography>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Typography color="primary">{productModel.product.productModel.type.name}</Typography>
              <Box
                className={classes.fleetStatus}
                style={{
                  backgroundColor: productModel.product.availability.status === 'available' ? green : primary,
                }}
              >
                <Typography>
                  {productModel.product.availability.status === 'available' ? t('fleet:available') : t('fleet:rented')}
                </Typography>
              </Box>
            </Grid>
            <img
              src={productTypeImageSwitch(productModel.product.productModel.type.name)}
              alt="fleet-image"
              className={classes.fleetImage}
            />
          </Grid>
        )}
        <NavigationTab items={tabItems} indicatorColor="primary" textColor="primary" />
        <Grid container justify="center" alignItems="center">
          <Button variant="contained" className={classes.settingsButton}>
            {t('fleet:settings')}
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.itemInfoContent}>
        <ControlledPannel items={tabItems} />
      </Grid>
    </Grid>
  );
};

export default AllItems;
