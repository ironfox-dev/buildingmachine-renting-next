import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useStyles from './extended-period.styles';
import { ExtendedPeriodProps } from '../interfaces/interfaces';
import { currencyFormat } from '~/utils/format';
import { vatPercentage } from '~/constants/common';

const ExtendedPeriod = ({
  startDate,
  endDate,
  standardAttachments,
  orderPriceData,
  services,
  bundles,
  parentOrderItem,
}: ExtendedPeriodProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [orderPrice, setOrderPrice] = useState(null);

  useEffect(() => {
    if (orderPriceData) setOrderPrice(orderPriceData.extendedOrderPrice);
  }, [orderPriceData]);

  return (
    <div>
      <Grid container>
        <Grid container direction="column" className={classes.detail}>
          <label>{t('order:start')}</label>
          <Typography variant="body1">{startDate.toLocaleDateString()}</Typography>
        </Grid>

        <Grid container direction="column" className={classes.detail}>
          <label>{t('order:end')}</label>
          <Typography variant="body1">{endDate.toLocaleDateString()}</Typography>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Typography variant="h6" gutterBottom className={classes.periodTitle}>
        {t('order:rental_duration')}
      </Typography>

      <Grid container justify="space-between">
        <Typography variant="body1" gutterBottom>
          {`${parentOrderItem?.productManufacturer} ${parentOrderItem?.productModel}`}. ({orderPrice?.businessDays}{' '}
          {t('days')} * {currencyFormat(orderPrice?.productPrice?.pricePerDay || 0)})
        </Typography>
        <Typography variant="body1" gutterBottom>
          {currencyFormat(orderPrice?.productPrice.totalPrice || 0)}
        </Typography>
      </Grid>

      {!!(standardAttachments?.length || orderPrice?.attachmentsPrices?.length) && (
        <>
          <Typography variant="h6" gutterBottom className={classes.periodTitle}>
            {t('order:attachment')}
          </Typography>

          {standardAttachments?.map((attachment) => (
            <Grid container key={attachment} justify="space-between">
              <Typography variant="body1" gutterBottom>
                {attachment}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t('order:included')}
              </Typography>
            </Grid>
          ))}

          {orderPrice?.attachmentsPrices.map((price) => {
            const bundle = bundles.find((b) => b?.product?.id === price.id);
            const productModel = bundle?.product?.productModel;
            const manufacturer = productModel.manufacturer.abbreviation || productModel.manufacturer.name;

            return (
              <Grid container key={price.id} justify="space-between">
                <Typography variant="body1" gutterBottom>
                  {`${manufacturer} ${productModel.type.name} ${productModel?.name}
                  (${orderPrice?.businessDays} ${t('order:days')} x ${currencyFormat(price?.pricePerDay)})`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {currencyFormat(price?.totalPrice)}
                </Typography>
              </Grid>
            );
          })}
        </>
      )}

      {!!orderPrice?.servicesPrices.length && (
        <Typography variant="h6" gutterBottom className={classes.periodTitle}>
          {t('order:extras')}
        </Typography>
      )}

      {orderPrice?.servicesPrices.map((price) => {
        const service = services.find((service) => service.id === price.id);
        return (
          <Grid container justify="space-between" key={price.id}>
            <Typography variant="body1" gutterBottom>
              {service.serviceTemplate.name}
              {service.serviceTemplate.pricingStructure === 'daily' &&
                ` (${orderPrice.days} ${t('order:days')} x ${currencyFormat(price.price)})`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {currencyFormat(price.totalPrice || 0)}
            </Typography>
          </Grid>
        );
      })}

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
          {vatPercentage}% {t('order:vat')}.
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
    </div>
  );
};

export default ExtendedPeriod;
