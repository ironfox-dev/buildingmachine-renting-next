import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { DatePicker } from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import { useProductTrackingLazyQuery } from '~/graphql/graphql';
import { Typography, Grid, Box, CircularProgress, Backdrop } from '@material-ui/core';
import { isEmpty, get } from 'lodash';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useStyles from './live-status.style';
import { primary, secondary } from '~/constants/colors';
import { ProductTracking } from '../interfaces';
import { ProductWorkingHourModel } from 'graphql/graphql';
import MapContainer from './map-container';

const formatWorkingHours = (
  filterDate: { startDate: string; endDate: string },
  workingHours: ProductWorkingHourModel[]
) => {
  const formattedWorkingHours = [];
  const start = new Date(filterDate.startDate);
  const end = new Date(filterDate.endDate);
  let current = new Date(start);
  while (current <= end) {
    const currentDateWorkingHours = workingHours.find((value) => {
      return value.date === moment(current).format('YYYY-MM-DD');
    });

    if (currentDateWorkingHours) {
      formattedWorkingHours.push({
        idleHours: currentDateWorkingHours.idleHours.toFixed(2),
        operatingHours: currentDateWorkingHours.operatingHours.toFixed(2),
        date: moment(currentDateWorkingHours.date).format('DD MMM'),
      });
    } else {
      formattedWorkingHours.push({
        idleHours: 0,
        operatingHours: 0,
        date: moment(current).format('DD MMM'),
      });
    }
    const nextDate = current.setDate(current.getDate() + 1);
    current = new Date(nextDate);
  }

  return formattedWorkingHours;
};

const ProductInformation = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  const [isBackDropOpen, setIsBackDropOpen] = useState(true);

  const { id: currentProductId } = router.query;

  const [filterDate, setFilterDate] = useState({
    startDate: moment().subtract(6, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  });

  const [formattedProductTracking, setProductTracking] = useState({} as ProductTracking);
  const [getProductTracking, { data: productTrackingData }] = useProductTrackingLazyQuery({
    onCompleted: () => {
      setIsBackDropOpen(false);
    },
    onError: () => {
      setIsBackDropOpen(false);
    },
  });

  useEffect(() => {
    (async () => {
      if (currentProductId && getProductTracking) {
        await getProductTracking({
          variables: {
            productId: currentProductId as string,
            startDate: filterDate.startDate,
            endDate: filterDate.endDate,
          },
        });
      }
    })();
  }, [currentProductId]);

  useEffect(() => {
    if (productTrackingData) {
      const productTracking = productTrackingData?.productTracking;

      const product = get(productTracking, ['product']);

      const workingHours = formatWorkingHours(filterDate, productTracking.workingHours);

      const formattedProduct = {
        product,
        defaultCenter: {
          lat: product?.locationLatitude,
          lng: product?.locationLongitude,
        },
        workingHours,
        last24Hours: productTracking.last24Hours,
      };

      setProductTracking(formattedProduct);
    }
  }, [productTrackingData]);

  const handleFilterDateChange = async (field: string, value: Date) => {
    const updatedFilter = {
      ...filterDate,
      [field]: moment(value).format('YYYY-MM-DD'),
    };

    setFilterDate(updatedFilter);

    await getProductTracking({
      variables: {
        productId: currentProductId as string,
        startDate: updatedFilter.startDate,
        endDate: updatedFilter.endDate,
      },
    });
  };

  return (
    <Grid container>
      <Backdrop className={classes.backdrop} open={isBackDropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isEmpty(formattedProductTracking) && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.container}>
                <Typography variant="h6" className={classes.mapHeader}>
                  {t('fleet:GPS_status')}
                </Typography>
                <MapContainer
                  product={formattedProductTracking.product}
                  last24Hours={formattedProductTracking.last24Hours}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start">
                  <Typography variant="h6">{t('fleet:operating_hours_and_idle_times')}</Typography>

                  <Box>
                    <DatePicker
                      required
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label={t('common:start')}
                      format="dd.MM.yyyy"
                      maxDateMessage={t('fleet:max_data_message')}
                      maxDate={filterDate.endDate}
                      className={classes.datePicker}
                      value={filterDate.startDate}
                      onChange={(value) => handleFilterDateChange('startDate', value)}
                    />

                    <DatePicker
                      required
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label={t('common:end')}
                      format="dd.MM.yyyy"
                      minDateMessage={t('fleet:min_data_message')}
                      minDate={filterDate.startDate}
                      className={classes.datePicker}
                      value={filterDate.endDate}
                      onChange={(value) => handleFilterDateChange('endDate', value)}
                    />
                  </Box>
                </Grid>
                <BarChart
                  width={600}
                  height={400}
                  data={formattedProductTracking.workingHours}
                  className={classes.barChart}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="2 2" />
                  <XAxis dataKey="date" />
                  <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="operatingHours" stackId="a" fill={primary} barSize={25} />
                  <Bar dataKey="idleHours" stackId="a" fill={secondary} barSize={25} />
                </BarChart>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default memo(ProductInformation);
