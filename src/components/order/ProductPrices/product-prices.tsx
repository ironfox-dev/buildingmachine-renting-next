import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './product-prices.styles';
import { ProductPricesProps } from '../interfaces/interfaces';

const glossaryAttributeMap = {
  day: 'priceDaily',
  week: 'priceWeekly',
  month: 'priceMonthly',
};

const ProductPrices = ({ product }: ProductPricesProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container justify="space-around">
      {Object.keys(glossaryAttributeMap).map((period) => (
        <div key={period} className={classes.prices}>
          <Typography variant="body1" component="span" color="primary" className={classes.price}>
            €{product[glossaryAttributeMap[period]]}
          </Typography>
          <Typography variant="body1" component="span" color="primary">
            {` | ${t(`order:${period}`)}`}
          </Typography>
        </div>
      ))}
    </Grid>
  );
};

export default ProductPrices;
