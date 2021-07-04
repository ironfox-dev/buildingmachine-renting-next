import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Grid, Paper, Typography} from '@material-ui/core';
import { ComposedChart, Line, XAxis, YAxis, Scatter, Legend, Dot } from 'recharts';

import { useLoadLecturaDataLazyQuery } from '~/graphql/graphql';
import useStyles from './lectura.styles';

const Lectura = (): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();

  const [itemData, setItemData] = useState(null);
  const [regressionData, setRegressionData] = useState([]);
  const [ticksCount, setTicksCount] = useState<number>(0);
  const [focusLine, setFocusLine] = useState<string | null>(null);
  let productName: string = '';

  const { id: currentProductId } = router.query;
  const [loadLectura, { data: lecturaModelData }] = useLoadLecturaDataLazyQuery();

  useEffect(() => {
    (async () => {
      if (currentProductId) {
        await loadLectura({
          variables: {
            productId: currentProductId as string
          }
        });
      }
    })();
  }, [currentProductId]);

  useEffect(() => {
    if(lecturaModelData?.loadLecturaData){
      const { model, regressor } = lecturaModelData.loadLecturaData;

      if(model){
        setItemData(model);
      }
      
      if(regressor) {
        let parsedRegressionData = [];
        const fmvCurve = regressor.curves.find(curve => curve.name === 'FMV');
        let highestPoint: number = 0;

        if(fmvCurve){
          parsedRegressionData = fmvCurve.points.map(point => {
            const age: number = point.age / 12;
            highestPoint = age > highestPoint ? age : highestPoint;

            return { ...point, age }
          });
        }

        regressor.data.forEach(item => {
          const age: number = item.age_in_months / 12;
          highestPoint = age > highestPoint ? age : highestPoint;

          parsedRegressionData.push({
            age,
            price: item.price
          })
        });

        setRegressionData(parsedRegressionData);
        setTicksCount(Math.round(highestPoint));
      }
    }
  }, [lecturaModelData?.loadLecturaData])

  if(itemData){
    productName = `${itemData.manufacturer.name} ${itemData.modelName}`;
  }

  return !itemData ? <div /> : (
    <>
      <Typography variant="h4">{productName}</Typography>

      {!!itemData.defaultImg && itemData.defaultImg.url && (<img
        src={itemData.defaultImg.url}
        className={classes.productImage}
        alt={productName}
        title={productName}
      />)}

      <Paper className={classes.section}>
        <Typography variant="h6" display="block" gutterBottom className={classes.sectionTitle}>
          {t('product:specifications')}
        </Typography>

        <Grid container className={classes.detailsRow}>
          {itemData.specs.map((spec, index) => !!spec.value ? (
            <Grid item sm={3} className={classes.detailItem} key={`spec-${index}`}>
              <Typography variant="subtitle1" display="block" gutterBottom>
                {spec.name}
              </Typography>
              <Typography variant="subtitle2" display="block" gutterBottom>
                {spec.value} {spec.unit}
              </Typography>
            </Grid>
          ) : <div key={`spec-${index}`} />)}
        </Grid>
      </Paper>

      <Paper className={classes.section}>
        <Grid container className={classes.detailsRow}>
          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:category')}
            </Typography>

            <Typography variant="subtitle2" display="block" gutterBottom>
              {itemData.category?.name || '##'}
            </Typography>
          </Grid>

          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:model_name')}
            </Typography>

            <Typography variant="subtitle2" display="block" gutterBottom>
              {itemData.modelName || '##'}
            </Typography>
          </Grid>

          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:datasheets')}
            </Typography>

            {itemData.dataSheetCnt && itemData.dataSheets ? (
              <ul className={classes.datasheetList}>
                {itemData.dataSheets.map((sheet, index) => <li key={`datasheet-${index}-${sheet.type}`}>
                  <Link href={sheet.url}>
                    <a
                      target="blank"
                      className={classes.datasheetLink}
                    >
                      {sheet.type}
                    </a>
                  </Link>

                  {!!sheet.language && <span> ({sheet.language.join(', ')})</span>}
                </li>)}
              </ul>
            ) : 'No Datasheets founds'}
          </Grid>

          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:in_production')}
            </Typography>

            <Typography variant="subtitle2" display="block" gutterBottom>
              {itemData.inProduction ? 'Yes' : 'No'}
            </Typography>
          </Grid>

          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:first_year')}
            </Typography>

            <Typography variant="subtitle2" display="block" gutterBottom>
              {itemData.firstYear || '##'}
            </Typography>
          </Grid>

          <Grid item sm={4} className={classes.detailItem}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {t('product:last_year')}
            </Typography>

            <Typography variant="subtitle2" display="block" gutterBottom>
              {itemData.lastYear || '##'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.section}>
        <Typography variant="h6" display="block" gutterBottom className={classes.sectionTitle}>
          {t('product:Analytics')}
        </Typography>

        <ComposedChart
          width={850}
          height={500}
          data={regressionData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <Legend />

          <XAxis
            dataKey="age"
            type="number"
            label={{ value: t('product:age_in_years'), position: 'insideBottomRight', offset: 0 }}
            ticks={Array.from(Array(ticksCount + 1).keys())}
          />

          <YAxis
            dataKey="price"
            type="number"
            label={{ value: t('product:price_in_currency'), angle: -90, position: 'insideLeft', offset: -5 }}
          />

          <Scatter
            name={t('product:fmv_depreciation')}
            dataKey="price"
            fill="gray"
            shape={<Dot r={3.5} />}
          />

          <Line
            type="monotone"
            dataKey="prediction"
            name={t('product:prediction')}
            strokeWidth={3}
            activeDot={{ r: 8 }}
            stroke={focusLine === 'prediction' ? "#d1da47" : '#8884d8'}
            onMouseEnter={() => setFocusLine('prediction')}
            onMouseMove={() => setFocusLine('prediction')}
            onMouseLeave={() => setFocusLine(null)}
          />
          <Line
            type="monotone"
            dataKey="lowCI"
            name={t('product:low_ci')}
            strokeWidth={3}
            stroke={focusLine === 'lowCI' ? "#d1da47" : '#82ca9d'}
            onMouseEnter={() => setFocusLine('lowCI')}
            onMouseMove={() => setFocusLine('lowCI')}
            onMouseLeave={() => setFocusLine(null)}
          />
          <Line
            type="monotone"
            dataKey="highCI"
            name={t('product:high_ci')}
            strokeWidth={3}
            stroke={focusLine === 'highCI' ? "#d1da47" : '#fc98ed'}
            onMouseEnter={() => setFocusLine('highCI')}
            onMouseMove={() => setFocusLine('highCI')}
            onMouseLeave={() => setFocusLine(null)}
          />
        </ComposedChart>
      </Paper>
    </>
  );
}

export default Lectura;
