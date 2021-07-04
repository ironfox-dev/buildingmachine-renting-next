import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './order-summary.styles';
import { OrderSummaryProps } from '../interfaces/interfaces';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const OrderSummary = ({
  personalData,
  location,
  startDate,
  endDate,
}: OrderSummaryProps): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id as string;
  const { t } = useTranslation();

  const Header = ({ text, redirectionRoute }: { text: string; redirectionRoute?: string }) => (
    <Typography variant="h4" className={classes.header} gutterBottom>
      {text}
      {redirectionRoute && (
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => router.push(redirectionRoute)}
        >
          {t('order:edit')}
        </Button>
      )}
    </Typography>
  );

  const Data = ({ label, value, className = '' }: { label: string; value: string; className?: string }) => (
    <div className={className}>
      <span className={classes.label}>{label}</span>
      <Typography variant="body1">{value}</Typography>
    </div>
  );

  return (
    <div className={classes.grid}>
      <Header text={`1. ${t('order:firmname_address')}`} redirectionRoute={`/product/${id}/personal-data`} />
      <Data label={t('order:company')} value={personalData.companyName} className={classes.companyName} />
      <Grid container className={classes.name}>
        <Data label="&nbsp;" value={personalData.gender} />
        <Data label={t('order:first_name')} value={personalData.firstName} />
        <Data label={t('order:last_name')} value={personalData.lastName} />
      </Grid>
      <Data label={t('order:email')} value={personalData.email} className={classes.email} />
      <Data
        label={t('order:phone_number')}
        value={`+${personalData.phoneCode} ${personalData.phoneNumber}`}
        className={classes.phoneNumber}
      />
      <Data label={t('order:street_number')} value={personalData.address} className={classes.address} />
      <Data label={t('order:postal_code_abbreviation')} value={personalData.zipCode} className={classes.zipCode} />
      <Grid container wrap="nowrap" className={classes.cityAndCountry}>
        <Data label={t('order:city')} value={personalData.city} />
        <Data label={t('order:country')} value={personalData.country} />
      </Grid>

      <Header text={`2. ${t('order:project_address')}`} redirectionRoute={`/product/${id}/personal-data`} />
      <Data label={t('order:street_number')} value={personalData.projectAddress} className={classes.address} />
      <Data
        label={t('order:postal_code_abbreviation')}
        value={personalData.projectZipCode}
        className={classes.zipCode}
      />
      <Grid container wrap="nowrap" className={classes.cityAndCountry}>
        <Data label={t('order:city')} value={personalData.projectCity} />
        <Data label={t('order:country')} value={personalData.projectCountry} />
      </Grid>

      <Header text={`3. ${t('order:self_pickup_delivery')}`} redirectionRoute={`/product/${id}/personal-data`} />
      <Data
        label={t('order:rental_location')}
        className={classes.deliveryMethod}
        value={
          personalData.deliveryMethod === 'pickup'
            ? `${t('order:pickup')} im ${location}`
            : t('order:delivery_to_project_address')
        }
      />
      {personalData.deliveryMethod === 'pickup' && (
        <>
          <Grid container wrap="nowrap" className={classes.pickup}>
            <Data
              label={t('order:pickup_hours')}
              value={new Date(personalData.pickupTime).toLocaleTimeString().substring(0, 5)}
            />
            <Data label="&nbsp;" value={startDate.toLocaleDateString()} />
          </Grid>
          <Grid container wrap="nowrap" className={classes.return}>
            <Data
              label={t('order:return_hours')}
              value={new Date(personalData.returnTime).toLocaleTimeString().substring(0, 5)}
            />
            <Data label="&nbsp;" value={endDate.toLocaleDateString()} />
          </Grid>
        </>
      )}

      <Header text={`4. ${t('order:payment')}`} />
      <Typography variant="body1" className={classes.paymentInfo}>
        {t('order:payment_details')}&nbsp;
        <Link href="https://www.flexcavo.de/agb/" target="_blank">
          {t('order:more_information')}
        </Link>
      </Typography>
    </div>
  );
};

export default OrderSummary;
