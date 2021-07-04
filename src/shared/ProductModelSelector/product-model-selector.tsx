import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Icon } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import productTypeAssets from '~/constants/productTypeAssets';
import { currencyFormat } from '~/utils/format';
import useStyles from './product-model-selector.styles';
import { ProductModelSelectorProps } from '../interfaces';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const ProductModelSelector = ({
  isOpen,
  onCloseButtonClick,
  productTypesList,
  selectedProductType,
  onProductTypeSelection,
  onProductModelSelection,
}: ProductModelSelectorProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const getMinimalMonthlyPrice = (model) =>
    model.products.filter((prod) => prod.priceMonthly).sort((a, b) => a.priceMonthly - b.priceMonthly)[0]?.priceMonthly;

  if (!isOpen) return null;
  return (
    <ClickAwayListener onClickAway={onCloseButtonClick}>
      <Grid container className={classes.wizardModal}>
        <Grid className={classes.wizardCategoriesSection}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.wizardCategoriesHeader}
          >
            <Grid item sm={6} className={classes.wizardCategoriesHeaderCategories}>
              {t('website:categories')}
            </Grid>
          </Grid>

          <Grid container direction="column" className={classes.wizardCategoriesList}>
            {productTypesList
              .filter((type) => type.productModel.some((model) => model.products.some((prod) => prod.priceMonthly)))
              .map((type) => (
                <Grid
                  container
                  key={type.id}
                  alignItems="center"
                  className={selectedProductType?.id === type.id ? classes.wizardCategoryActive : classes.wizardCategory}
                  onClick={() => onProductTypeSelection(type)}
                >
                  <Icon className={classes.wizardCategoryIcon}>
                    <img
                      src={
                        selectedProductType?.id === type.id
                          ? productTypeAssets[type.name]?.iconAlt
                          : productTypeAssets[type.name]?.icon
                      }
                    />
                  </Icon>
                  <span className={classes.wizardCategoryName}>{type.name}</span>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Grid container direction="column" className={classes.wizardResultsSection}>
          <Grid container direction="row" justify="space-between">
            <span className={classes.wizardResultsSectionTitle}>{t('website:most_searched')}</span>
            <Close className={classes.hoverable} onClick={onCloseButtonClick} />
          </Grid>

          <Grid container className={classes.wizardResultsList}>
            {selectedProductType?.productModel
              .filter((model) => model.products.some((prod) => prod.priceMonthly))
              .sort((a, b) => getMinimalMonthlyPrice(a) - getMinimalMonthlyPrice(b))
              .map((model) => (
                <Grid
                  key={model.id}
                  container
                  direction="row"
                  justify="space-between"
                  className={[classes.wizardResult, classes.hoverable].join(' ')}
                  onClick={() => onProductModelSelection(model)}
                >
                  <Grid item>
                    <Grid container direction="row" alignItems="center">
                      <img className={classes.wizardResultIcon} src={productTypeAssets[selectedProductType.name]?.icon} />

                      <Grid>
                        <h4 className={classes.wizardResultTitle}>
                          {model.manufacturer.abbreviation || model.manufacturer.name} {model.name}
                        </h4>
                        <h6 className={classes.wizardResultSubtitle}>
                          <span className={classes.wizardResultSubtitleManufacturer}>{selectedProductType.name}</span>
                          <span className={classes.wizardResultSubtitleDescription}>
                            {model.attributes.key_parameter_name} {model.attributes.key_parameter_value}&nbsp;
                            {model.attributes.key_parameter_unit}
                          </span>
                        </h6>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid>
                    <span className={classes.bestSellerItemPriceTag}>
                      {t('website:from')}&nbsp;
                      <span className={classes.bestSellerItemPrice}>{currencyFormat(getMinimalMonthlyPrice(model))}</span>
                      &nbsp;| {t('website:day')}
                    </span>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </ClickAwayListener>
  );
};

export default ProductModelSelector;
