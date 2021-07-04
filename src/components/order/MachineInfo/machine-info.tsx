import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { MachineInfoProps } from '../interfaces/interfaces';

import useStyles from './machine-info.styles';
import { Grid } from '@material-ui/core';
import productTypeAssets from '~/constants/productTypeAssets';

const MachineInfo = ({ productModel }: MachineInfoProps): React.ReactElement => {
  const classes = useStyles();
  const manufacturer = productModel.manufacturer.abbreviation || productModel.manufacturer.name;

  const documentUrl = useMemo(() => {
    const documents = productModel.documents;
    const modelImage = documents.find((doc) => doc.documentCategory.key === 'product-picture');
    if (modelImage) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}document/${modelImage.id}`;
    } else {
      return productTypeAssets[productModel.type.name]?.icon;
    }
  }, [productModel]);

  return (
    <Grid container direction="row">
      <img src={documentUrl} className={classes.modelImage} />
      <div>
        <Typography variant="h3" className={classes.header}>
          {`${manufacturer} ${productModel.name}`}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {productModel.type.name}
        </Typography>
      </div>
    </Grid>
  );
};

export default MachineInfo;
