import React from 'react';
import { useTranslation } from 'react-i18next';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TimePicker } from '@material-ui/pickers';

import useStyles from './delivery-form.styles';
import { DeliveryFormProps } from '../interfaces/interfaces';

const DeliveryForm = ({
  location,
  startDate,
  endDate,
  deliveryMethod,
  handleDeliveryMethodChange,
  pickupTime,
  pickupTimeHint,
  isPickupTimeInvalid,
  handlePickupTimeChange,
  returnTime,
  returnTimeHint,
  isReturnTimeInvalid,
  handleReturnTimeChange,
}: DeliveryFormProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <RadioGroup
        row
        className={classes.options}
        name="deliveryMethod"
        value={deliveryMethod}
        onChange={handleDeliveryMethodChange}
      >
        <FormControlLabel value="pickup" label={t('order:pickup')} control={<Radio color="primary" />} />
        <FormControlLabel
          value="delivery"
          control={<Radio color="primary" />}
          label={
            <Grid container>
              <div>{t('order:delivery_to_project_address')}</div>
              <div className={classes.deliveryPrice}>{t('order:transport_cost_hour')}</div>
            </Grid>
          }
        />
      </RadioGroup>

      {deliveryMethod === 'pickup' && (
        <>
          <Typography variant="body1" className={classes.location}>
            {t('order:pickup')} im {location}
          </Typography>

          <TimePicker
            required
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={t('order:pickup_hours')}
            className={classes.startTimePicker}
            ampm={false}
            helperText={pickupTimeHint}
            value={pickupTime}
            error={isPickupTimeInvalid}
            onChange={handlePickupTimeChange}
          />

          <Typography variant="body1" className={classes.startDate}>
            {startDate.toLocaleDateString()}
          </Typography>

          <TimePicker
            required
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={t('order:return_hours')}
            className={classes.endTimePicker}
            ampm={false}
            helperText={returnTimeHint}
            value={returnTime}
            error={isReturnTimeInvalid}
            onChange={handleReturnTimeChange}
          />

          <Typography variant="body1" className={classes.endDate}>
            {endDate.toLocaleDateString()}
          </Typography>
        </>
      )}
    </>
  );
};

export default DeliveryForm;
