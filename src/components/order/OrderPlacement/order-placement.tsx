import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { useOrderPriceLazyQuery, useProductAttachmentsQuery, useCreateOrderMutation } from '~/graphql/graphql';
import { useSnackbar } from '~/shared/index';

import useStyles from '../styles/styles';
import OrderPlacementCard from '../OrderPlacementCard/order-placement-card';
import OrderSummary from '../OrderSummary/order-summary';
import OrderConfirmationCard from '../OrderConfirmationCard/order-confirmation-card';
import OrderProgress from '~/shared/OrderProgress/order-progress';
import { finishOrderCreationSteps } from '~/components/order/helpers/orderStepsHelpers';

const OrderPlacement = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id as string;
  const { Snackbar, showSnackbar } = useSnackbar();

  const [appliedDiscountCode, setAppliedDiscountCode] = useState<string | null>(null);
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [selectedBundleIds, setSelectedBundleIds] = useState([]);
  const [orderPersonalData, setOrderPersonalData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loading: loadingProduct, data: productData } = useProductAttachmentsQuery({ variables: { id } });
  const [checkOrderPrice, { data: orderPriceData }] = useOrderPriceLazyQuery();
  const [createOrder] = useCreateOrderMutation();

  useEffect(() => {
    setLocation(localStorage.getItem('orderLocation'));
    const storedStartDate = localStorage.getItem('orderStartDate');
    const storedEndDate = localStorage.getItem('orderEndDate');
    const orderAppliedDiscount = localStorage.getItem('orderAppliedDiscount');
    if (!storedStartDate || !storedEndDate) router.push('/categories');

    setStartDate(new Date(storedStartDate));
    setEndDate(new Date(storedEndDate));
    setSelectedServiceIds(JSON.parse(localStorage.getItem('orderServiceIds')) || []);
    setSelectedBundleIds(JSON.parse(localStorage.getItem('orderBundleIds')) || []);
    setOrderPersonalData(JSON.parse(localStorage.getItem('orderPersonalData')));

    if(orderAppliedDiscount){
      const parsedDiscount = JSON.parse(orderAppliedDiscount);
      setAppliedDiscountCode(parsedDiscount.code);
    }
  }, []);

  useEffect(() => {
    if (!productData || !startDate || !endDate) return;

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
  }, [productData, startDate, endDate]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      await createOrder({
        variables: {
          order: {
            location,
            productId: id,
            serviceIds: selectedServiceIds,
            bundleIds: selectedBundleIds,
            firstName: orderPersonalData.firstName,
            lastName: orderPersonalData.lastName,
            gender: orderPersonalData.gender,
            companyName: orderPersonalData.companyName,
            email: orderPersonalData.email,
            phoneNumber: +orderPersonalData.phoneNumber,
            phoneCode: +orderPersonalData.phoneCode,
            deliveryMethod: orderPersonalData.deliveryMethod,
            startDate: orderPersonalData.pickupTime,
            endDate: orderPersonalData.returnTime,
            channel: 'online',
            discountCode: appliedDiscountCode,
            personalAddress: {
              address: orderPersonalData.address,
              city: orderPersonalData.city,
              country: orderPersonalData.country,
              zipCode: orderPersonalData.zipCode,
            },
            projectAddress: {
              address: orderPersonalData.projectAddress,
              city: orderPersonalData.projectCity,
              country: orderPersonalData.projectCountry,
              zipCode: orderPersonalData.projectZipCode,
            },
          },
        },
      });

      router.push(`/product/${id}/thanks`);
      finishOrderCreationSteps();
    } catch (err) {
      showSnackbar('error', `Error placing order: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <OrderProgress orderStep={3} />
      {loadingProduct && <p>Loading...</p>}

      {productData && orderPersonalData && (
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={6}>
            <OrderPlacementCard>
              <OrderSummary
                personalData={orderPersonalData}
                location={location}
                startDate={startDate}
                endDate={endDate}
              />
            </OrderPlacementCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <OrderConfirmationCard
              product={productData.product}
              orderPriceData={orderPriceData}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </Grid>

          <Snackbar />
        </Grid>
      )}
    </>
  );
};

export default OrderPlacement;
