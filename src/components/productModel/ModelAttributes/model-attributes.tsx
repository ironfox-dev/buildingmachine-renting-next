import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import { ModelAttributesProps } from '../product-model.interfaces';
import useStyles from './model-attributes.styles';
import { snakeCase } from 'lodash';

const ModelAttributes = ({ attributes }: ModelAttributesProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card raised className={classes.root}>
      {Object.keys(attributes).map((key) => {
        return (
          <Grid container justify="space-between" key={key}>
            <Typography className={classes.key} variant="body1" gutterBottom>
              {t(`product:${snakeCase(key)}`)}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {Array.isArray(attributes[key]) ? attributes[key].filter(item => !!item).join(', ') : attributes[key].toString()}
            </Typography>
          </Grid>
        );
      })}
    </Card>
  );
};

export default ModelAttributes;
