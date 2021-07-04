import React, { useEffect, ReactElement } from 'react';
import { Button, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { DiscountCode } from '~/components/settings/discountCodes/discount.interface';
import { PriceBreakdownProps } from '../interfaces/interfaces';
import { currencyFormat } from '~/utils/format';
import { vatPercentage } from '~/constants/common';
import useStyles from './price-breakdown.styles';
import { Delete } from '@material-ui/icons';
import theme from '~/layouts/theme';

const OrderPriceBreakdown = ({
  orderSubTotal,
  discount,
  onDiscountChange,
}: PriceBreakdownProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  let discountedValue = 0;

  if(discount.type === 'PERCENTAGE'){
    discountedValue = orderSubTotal * discount.value / 100;
  }else if(discount.type === 'AMOUNT'){
    discountedValue = discount.value < orderSubTotal ? discount.value : orderSubTotal;
  }

  const orderSubTotalExclVat = (orderSubTotal - discountedValue);
  const orderVat = orderSubTotalExclVat * vatPercentage / 100;
  const orderTotal = orderSubTotalExclVat + orderVat;

  const handleRemoveDiscountCode = () => {
    localStorage.removeItem('orderAppliedDiscount');
    onDiscountChange({} as DiscountCode);
  }

  useEffect(() => {
    const orderAppliedDiscount = localStorage.getItem('orderAppliedDiscount');
    
    if(!!orderAppliedDiscount){
      const parsedDiscount: DiscountCode = JSON.parse(orderAppliedDiscount);
      onDiscountChange(parsedDiscount);
    }
  }, [])

  return (<>
    <Grid container justify="space-between">
      <Typography variant="body1" className={classes.totalSum}>
        {t('order:sub_total')}
      </Typography>
      <Typography variant="body1" className={classes.totalSum}>
        {currencyFormat(orderSubTotal)}
      </Typography>
    </Grid>

    {Object.keys(discount).length > 0 && (<Grid container justify="space-between" className={classes.appliedCouponRow}>
      <Typography variant="body1" className={classes.totalSum}>
        {t('coupon')} {discount.code} - {discount.type === 'PERCENTAGE' ? `${discount.value}%` : currencyFormat(discount.value)}
        <Button
          variant="outlined"
          size="small"
          onClick={handleRemoveDiscountCode}
          className={classes.removeAppliedCouponBtn}
        >
          {isMobile ? <Delete /> :  t('remove')}
        </Button>
      </Typography>
      <Typography variant="body1" className={classes.totalSum}>
        -{currencyFormat(discountedValue)}
      </Typography>
    </Grid>)}

    <Grid container justify="space-between">
      <Typography variant="body1" className={classes.totalSum}>
        {t('order:total_sum')} {t('order:excl')}. {t('order:vat')}
      </Typography>
      <Typography variant="body1" className={classes.totalSum}>
        {currencyFormat(orderSubTotalExclVat)}
      </Typography>
    </Grid>

    <Grid container justify="space-between">
      <Typography variant="body1" className={classes.totalSum}>
        {vatPercentage}% {t('order:vat')}.
      </Typography>
      <Typography variant="body1" className={classes.totalSum}>
        {currencyFormat(orderVat)}
      </Typography>
    </Grid>

    <Divider className={classes.divider} />

    <Grid container justify="space-between">
      <Typography variant="body1" className={classes.totalSum}>
        {t('order:total_sum')} {t('order:incl')}. {t('order:vat')}
      </Typography>
      <Typography variant="body1" className={classes.totalSum}>
        {currencyFormat(orderTotal)}
      </Typography>
    </Grid>
  </>);
}

export default OrderPriceBreakdown;