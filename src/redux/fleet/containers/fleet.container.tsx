import React from 'react';

import { useLocationsListQuery } from '~/graphql/graphql';

import ProductTable from './product-table.container';
import { Grid, Button, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import fleetStyle from './fleet.style';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(fleetStyle);

const Fleet = (): React.ReactElement => {
  const router = useRouter();
  const classes = useStyles();
  const { t } = useTranslation();

  const { data: locations } = useLocationsListQuery();

  return (
    <>
      {locations && (
        <Grid className={classes.fleetContainer}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Typography className={classes.fleetOverviewTitle} variant="h1">
              {t('fleet:fleet_overview')}
            </Typography>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              onClick={() => router.push('/product')}
            >
              {t('fleet:add_new_machine')}
            </Button>
          </Grid>

          <ProductTable locations={locations?.locations} />
        </Grid>
      )}
    </>
  );
};

export default Fleet;
