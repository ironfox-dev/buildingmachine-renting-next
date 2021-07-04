import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import useStyles from './product-modal-header.styles';
import { ProductModalHeaderProps } from '../../interfaces/interfaces';
import productTypeAssets from '~/constants/productTypeAssets';

const ProductModalHeader = ({
  abbreviation,
  name,
  type,
  typeName,
  isSelectMode,
}: ProductModalHeaderProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={9}>
        <Typography variant="h6">{t('product:create_new_machine')}</Typography>
      </Grid>
      {isSelectMode && (
        <Grid item xs={3} container justify="flex-end" alignItems="center">
          <Grid item>
            {typeName && productTypeAssets[typeName] && (
              <img style={{ marginRight: 10 }} src={productTypeAssets[typeName]?.icon} />
            )}
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Typography component="p" variant="body1" noWrap className={classes.headerProductName}>
                {`${abbreviation} ${name}`}
              </Typography>
              <Typography component="p" variant="body1" color="primary" className={classes.headerProductType}>
                {type}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductModalHeader;
