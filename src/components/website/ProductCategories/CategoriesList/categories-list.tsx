import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import productTypeAssets from '~/constants/productTypeAssets';
import { currencyFormat } from '~/utils/format';
import { ProductTypesQuery } from '~/graphql/graphql';
import useStyles from './categories-list.style';
import { CategoriesListProps } from '../../website.interfaces';

const CategoriesList = ({ productTypes, onProductTypeSelect }: CategoriesListProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const findTypeMinPrice = (type: ProductTypesQuery['productTypes'][0]) => {
    return type.productModel.reduce((accumulator, current) => {
      const productMinPrice = current.products
        .filter((prod) => prod.priceMonthly)
        .sort((a, b) => a.priceMonthly - b.priceMonthly)[0]?.priceMonthly;

      if (productMinPrice < accumulator) return productMinPrice;
      else return accumulator;
    }, Infinity);
  };

  const findTypeProductsCount = (type: string) => {
    const filteredTypes = productTypes.filter((item) => item.name === type);
    return filteredTypes[0].productModel.length;
  };

  return (
    <Grid container justify="space-evenly" className={classes.container}>
      <Typography className={classes.header} variant="h2">
        {t('website:categories')}
      </Typography>

      {productTypes
        .filter((type) => type.productModel.some((model) => model.products.some((prod) => prod.priceMonthly)))
        .sort((a, b) => findTypeMinPrice(a) - findTypeMinPrice(b))
        .map((type) => (
          <Grid
            container
            justify="center"
            key={type.id}
            className={classes.typeItem}
            onClick={() => onProductTypeSelect(type.id)}
          >
            <img
              className={classes.image}
              src={`/images/product_models/${type.productModel[0].key}.webp`}
              alt={type.name}
            />

            <Grid container justify="space-between" alignItems="baseline">
              <Typography className={classes.typeName} variant="h4">
                {type.name}
              </Typography>
              <Typography className={classes.typePrice} variant="body1">
                {t('website:from')}&nbsp;
                <span>{currencyFormat(findTypeMinPrice(type))}</span>
                &nbsp;| {t('website:day')}
              </Typography>
            </Grid>

            <Typography className={classes.typeCount} variant="body1">
              {findTypeProductsCount(type.name)}&nbsp;
              {t('website:items_available')}
            </Typography>
          </Grid>
        ))}
    </Grid>
  );
};

export default CategoriesList;
