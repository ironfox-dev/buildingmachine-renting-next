/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { ReactElement, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import rentalStyle from '../rental.style';
import { Calendar } from '~/shared/index';
import { Button } from '@material-ui/core';
import {
  useExtendedOrderPriceLazyQuery,
  useExtendOrderPeriodMutation,
  useOrderProductsAvailabilityCalendarLazyQuery,
  OrderProductsAvailabilityCalendarModel,
  Scalars,
} from '~/graphql/graphql';
import { currencyFormat } from '~/utils/format';
import { useSnackbar } from '~/shared/index';
import { TimePicker } from '@material-ui/pickers';
import { weekdays } from '~/constants/datetime';
import { EditPeriodProps } from '../interfaces/interfaces';
import ExtendedPeriod from '../ExtendedPeriodDetails/extended-period-details';

const useStyles = makeStyles(rentalStyle);

const getShortDate = (date) => date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

const EditPeriodForm = (props: EditPeriodProps): ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { orderItems, orderId, orderTotal, onClose } = props;

  //startDate and endDate are temp values to run this form.
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);

  const [periodState, setPeriodState] = React.useState(false);
  const [days, setDays] = React.useState(0);

  const { Snackbar, showSnackbar } = useSnackbar();
  const [returnTime, setReturnTime] = useState(endDate);
  const [returnDate, setReturnDate] = useState(endDate);
  const [isReturnTimeInvalid, setIsReturnTimeInvalid] = useState(false);
  const [returnDayOperatingHours, setReturnDayOperatingHours] = useState([]);
  const [orderProductsAvailabilityCalendar, setOrderProductsAvailabilityCalendar] = useState<
    OrderProductsAvailabilityCalendarModel[]
  >([] as OrderProductsAvailabilityCalendarModel[]);

  const [extendedOrderMutation] = useExtendOrderPeriodMutation();

  const [checkOrderPrice, { data: orderPriceData }] = useExtendedOrderPriceLazyQuery({
    fetchPolicy: 'network-only',
  });

  const orderPrice = orderPriceData?.extendedOrderPrice;

  const [
    getOrderProductsAvailability,
    { data: orderProductsAvailabilityData },
  ] = useOrderProductsAvailabilityCalendarLazyQuery({
    fetchPolicy: 'network-only',
  });

  const parentOrderItem = orderItems?.find((val) => val.parentSalesOrderItem === null);
  const additionalOrderItems = orderItems?.filter((val) => val.parentSalesOrderItem !== null);
  const { attributes }: { attributes: Scalars['JSONObject'] } = parentOrderItem?.product?.productModel;
  const standardAttachments = attributes?.accessories;

  const findOperatingHour = (date: Date) => {
    return parentOrderItem?.product?.location?.operatingHour?.find(
      (opHour) => opHour.weekDay === weekdays[date.getDay()]
    );
  };

  const returnDateOperatingHour = findOperatingHour(endDate);

  useEffect(() => {
    if (!orderId || !parentOrderItem) return;
    setReturnDayOperatingHours([returnDateOperatingHour?.startTime, returnDateOperatingHour?.endTime]);
  }, [orderId, parentOrderItem]);

  const fetchOrderProductsAvailability = async (month) => {
    await getOrderProductsAvailability({
      variables: {
        productIds: orderItems.map((item) => item.product.id),
        startMonth: month,
        endMonth: month,
        orderEndDate: endDate,
      },
    });
  };

  useEffect(() => {
    (async () => {
      if (orderId) {
        await fetchOrderProductsAvailability(endDate);
      }
    })();
  }, [orderId]);

  useEffect(() => {
    if (orderProductsAvailabilityData) {
      setOrderProductsAvailabilityCalendar(orderProductsAvailabilityData?.orderProductsAvailabilityCalendar);
    }
  }, [orderProductsAvailabilityData]);

  const extendPeriod = (isExtend, extendDays, extendedEndDate) => {
    setPeriodState(isExtend);
    setDays(extendDays);

    setReturnDate(extendedEndDate);
    setReturnDayOperatingHours([returnDateOperatingHour?.startTime, returnDateOperatingHour?.endTime]);

    const computedEndDate = new Date(extendedEndDate);
    computedEndDate.setHours(returnTime.getHours());
    computedEndDate.setMinutes(returnTime.getMinutes());

    checkOrderPrice({
      variables: {
        orderId,
        startDate,
        endDate: computedEndDate,
        productId: parentOrderItem?.product?.id,
      },
    });
  };

  const extendOrder = async () => {
    const computedEndDate = new Date(returnDate);
    computedEndDate.setHours(returnTime.getHours());
    computedEndDate.setMinutes(returnTime.getMinutes());

    try {
      await extendedOrderMutation({
        variables: {
          order: {
            productId: parentOrderItem?.product?.id,
            startDate,
            endDate: computedEndDate,
            orderId,
            serviceIds: parentOrderItem.salesOrderItemServices.map((service) => service.productServiceId),
            bundleIds: additionalOrderItems ? additionalOrderItems?.map((item) => item?.product?.productModel.id) : [],
          },
        },
        refetchQueries: ['Order'],
      });
      showSnackbar('success', t('order:order_extended_successfully'));
      onClose(true);
    } catch (err) {
      showSnackbar('error', `${t('order:error_extended_order')}: ${err.message}`);
      onClose(true);
    }
  };

  const isInvalidTime = (date: Date, operatingHours: string[]): boolean => {
    const [openingTimeHours, openingTimeMinutes] = operatingHours[0].split(':').map((part) => parseInt(part));
    const [closingTimeHours, closingTimeMinutes] = operatingHours[1].split(':').map((part) => parseInt(part));
    const openingTime = openingTimeHours * 60 + openingTimeMinutes;
    const closingTime = closingTimeHours * 60 + closingTimeMinutes;
    const time = date.getHours() * 60 + date.getMinutes();
    return time < openingTime || time > closingTime;
  };

  const handleReturnTimeChange = (time: Date) => {
    const date = new Date(endDate);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());

    if (isInvalidTime(date, returnDayOperatingHours)) {
      setReturnTime(date);
      setIsReturnTimeInvalid(isInvalidTime(date, returnDayOperatingHours));
      return;
    }

    setReturnTime(date);
    setIsReturnTimeInvalid(false);
  };

  return (
    <>
      <Snackbar />
      <div className={styles.mainPanel}>
        <p className={styles.subTitlePara}>{t('rental:extend')}</p>
        <div className={styles.rangeSeperateLine} />
        <div className={styles.viewRange}>
          <div className={styles.rangeItem}>
            <p className={styles.rangeTitle}>{t('start')}</p>
            <p className={styles.rangeDate}>{getShortDate(startDate)}</p>
          </div>
          <div className={styles.verticalSeperateLine} />
          <div className={styles.rangeItem}>
            <p className={styles.rangeTitle}>{t('end')}</p>
            <p className={styles.rangeDate}>{getShortDate(endDate)}</p>
          </div>
        </div>
        <div className={styles.calculateSeperateLine} />
        <div className={styles.contentPanel}>
          <div className={styles.calendarPanel}>
            <Calendar
              className={styles.calendarPart}
              start_date={startDate}
              end_date={endDate}
              extend_func={extendPeriod}
              is_mobile={false}
              productsAvailabilityCalendar={orderProductsAvailabilityCalendar}
              fetchOrderProductsAvailability={fetchOrderProductsAvailability}
            />
            <Calendar
              className={styles.calendarMobile}
              start_date={startDate}
              end_date={endDate}
              extend_func={extendPeriod}
              productsAvailabilityCalendar={orderProductsAvailabilityCalendar}
              fetchOrderProductsAvailability={fetchOrderProductsAvailability}
              is_mobile={true}
            />

            <TimePicker
              required
              autoOk
              variant="inline"
              inputVariant="outlined"
              label={t('order:return_hours')}
              className={styles.endTimePicker}
              ampm={false}
              helperText={returnDayOperatingHours.join(' - ')}
              value={returnTime}
              error={isReturnTimeInvalid}
              onChange={handleReturnTimeChange}
            />
          </div>

          <div
            className={days === 0 || isReturnTimeInvalid ? styles.extendDetailPanelDisable : styles.extendDetailPanel}
          >
            <ExtendedPeriod
              startDate={startDate}
              endDate={endDate}
              standardAttachments={standardAttachments}
              services={parentOrderItem?.product?.services}
              bundles={additionalOrderItems}
              orderPriceData={orderPriceData}
              parentOrderItem={parentOrderItem}
            />
          </div>
        </div>

        <div className={styles.periodButtons}>
          <Button className={styles.abortButton} onClick={() => onClose(true)}>
            {t('user:abort')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.renewButton}
            disabled={!periodState || isReturnTimeInvalid}
            onClick={extendOrder}
          >
            {periodState
              ? `${t('rental:for')} ${currencyFormat(orderPrice?.orderPrice - orderTotal || 0)}  ${t('rental:renew')}`
              : t('rental:renew')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditPeriodForm;
