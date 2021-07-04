import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ModelBundledProps } from '../product-model.interfaces';
import { ProductModelBundleModel } from '~/graphql/graphql';

import useStyles from './model-bundles.styles';

const ModelBundles = ({ modelBundles }: ModelBundledProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <div>
      {modelBundles.map(
        (model: ProductModelBundleModel): React.ReactElement => (
          <Card raised className={classes.root} key={model.id}>
            <Grid container justify="space-between">
              <Typography className={classes.key} variant="body1" gutterBottom>
                {model.type.name} - {model.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {model.manufacturer.name}
              </Typography>
            </Grid>
          </Card>
        )
      )}
    </div>
  );
};

export default ModelBundles;
