import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';

import { useOrderPriceLazyQuery, useProductAttachmentsQuery } from '~/graphql/graphql';
import useStyles from '../styles/styles';
import AttachmentsCard from '../AttachmentsCard/attachments-card';
import CheckoutCard from '../CheckoutCard/checkout-card';
import { goToNextOrderStep } from '~/components/order/helpers/orderStepsHelpers';

import AttachmentsList from '../AttachmentsList/attachments-list';
import OrderProgress from '~/shared/OrderProgress/order-progress';

const ProductAttachments = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id as string;

  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [selectedBundleIds, setSelectedBundleIds] = useState([]);
  const { loading: loadingProduct, data: productData } = useProductAttachmentsQuery({ variables: { id } });
  const [checkOrderPrice, { data: orderPriceData }] = useOrderPriceLazyQuery();

  useEffect(() => {
    setLocation(localStorage.getItem('orderLocation'));
    setStartDate(new Date(localStorage.getItem('orderStartDate')));
    setEndDate(new Date(localStorage.getItem('orderEndDate')));
    setSelectedServiceIds(JSON.parse(localStorage.getItem('orderServiceIds')) || []);
    setSelectedBundleIds(JSON.parse(localStorage.getItem('orderBundleIds')) || []);
  }, []);

  useEffect(() => {
    if (!productData) return;

    checkOrderPrice({
      variables: {
        startDate,
        endDate,
        productId: id,
        serviceIds: selectedServiceIds,
        attachmentIds: selectedBundleIds.map((bundleId) => {
          return productData.product.productModel.productModelBundles.find((bundle) => bundle.id === bundleId)
            ?.products[0]?.id;
        }),
      },
    });
  }, [id, selectedBundleIds, selectedServiceIds, startDate, endDate, productData]);

  const handleServiceUnselect = (serviceId: string) => {
    const newArray = [...selectedServiceIds];
    newArray.splice(selectedServiceIds.indexOf(serviceId), 1);
    setSelectedServiceIds(newArray);
  };

  const handleBundleUnselect = (bundleId: string) => {
    const newArray = [...selectedBundleIds];
    newArray.splice(selectedBundleIds.indexOf(bundleId), 1);
    setSelectedBundleIds(newArray);
  };

  const handleSubmit = () => {
    localStorage.setItem('orderServiceIds', JSON.stringify(selectedServiceIds));
    localStorage.setItem('orderBundleIds', JSON.stringify(selectedBundleIds));
    goToNextOrderStep(router, id, `/product/${id}/personal-data`);
  };

  return (
    <>
      <OrderProgress orderStep={1} />
      {loadingProduct && <p>Loading...</p>}

      {productData && (
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={6}>
            <AttachmentsCard
              services={productData.product.services}
              selectedServiceIds={selectedServiceIds as [string]}
              handleServiceSelect={(serviceId) => setSelectedServiceIds(selectedServiceIds.concat(serviceId))}
              handleServiceUnselect={handleServiceUnselect}
              standardAttachments={productData.product.productModel.attributes.accessories}
              bundles={productData.product.productModel.productModelBundles}
              selectedBundlesIds={selectedBundleIds as [string]}
              businessDays={orderPriceData?.orderPrice.businessDays}
              handleBundlesSelect={(bundleId) => setSelectedBundleIds(selectedBundleIds.concat(bundleId))}
              handleBundlesUnselect={handleBundleUnselect}
              productModelKey={productData.product.productModel.key}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <CheckoutCard productModel={productData.product.productModel}>
              <AttachmentsList
                startDate={startDate}
                endDate={endDate}
                location={location}
                standardAttachments={productData.product.productModel.attributes.accessories}
                services={productData.product.services}
                bundles={productData.product.productModel.productModelBundles}
                orderPriceData={orderPriceData}
                handleSubmit={handleSubmit}
                enableAddDiscount
              />
            </CheckoutCard>
          </Grid>

        </Grid>
      )}
    </>
  );
};

export default ProductAttachments;
