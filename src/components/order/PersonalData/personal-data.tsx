import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import {
  useAccountInfoLazyQuery,
  useOrderPriceLazyQuery,
  useProductAttachmentsQuery,
  useRegistrationMutation,
} from '~/graphql/graphql';
import useStyles from '../styles/styles';
import CheckoutCard from '../CheckoutCard/checkout-card';
import AttachmentsList from '../AttachmentsList/attachments-list';
import PersonalDataCard from '../PersonalDataCard/personal-data-card';
import PersonalDataForm from '../PersonalDataForm/personal-data-form';
import DeliveryForm from '../DeliveryForm/delivery-form';
import { goToNextOrderStep } from '~/components/order/helpers/orderStepsHelpers';
import OrderProgress from '~/shared/OrderProgress/order-progress';
import { getCookie } from '~/utils/cookie';

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const PersonalData = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id as string;
  const isAuth = typeof window !== 'undefined' ? getCookie('flexcavoToken') : false;
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [selectedBundleIds, setSelectedBundleIds] = useState([]);

  const [formValues, setFormValues] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [pickupTime, setPickupTime] = useState(new Date(startDate));
  const [returnTime, setReturnTime] = useState(new Date(endDate));
  const [getAccountInfo, { loading: loadingAccountInfo, data: accountInfo }] = useAccountInfoLazyQuery();

  useEffect(() => {
    setLocation(localStorage.getItem('orderLocation'));
    const storedStartDate = localStorage.getItem('orderStartDate');
    const storedEndDate = localStorage.getItem('orderEndDate');
    setStartDate(new Date(storedStartDate));
    setEndDate(new Date(storedEndDate));
    setSelectedServiceIds(JSON.parse(localStorage.getItem('orderServiceIds')) || []);
    setSelectedBundleIds(JSON.parse(localStorage.getItem('orderBundleIds')) || []);
    const orderPersonalData = JSON.parse(localStorage.getItem('orderPersonalData'));
    setFormValues(orderPersonalData);
    setDeliveryMethod(orderPersonalData?.deliveryMethod || 'pickup');
    setPickupTime(orderPersonalData?.pickupTime ? new Date(orderPersonalData.pickupTime) : new Date(storedStartDate));
    setReturnTime(orderPersonalData?.returnTime ? new Date(orderPersonalData.returnTime) : new Date(storedEndDate));

    if (isAuth && !orderPersonalData) {
      getAccountInfo();
    }
  }, []);

  useEffect(() => {
    if (accountInfo) {
      const {
        getAccount: { name, users, addresses },
      } = accountInfo;

      const user = users[0];
      const address = addresses[0];

      setFormValues({
        companyName: name,
        gender: user.gender,
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        phoneCode: user.phoneCode,
        phoneNumber: user.phone,
        address: address.street,
        zipCode: address.postalCode,
        city: address.city,
        country: address.country,
        projectAddress: '',
        projectZipCode: '',
        projectCity: '',
        projectCountry: '',
        skipRegistration: true,
        password: '',
      });
    }
  }, [accountInfo]);

  const [isPickupTimeInvalid, setIsPickupTimeInvalid] = useState(false);
  const [isReturnTimeInvalid, setIsReturnTimeInvalid] = useState(false);
  const [pickupDayOperatingHours, setPickupDayOperatingHours] = useState([]);
  const [returnDayOperatingHours, setReturnDayOperatingHours] = useState([]);

  const { loading: loadingProduct, data: productData } = useProductAttachmentsQuery({ variables: { id } });
  const [checkOrderPrice, { data: orderPriceData }] = useOrderPriceLazyQuery();
  const [register, { loading: mutationLoading, error: mutationError, data: mutationData }] = useRegistrationMutation();

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

    const findOperatingHour = (date: Date) => {
      return productData.product.location.operatingHour.find((opHour) => opHour.weekDay === days[date.getDay()]);
    };
    const pickupDateOperatingHour = findOperatingHour(startDate);
    const returnDateOperatingHour = findOperatingHour(endDate);
    setPickupDayOperatingHours([pickupDateOperatingHour.startTime, pickupDateOperatingHour.endTime]);
    setReturnDayOperatingHours([returnDateOperatingHour.startTime, returnDateOperatingHour.endTime]);
  }, [productData, startDate, endDate]);

  const validateTime = (date: Date, operatingHours: string[]): boolean => {
    const [openingTimeHours, openingTimeMinutes] = operatingHours[0].split(':').map((part) => parseInt(part));
    const [closingTimeHours, closingTimeMinutes] = operatingHours[1].split(':').map((part) => parseInt(part));
    const openingTime = openingTimeHours * 60 + openingTimeMinutes;
    const closingTime = closingTimeHours * 60 + closingTimeMinutes;
    const time = date.getHours() * 60 + date.getMinutes();
    return time < openingTime || time > closingTime;
  };

  const handlePickupTimeChange = (time: Date) => {
    const date = new Date(startDate);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    setPickupTime(date);
    setIsPickupTimeInvalid(validateTime(date, pickupDayOperatingHours));
  };

  const handleReturnTimeChange = (time: Date) => {
    const date = new Date(endDate);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    setReturnTime(date);
    setIsReturnTimeInvalid(validateTime(date, returnDayOperatingHours));
  };

  const handleFormSubmit = async (values) => {
    const mutableValues = { ...values };
    if (deliveryMethod === 'pickup') {
      if (!pickupTime || validateTime(pickupTime, pickupDayOperatingHours)) {
        setIsPickupTimeInvalid(true);
        return;
      }

      if (!returnTime || validateTime(returnTime, returnDayOperatingHours)) {
        setIsReturnTimeInvalid(true);
        return;
      }

      mutableValues.pickupTime = pickupTime;
      mutableValues.returnTime = returnTime;
    } else {
      mutableValues.pickupTime = startDate;
      mutableValues.returnTime = endDate;
    }
    mutableValues.deliveryMethod = deliveryMethod;

    localStorage.setItem('orderPersonalData', JSON.stringify(mutableValues));

    if (!values.skipRegistration && !isAuth) {
      await register({
        variables: {
          user: {
            companyName: values.companyName,
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            phone: values.phoneNumber.toString(),
            phoneCode: values.phoneCode,
            street: values.address,
            city: values.city,
            postalCode: values.zipCode,
            country: values.country,
            password: values.password,
            position: '',
            gender: values.gender,
          },
        },
      });
    }

    goToNextOrderStep(router, id, `/product/${id}/order-placement`);
  };
  const isDataReady = productData && location && startDate && endDate && (isAuth ? formValues : true);

  return (
    <>
      <OrderProgress orderStep={2} />
      {loadingProduct && <p>Loading...</p>}
      {isDataReady && (
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={6}>
            <PersonalDataCard>
              <PersonalDataForm
                fields={formValues}
                handleFormSubmit={handleFormSubmit}
                isRegistration={false} // TODO: change to !isAuth when it's needed
              >
                <DeliveryForm
                  location={location}
                  startDate={startDate}
                  endDate={endDate}
                  deliveryMethod={deliveryMethod}
                  pickupTime={pickupTime}
                  returnTime={returnTime}
                  pickupTimeHint={pickupDayOperatingHours.join(' - ')}
                  returnTimeHint={returnDayOperatingHours.join(' - ')}
                  isPickupTimeInvalid={isPickupTimeInvalid}
                  isReturnTimeInvalid={isReturnTimeInvalid}
                  handlePickupTimeChange={handlePickupTimeChange}
                  handleReturnTimeChange={handleReturnTimeChange}
                  handleDeliveryMethodChange={(e) => setDeliveryMethod(e.target.value)}
                />
              </PersonalDataForm>
            </PersonalDataCard>
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
              />
            </CheckoutCard>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PersonalData;
