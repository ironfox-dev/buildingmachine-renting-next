import React, { useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import useSharedStyles from '../styles/styles';
import useStyles from './order-confirmation-card.styles';
import { OrderConfirmationCardProps } from '../interfaces/interfaces';
import Link from '@material-ui/core/Link';
import { currencyFormat } from '../../../utils/format';
import OrderPriceBreakdown from '../OrderPriceBreakdown/price-breakdown';
import { DiscountCode } from '~/components/settings/discountCodes/discount.interface';
import productTypeAssets from '~/constants/productTypeAssets';

const OrderConfirmationCard = ({
  product,
  orderPriceData,
  handleSubmit,
  isSubmitting,
}: OrderConfirmationCardProps): React.ReactElement => {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  const { t } = useTranslation();
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(false);
  const [isSecondCheckboxChecked, setIsSecondCheckboxChecked] = useState(false);
  const [discount, setDiscount] = useState<DiscountCode>({} as DiscountCode);
  const productModel = product.productModel;
  const manufacturer = productModel.manufacturer.abbreviation || product.productModel.manufacturer.name;
  const orderPrice = orderPriceData?.orderPrice;

  const documentUrl = useMemo(() => {
    const documents = productModel.documents;
    const modelImage = documents.find((doc) => doc.documentCategory.key === 'product-picture');
    if (modelImage) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}document/${modelImage.id}`;
    } else {
      return productTypeAssets[productModel.type.name]?.icon;
    }
  }, [productModel]);

  if (!orderPrice) return null;
  return (
    <Card raised className={sharedClasses.rightCard}>
      <CardContent>
        <Typography variant="h3" className={sharedClasses.header} gutterBottom>
          {t('order:confirm_and_place_order')}
        </Typography>

        <Grid container direction="row" alignItems="center">
          <img src={documentUrl} className={classes.modelImage} />
          <Typography variant="body1">
            {manufacturer} {product.productModel.name}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />

        <Grid container justify="space-between">
          <Typography variant="body1" gutterBottom>
            {manufacturer} {product.productModel.name}
            {` (${orderPrice.days} ${t('order:days')} x ${currencyFormat(orderPrice.productPrice.pricePerDay)})`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {currencyFormat(orderPrice.productPrice.totalPrice)}
          </Typography>
        </Grid>

        <Grid container justify="space-between">
          <Typography variant="body1">{t('order:attachment_and_extras')}</Typography>
          <Typography variant="body1">
            {currencyFormat(orderPrice.orderPrice - orderPrice.productPrice.totalPrice)}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />

        <OrderPriceBreakdown
          orderSubTotal={orderPrice.orderSubTotal}
          onDiscountChange={setDiscount}
          discount={discount}
        />
        <Divider className={classes.divider} />

        <Grid container wrap="nowrap" alignItems="flex-start" className={classes.checkboxContainer}>
          <Checkbox
            color="primary"
            className={classes.checkbox}
            checked={isFirstCheckboxChecked}
            onChange={() => setIsFirstCheckboxChecked(!isFirstCheckboxChecked)}
          />
          <Typography variant="body1">
            <Trans
              defaults={t('user:reg_agreement1')}
              components={{
                termsLink: <Link href="https://www.flexcavo.de/agb/" target="_blank" />,
                dataLink: <Link href="https://www.flexcavo.de/datenschutz/" target="_blank" />,
              }}
            />
          </Typography>
        </Grid>

        <Grid container wrap="nowrap" alignItems="flex-start" className={classes.checkboxContainer}>
          <Checkbox
            color="primary"
            className={classes.checkbox}
            checked={isSecondCheckboxChecked}
            onChange={() => setIsSecondCheckboxChecked(!isSecondCheckboxChecked)}
          />
          <Typography variant="body1">{t('user:reg_agreement2')}</Typography>
        </Grid>

        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          disabled={!isFirstCheckboxChecked || !isSecondCheckboxChecked || isSubmitting}
          onClick={handleSubmit}
        >
          {t('order:place_order_finish')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderConfirmationCard;
