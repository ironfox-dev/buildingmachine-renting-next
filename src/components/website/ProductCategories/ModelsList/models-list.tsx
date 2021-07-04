import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import productTypeAssets from '~/constants/productTypeAssets';
import { currencyFormat } from '~/utils/format';
import useStyles from './models-list.style';
import { ModelsListProps } from '../../website.interfaces';

const ModelsList = ({ productType, onProductModelSelect }: ModelsListProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const filterModelProducts = () =>
    productType.productModel.filter((model) => model.products.some((product) => product.priceMonthly));

  const findModelMinPrice = (model) => {
    return model.products.filter((prod) => prod.priceMonthly).sort((a, b) => a.priceMonthly - b.priceMonthly)[0]
      ?.priceMonthly;
  };

  return (
    <Grid container justify="space-evenly" className={classes.container}>
      <Typography className={classes.header} variant="h2">
        {filterModelProducts().length} {t('website:offer')}
      </Typography>

      {filterModelProducts()
        .sort((a, b) => findModelMinPrice(a) - findModelMinPrice(b))
        .map((model) => (
          <Grid container justify="center" key={model.id} className={classes.modelItem}>
            <img
              className={classes.image}
              onError={(event) => {
                event.persist();
                const target = event.target as HTMLImageElement;
                target.src = productTypeAssets[productType.name].icon;
              }}
              src={`/images/product_models/${model.key}.webp`}
              alt={productType.name}
            />

            <Grid container justify="space-between" alignItems="baseline">
              <Typography className={classes.modelName} variant="h4">
                {model.manufacturer.abbreviation || model.manufacturer.name} {model.name}
              </Typography>
            </Grid>

            <Grid container style={{marginTop: 5}}>
              <Typography className={classes.typeName} variant="body1">
                {productType.name}
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="body1">
                {model.attributes.key_parameter_name} {model.attributes.key_parameter_value}&nbsp;
                {model.attributes.key_parameter_unit}
              </Typography>
            </Grid>

            <Grid container justify="space-between" alignItems="center" className={classes.actionRow}>
              <Typography className={classes.modelPrice} variant="body1">
                {t('website:from')}&nbsp;
                <span>{currencyFormat(findModelMinPrice(model))}</span>
                &nbsp;| {t('website:day')}
              </Typography>

              <Button variant="contained" size="large" color="primary" onClick={() => onProductModelSelect(model.key)}>
                {t('website:rent_now')}
              </Button>
            </Grid>

            {!!model.attributes.accessories?.length && (
              <Typography className={classes.accessories} variant="body1">
                {t('order:incl')}. {model.attributes.accessories.join(', ')}
              </Typography>
            )}
          </Grid>
        ))}
    </Grid>
  );
};

export default ModelsList;
