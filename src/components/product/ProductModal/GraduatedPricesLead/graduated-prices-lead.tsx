import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

import ProductInput from '../../ProductInput/product-input';
import { ProductFormProps } from '../../interfaces/interfaces';

const GraduatedPricesLead = (props: ProductFormProps): React.ReactElement => {
  const { t } = useTranslation();

  const spacing = 2;
  const calculateWeekend = [
    { value: 1, label: t('common:yes') },
    { value: 0, label: t('common:no') },
  ];

  return (
    <>
      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput
            {...props}
            name="priceDaily"
            label={t('common:priceDaily')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
            required
          />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="priceWeekly"
            label={t('common:priceWeekly')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
            required
          />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="priceMonthly"
            label={t('common:priceMonthly')}
            isNumber
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
            required
          />
        </Grid>
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput {...props} name="calculateWeekend" label={t('product:calculate_weekend')} isSelect>
            {calculateWeekend.map((option) => {
              return (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </ProductInput>
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="productLeadTime"
            label={t('common:leadTime')}
            isNumber
            InputProps={{
              endAdornment: <InputAdornment position="end">hr</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs>
          <ProductInput
            {...props}
            name="serviceTime"
            label={t('common:blockTime')}
            isNumber
            InputProps={{
              endAdornment: <InputAdornment position="end">hr</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default GraduatedPricesLead;
