import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';

import ProductInput from '../../ProductInput/product-input';
import { ProductFormProps } from '../../interfaces/interfaces';

const OccupationalSafety = (props: ProductFormProps): React.ReactElement => {
  const spacing = 2;
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput {...props} name="instruction" label={t('product:instruction')} isMultiline />
        </Grid>
      </Grid>

      <Grid container spacing={spacing}>
        <Grid item xs>
          <ProductInput {...props} name="workClothing" label={t('product:work_clothing')} isMultiline />
        </Grid>
      </Grid>
    </>
  );
};

export default OccupationalSafety;
