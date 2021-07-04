import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { get, isEmpty } from 'lodash';
import { Grid } from '@material-ui/core';

import {
  useLocationsListQuery,
  useOrderPriceLazyQuery,
  useProductOwnersQuery,
  useProductModelByFilterLazyQuery,
  ProductModelByFilterQuery,
} from '~/graphql/graphql';
import ProductInfoCard from '../ProductInfoCard/product-info-card';
import CheckoutCard from '../CheckoutCard/checkout-card';
import OrderForm from '../OrderForm/order-form';
import ProductPrices from '../ProductPrices/product-prices';
import { goToNextOrderStep } from '~/components/order/helpers/orderStepsHelpers';
import useStyles from '../styles/styles';
import OrderProgress from '~/shared/OrderProgress/order-progress';
import { useSnackbar } from '~/shared/index';

const ProductDetails = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const { Snackbar, showSnackbar } = useSnackbar();
  const productModelKey = router.query.id as string;
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [productModelDataState, setProductModelDataState] = useState<ProductModelByFilterQuery['productModels'][0]>(
    null
  );
  const [productState, setProductState] = useState<ProductModelByFilterQuery['productModels'][0]['products'][0]>(null);
  const [isProductsAvailable, setIsProductsAvailable] = useState<boolean>(false);
  const { data: owners } = useProductOwnersQuery();
  const { loading: loadingLocations, data: locationsData } = useLocationsListQuery();
  const [checkOrderPrice, { loading: loadingOrderPrice, data: orderPriceData }] = useOrderPriceLazyQuery();
  const [
    fetchProductModelByKey,
    { loading: productModelLoading, data: productModelsData, error: productModelError },
  ] = useProductModelByFilterLazyQuery();
  useEffect(() => {
    setStartDate(
      localStorage.getItem('orderStartDate') ? new Date(localStorage.getItem('orderStartDate')) : new Date()
    );
    setEndDate(localStorage.getItem('orderEndDate') ? new Date(localStorage.getItem('orderEndDate')) : new Date());
  }, []);

  useEffect(() => {
    if (productModelKey && startDate && endDate && owners && location) {
      fetchProductModelByKey({
        variables: {
          filter: {
            key: productModelKey,
          },
          startTime: startDate,
          locationId: location,
          endTime: endDate,
          ownerId: owners.productOwners.find((owner) => owner.isFlexcavo)?.id,
        },
      });
    }
  }, [productModelKey, startDate, endDate, owners, location]);

  useEffect(() => {
    if (productModelError) {
      const messageKey = get(productModelError, 'graphQLErrors[0].extensions.exception.response.key');
      showSnackbar('error', t(`message:${messageKey}`));
    }
  }, [productModelError]);

  useEffect(() => {
    if (productModelsData && startDate && endDate) {
      const { products } = productModelsData.productModels[0];
      if (productModelDataState === null) {
        setProductModelDataState(productModelsData.productModels[0]);
      }

      if (isEmpty(products)) {
        setIsProductsAvailable(false);
        setProductState(null);
      } else {
        setIsProductsAvailable(true);
        const firstProduct = products[0];
        setProductState(firstProduct);

        checkOrderPrice({
          variables: {
            startDate,
            endDate,
            productId: firstProduct.id,
            attachmentIds: [],
          },
        });
      }
    }
  }, [productModelsData]);

  useEffect(() => {
    // TODO: update once more locations are possible
    if (locationsData && !location) setLocation(locationsData.locations.find((loc) => loc.city === 'Rosenheim')?.id);
  }, [locationsData]);

  const handleFormSubmit = () => {
    localStorage.setItem('orderStartDate', startDate.toISOString());
    localStorage.setItem('orderEndDate', endDate.toISOString());
    localStorage.setItem('orderLocation', locationsData.locations.find((l) => l.id === location)?.city);
    goToNextOrderStep(router, productState.id, `/product/${productState.id}/attachments-and-services`);
  };

  return (
    <>
      <Snackbar />
      <OrderProgress orderStep={0} />
      {productModelLoading && loadingLocations && <p>Loading...</p>}

      {productModelDataState && locationsData && (
        <Grid container className={classes.root}>
          <Grid item md={6} sm={12}>
            <ProductInfoCard productModel={productModelDataState} />
          </Grid>

          <Grid item md={6} sm={12}>
            <CheckoutCard productModel={productModelDataState}>
              <>
                {productState && <ProductPrices product={productState} />}

                <OrderForm
                  locations={locationsData.locations.filter((location) => location.city === 'Rosenheim')}
                  orderPriceData={orderPriceData}
                  error={productModelError}
                  loadingPriceData={loadingOrderPrice}
                  startDate={startDate}
                  endDate={endDate}
                  location={location}
                  handleStartDateChange={setStartDate}
                  handleEndDateChange={setEndDate}
                  handleLocationChange={setLocation}
                  handleSubmit={handleFormSubmit}
                  isProductsAvailable={isProductsAvailable}
                />
              </>
            </CheckoutCard>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
