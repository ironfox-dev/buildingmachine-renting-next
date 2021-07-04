import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './thanks-card.styles';
import Button from '@material-ui/core/Button';
import OrderProgress from '~/shared/OrderProgress/order-progress';

const ThanksCard = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <OrderProgress orderStep={4} />

      <Card raised className={classes.card}>
        <Grid container direction="column" alignItems="center" className={classes.grid}>
          <img src="/icons/check-icon.png" alt="check" />
          <Typography variant="h4">{t('order:thanks_for_booking')}</Typography>
          <Typography variant="body1">{t('order:send_confirmation')}</Typography>

          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
            onClick={() => router.push('/categories')}
          >
            {t('order:add_further_machines')}
          </Button>

          <Typography variant="body2" className={classes.note}>
            {t('order:no_effort_data_prefilled')}
          </Typography>
        </Grid>
      </Card>
    </>
  );
};

export default ThanksCard;
