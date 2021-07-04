import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';

import useStyles from './attachments-list.styles';
import { AttachmentsListProps } from '../interfaces/interfaces';
import { currencyFormat } from '~/utils/format';
import AddDiscount from '../AddDiscount/add-discount';
import OrderPriceBreakdown from '../OrderPriceBreakdown/price-breakdown';
import { DiscountCode } from '~/components/settings/discountCodes/discount.interface';

const AttachmentsList = ({
  startDate,
  endDate,
  location,
  standardAttachments,
  orderPriceData,
  services,
  bundles,
  handleSubmit,
  enableAddDiscount = false,
}: AttachmentsListProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [orderPrice, setOrderPrice] = useState(null);
  const [discount, setDiscount] = useState<DiscountCode>({} as DiscountCode);
  const [isDiscountCodeOpen, setIsDiscountCodeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (orderPriceData) setOrderPrice(orderPriceData.orderPrice);
  }, [orderPriceData]);

  const toggleOpenDiscountCode = (status: boolean) => {
    setIsDiscountCodeOpen(status);
  }

  if (!orderPrice) return null;
  return (
    <div>
      <Grid container>
        <Grid container direction="column" className={classes.detail}>
          <label>{t('order:location')}</label>
          <Typography variant="body1">{location}</Typography>
        </Grid>

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

      <Typography variant="h6" gutterBottom>
        {t('order:rental_duration')}
      </Typography>

      <Grid container justify="space-between">
        <Typography variant="body1" gutterBottom>
          {`${orderPrice.businessDays} ${t('order:days')} x ${currencyFormat(orderPrice.productPrice.pricePerDay)}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {currencyFormat(orderPrice.productPrice.totalPrice)}
        </Typography>
      </Grid>

      {!!(standardAttachments?.length || orderPrice.attachmentsPrices?.length) && (
        <>
          <Typography variant="h6" gutterBottom>
            {t('order:attachment')}
          </Typography>

          {standardAttachments.map((attachment) => (
            <Grid container key={attachment} justify="space-between">
              <Typography variant="body1" gutterBottom>
                {attachment}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {t('order:included')}
              </Typography>
            </Grid>
          ))}

          {orderPrice.attachmentsPrices.map((price) => {
            const bundle = bundles.find((b) => b.products.find((p) => p.id === price.id));
            const manufacturer = bundle.manufacturer.abbreviation || bundle.manufacturer.name;
            return (
              <Grid container key={price.id} justify="space-between">
                <Typography variant="body1" gutterBottom>
                  {`${manufacturer} ${bundle.type.name} ${bundle.name}
                  (${orderPrice.businessDays} ${t('order:days')} x ${currencyFormat(price.pricePerDay)})`}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {currencyFormat(price.totalPrice)}
                </Typography>
              </Grid>
            );
          })}
        </>
      )}

      {!!orderPrice.servicesPrices.length && (
        <Typography variant="h6" gutterBottom>
          {t('order:extras')}
        </Typography>
      )}

      {orderPrice.servicesPrices.map((price) => {
        const service = services.find((service) => service.id === price.id);
        return (
          <Grid container justify="space-between" key={price.id}>
            <Typography variant="body1" gutterBottom>
              {service.serviceTemplate.name}
              {service.serviceTemplate.pricingStructure === 'daily' &&
                ` (${orderPrice.days} ${t('order:days')} x ${currencyFormat(price.price)})`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {currencyFormat(price.totalPrice)}
            </Typography>
          </Grid>
        );
      })}

      <Divider className={classes.divider} />

      <OrderPriceBreakdown
        orderSubTotal={orderPrice.orderSubTotal}
        onDiscountChange={setDiscount}
        discount={discount}
      />

      {!isDiscountCodeOpen && (<Grid container alignItems="center" justify="space-between" className={classes.buttonsRow}>
        {handleSubmit && (<Button variant="contained" size="large" color="primary" onClick={handleSubmit}>
          {t('order:continue')}
        </Button>)}

        {enableAddDiscount && Object.keys(discount).length === 0 && (<Button color="primary" className={classes.applyDiscountBtn} onClick={() => toggleOpenDiscountCode(true)}>
          {t('order:apply_coupon_code')}
        </Button>)}
      </Grid>)}

      {isDiscountCodeOpen && (<AddDiscount
        handleHidding={toggleOpenDiscountCode}
        onDiscountChange={setDiscount}
      />)}
    </div>
  );
};

export default AttachmentsList;
