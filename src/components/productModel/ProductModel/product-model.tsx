import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ModelSelect from '../ModelSelect/model-select';
import ModelAttributes from '../ModelAttributes/model-attributes';
import ModelBundles from '../ModelBundles/model-bundles';
import { useProductModelsQuery } from '~/graphql/graphql';
import ProductModelModal from './productModelModal';

import useStyles from './product-model.styles';

const ProductModel = (): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [model, setModel] = useState('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { loading, data } = useProductModelsQuery();

  const toggleModal = (status: boolean) => setIsOpen(status);

  useEffect(() => {
    if (data) setModel(data.productModels[0].id);
  }, [data]);

  const selectedModel = data?.productModels.find((md) => md.id === model);

  return (
    <div style={{padding: 25}}>
      {loading && <p>Loading...</p>}

      {data && model && (
        <Grid container direction="column" alignItems="flex-start">
          <Button
            color="primary"
            variant="contained"
            onClick={() => toggleModal(true)}
          >
            {t('product:create_new_machine')}
          </Button>

          <ModelSelect
            models={data.productModels}
            selectedModel={model}
            modelChangeHandler={(e) => setModel(e.target.value)}
          />
 
          <ModelAttributes attributes={{
            ...selectedModel.attributes,
            lecturaId: selectedModel.lecturaId,
            lecturaModel: selectedModel.lecturaModel,
          }} />
 
          <Typography className={classes.subHeading} variant="body1" gutterBottom>
            {t('product:attachments')}
          </Typography>

          <ModelBundles modelBundles={data.productModels.find((md) => md.id === model).productModelBundles} />

          {/* Type attributes form for future use */}
          {/* <TypeAttributesForm attributes={typeAttributes} formSubmitHandler={() => {}} /> */}
        </Grid>
      )}

      <ProductModelModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default ProductModel;
