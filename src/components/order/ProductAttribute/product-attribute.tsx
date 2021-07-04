import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './product-attribute.styles';
import { ProductAttributeProps } from '../interfaces/interfaces';

const ProductAttribute = ({ label, value, unit }: ProductAttributeProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Typography className={classes.label} variant="body1" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" component="span" gutterBottom>
        {value} {unit}
      </Typography>
    </Grid>
  );
};

export default ProductAttribute;
