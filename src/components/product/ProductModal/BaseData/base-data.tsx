import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import ProductInput from '../../ProductInput/product-input';
import { ProductModalBaseDataProps } from '../../interfaces/interfaces';

const BaseData = (props: ProductModalBaseDataProps): React.ReactElement => {
  const spacing = 2;
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput {...props} name="productionYear" label={t('product:production_year')} isNumber />
        </Grid>
        <Grid item xs>
          <ProductInput {...props} name="serialNumber" label={t('product:serial_number')} required />
        </Grid>
        <Grid item xs>
          <ProductInput {...props} name="unitSerialNumber" label={t('product:telematics_serial_number')} />
        </Grid>

        {/*TODO Show field after updating db structure*/}
        {/*<Grid item xs>*/}
        {/*  <ProductInput {...props} name="" label="BGL Nummer" />*/}
        {/*</Grid>*/}
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput {...props} name="location" label={t('product:location')} required isSelect>
            {props.locations.map((location) => {
              return (
                <MenuItem key={location.id} value={location.id}>
                  {location.name}
                </MenuItem>
              );
            })}
          </ProductInput>
        </Grid>

        {props.hasVin && (
          <Grid item xs>
            <ProductInput {...props} name="vin" label={t('product:vin')} required />
          </Grid>
        )}
      </Grid>

      {/*TODO Show field after updating db structure*/}
      {/*<Grid container spacing={spacing}>*/}
      {/*  <Grid item xs={4}>*/}
      {/*    <ProductInput {...props} name="" label="BGL Kenngröße" />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}

      <Grid container spacing={spacing}>
        <Grid item xs={12}>
          <ProductInput {...props} name="notes" label={t('product:notes')} />
        </Grid>
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs={12}>
          <Typography component="p" variant="body1" noWrap>{t('message:required_field')}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BaseData;
