import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import CheckIcon from '@material-ui/icons/Check';
import { Container, Grid, useMediaQuery } from '@material-ui/core';

import useStyles from './order-progress.styles';
import theme from '~/layouts/theme';

const orderSteps = [
  {
    index: 0,
    name: 'select_machine',
    mobileName: 'machine',
  },
  {
    index: 1,
    name: 'select_attachments_and_services',
    mobileName: 'extras',
  },
  {
    index: 2,
    name: 'enter_personal_details',
    mobileName: 'data',
  },
  {
    index: 3,
    name: 'confirmation_and_booking',
    mobileName: 'checkout'
  },
];

const OrderProgress = ({ orderStep }: { orderStep: number }): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Container>
        <Grid container justify="center">
          {orderSteps.map((step) => (
            <Grid
              item
              xs={3}
              key={step.index}
              className={clsx(classes.orderItem, orderStep === step.index && classes.orderItemActive, isMobile)}
            >
              <div className={clsx(classes.orderItemCrumb, orderStep >= step.index && classes.orderItemCrumbPassed)}>
                {orderStep > step.index ? (
                  <CheckIcon className={classes.orderItemValue} />
                ) : (
                  <div className={clsx(classes.orderItemValue, classes.orderItemValueNumber)}>{step.index + 1}</div>
                )}
              </div>
              <div className={classes.orderItemName}>{t(`order:${isMobile ? step.mobileName : step.name}`)}</div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OrderProgress;
