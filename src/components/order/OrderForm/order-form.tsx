import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { DatePicker } from '@material-ui/pickers';

import useStyles from './order-form.styles';
import { OrderFormProps } from '../interfaces/interfaces';
import { currencyFormat } from '~/utils/format';
import { PickerProvider } from '~/shared/index';

const OrderForm = ({
  locations,
  orderPriceData,
  error,
  loadingPriceData,
  startDate,
  endDate,
  location,
  handleStartDateChange,
  handleEndDateChange,
  handleLocationChange,
  handleSubmit,
  isProductsAvailable,
}: OrderFormProps): React.ReactElement => {
  const classes = useStyles();
  const [orderPrice, setOrderPrice] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (orderPriceData) setOrderPrice(orderPriceData.orderPrice);
  }, [orderPriceData]);

  const shouldDisableDate = (day) => day.getDay() === 0 || day.getDay() === 6;

  return (
    <form>
      <TextField
        select
        label={t('order:location')}
        variant="outlined"
        className={classes.section}
        value={location}
        onChange={(e) => handleLocationChange(e.target.value as string)}
      >
        {locations.map((location) => {
          return (
            <MenuItem key={location.id} value={location.id}>
              {location.city}
            </MenuItem>
          );
        })}
      </TextField>

      <Grid container justify="space-between" alignItems="center" className={classes.section}>
        <Grid item>
          <PickerProvider>
            <DatePicker
              required
              autoOk
              disablePast
              variant="inline"
              inputVariant="outlined"
              label={t('order:start')}
              format="dd.MM.yyyy"
              className={classes.datePicker}
              value={startDate}
              onChange={handleStartDateChange}
              shouldDisableDate={shouldDisableDate}
            />

            <DatePicker
              required
              autoOk
              disablePast
              variant="inline"
              inputVariant="outlined"
              label={t('order:end')}
              format="dd.MM.yyyy"
              minDateMessage={t('message:min_date')}
              className={classes.datePicker}
              minDate={startDate}
              value={endDate}
              onChange={handleEndDateChange}
              shouldDisableDate={shouldDisableDate}
            />
          </PickerProvider>
        </Grid>

        {loadingPriceData && <Typography variant="body1">Überprüfung...</Typography>}
        <Grid container alignItems="center" className={classes.availability}>
          {isProductsAvailable ? (
            <>
              <CheckIcon className={classes.checkIcon} fontSize="small" />
              <Typography variant="body1">&nbsp;{t('order:available')}</Typography>
            </>
          ) : (
            <>
              <CloseIcon className={classes.crossIcon} fontSize="small" />
              <Typography variant="body1">&nbsp;{t('order:not_available')}</Typography>
            </>
          )}
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        {t('order:rental_duration')}
      </Typography>

      {(!orderPrice || !orderPrice.days) && (
        <Typography variant="body1" className={classes.pricePlaceholder}>
          {t('order:please_select_date')}
        </Typography>
      )}

      {orderPrice && orderPrice.days > 0 && (
        <Grid container justify="space-between">
          <Typography variant="body1">
            {`${orderPrice.businessDays} ${t('order:days')} x €${orderPrice.productPrice.pricePerDay}`}
          </Typography>
          <Typography variant="body1">{currencyFormat(orderPrice.productPrice.totalPrice)}</Typography>
        </Grid>
      )}

      <Divider className={classes.divider} />

      <Grid container justify="space-between">
        <Typography variant="body1" className={classes.totalSum}>
          {t('order:total_sum')} {t('order:excl')}. {t('order:vat')}
        </Typography>
        <Typography variant="body1" className={classes.totalSum}>
          {currencyFormat(orderPrice?.orderSubTotal || 0)}
        </Typography>
      </Grid>

      <Grid container justify="space-between">
        <Typography variant="body1" className={classes.totalSum}>
          19% {t('order:vat')}.
        </Typography>
        <Typography variant="body1" className={classes.totalSum}>
          {currencyFormat(orderPrice?.orderVat || 0)}
        </Typography>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container justify="space-between">
        <Typography variant="body1" className={classes.totalSum}>
          {t('order:total_sum')} {t('order:incl')}. {t('order:vat')}
        </Typography>
        <Typography variant="body1" className={classes.totalSum}>
          {currencyFormat(orderPrice?.orderPrice || 0)}
        </Typography>
      </Grid>

      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        disabled={!!error || !startDate || !endDate || !isProductsAvailable || startDate.getTime() > endDate.getTime()}
        onClick={handleSubmit}
      >
        {t('order:rent_now')}
      </Button>
    </form>
  );
};

export default OrderForm;
