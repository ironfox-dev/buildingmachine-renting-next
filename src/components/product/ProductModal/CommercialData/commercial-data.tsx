import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

import ProductInput from '../../ProductInput/product-input';
import { ProductModalCommercialDataProps } from '../../interfaces/interfaces';

const CommercialData = (props: ProductModalCommercialDataProps): React.ReactElement => {
  const spacing = 2;
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput
            {...props}
            name="purchasePrice"
            label={t('product:purchase_price')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="deposit"
            label={t('product:deposit')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="leasingRate"
            label={t('product:leasing_rate')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput
            {...props}
            name="interest"
            label={t('product:interest')}
            isNumber
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs>
          <ProductInput {...props} name="residualValue" label={t('product:residual_value')} isNumber />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="owner"
            label={t('product:owner')}
            handleChange={(event): void => {
              props.setFieldValue('owner', event.target.value);
              props.handleOwnerChange(event.target.value);
            }}
            isSelect
          >
            {props.owners.map((owner) => {
              return (
                <MenuItem key={owner.id} value={owner.name}>
                  {owner.name}
                </MenuItem>
              );
            })}
          </ProductInput>
        </Grid>
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs={12}>
          <ProductInput {...props} name="notes" label={t('product:notes')} />
        </Grid>
      </Grid>
    </>
  );
};

export default CommercialData;
