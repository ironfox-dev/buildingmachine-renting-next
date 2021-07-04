import React, { useState, memo } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

import { ProductSelectionProps } from '../../interfaces/interfaces';
import useStyles from './product-selection.styles';
import ProductModelSelector from '~/shared/ProductModelSelector/product-model-selector';
import productTypeAssets from '~/constants/productTypeAssets';

const rows = [
  {
    id: 1,
    productAttrs: [
      {
        title: 'weight',
        symbol: 'cm',
      },
      {
        title: 'width',
        symbol: 'cm',
      },
      {
        title: 'height',
        symbol: 'cm',
      },
      {
        title: 'length',
      },
    ],
  },
  {
    id: 2,
    productAttrs: [
      {
        title: 'length',
        symbol: 'cm',
      },
      {
        title: 'enginePower',
      },
      {
        title: 'maxReach',
        symbol: 'cm',
      },
    ],
  },
];

const ProductSelection = ({
  productTypes,
  productModel,
  productType,
  handleModelChange,
  handleTypeChange,
}: ProductSelectionProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isMachinesModalOpen, setIsMachinesModalOpen] = useState(false);

  const onProductTypeSelection = (type) => {
    handleTypeChange(type);
    handleModelChange(null);
  };

  const onProductModelSelection = (model) => {
    handleModelChange(model);
    setIsMachinesModalOpen(false);
  };

  const onClearButtonClick = (event) => {
    event.stopPropagation();
    handleTypeChange(null);
    handleModelChange(null);
  };

  return (
    <div className={classes.wizardWrap}>
      <Grid container className={classes.wizardContainer} onClick={() => setIsMachinesModalOpen(true)}>
        <div className={classes.label}>{t('website:machine')}</div>
        <fieldset className={classes.fieldset}>
          <Grid container justify="space-between">
            <Grid item className={classes.wizardSelectedValue}>
              <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                <div className={classes.wizardCellValue}>
                  {productModel
                    ? `${productModel.manufacturer.abbreviation || productModel.manufacturer.name} ${productModel.name}`
                    : productType?.name || t('website:all_machines')}
                </div>
                {productType && <Close className={classes.hoverable} onClick={onClearButtonClick} />}
              </Grid>
            </Grid>
          </Grid>
        </fieldset>
      </Grid>

      <ProductModelSelector
        isOpen={isMachinesModalOpen}
        onCloseButtonClick={() => setIsMachinesModalOpen(false)}
        productTypesList={productTypes}
        selectedProductType={productType}
        onProductTypeSelection={onProductTypeSelection}
        onProductModelSelection={onProductModelSelection}
      />
      {productModel && productType && (
        <Box flexDirection="column" width={1}>
          <Box display="flex" alignItems="center" className={classes.modelView}>
            <Box width={3 / 8} mr={7} display="flex" alignItems="center" justifyContent="center">
              <img width="200" src={productTypeAssets[productType.name]?.icon} />
            </Box>
            <Box width={5 / 8}>
              {rows.map((row) => (
                <Box key={row.id} display="flex" mb={4}>
                  {row.productAttrs.map((attr) => (
                    <Box key={attr.title} width={2 / 8}>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {t(`product:attributes.${attr.title}`)}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {productModel.attributes[attr.title]} {attr.symbol}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default memo(ProductSelection);
