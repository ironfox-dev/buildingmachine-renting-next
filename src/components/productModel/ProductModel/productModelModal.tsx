import React, { useEffect, useState } from 'react';
import { Backdrop, Grid, Modal, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Close } from '@material-ui/icons';

import { useCreateProductModelMutation } from '~/graphql/graphql';
import ProductModelForm from './productModelForm'
import useStyles from './product-model.styles';
import { formatFiles } from '~/components/allItems/formatters';
import { uploadFileRequest } from '~/components/allItems/mutation/index.ts';
import { DocumentUploadTypes } from '~/shared/enums';

const ProductModelModal = (props): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [files, setFiles] = useState([]);
  const [documentCategory, setDocumentCategory] = useState<string>('');
  const [userId] = useState(localStorage.getItem('userId'));

  const validationSchema = Yup.object().shape({
    typeId: Yup.string().required(t('mandatory')),
    manufacturerId: Yup.string().required(t('mandatory')),
    model: Yup.string().required(t('mandatory')),
    width: Yup.number().required(t('mandatory')),
    length: Yup.number().required(t('mandatory')),
    height: Yup.number().required(t('mandatory')),
    weight: Yup.number().required(t('mandatory')),
    bglNumber: Yup.string().required(t('mandatory')),
    hasVin: Yup.boolean().required(t('mandatory')),
    modelLeadTime: Yup.number().required(t('mandatory')),
    keyParameterName: Yup.string().required(t('mandatory')),
    keyParameterValue: Yup.number().required(t('mandatory')),
    lecturaId: Yup.string().required(t('mandatory')),
    accessory_1: Yup.string(),
    accessory_2: Yup.string(),
    accessory_3: Yup.string(),
    accessory_4: Yup.string(),
    accessory_5: Yup.string(),
  });

  const [createProductModel, { data, error }] = useCreateProductModelMutation();

  useEffect(() => {
    if(data?.createProductModel){
      if(files.length > 0 && !!documentCategory){
        handleFileUpload(data.createProductModel.id);
      }

      props.toggleModal(false);
    }
  }, [data?.createProductModel])

  const submitNewProductModel = async values => {
    try {
      await createProductModel({
        variables: {
          productModel: {
            typeId: values.typeId,
            manufacturerId: values.manufacturerId,
            model: values.model,
            width: values.width,
            length: values.length,
            height: values.height,
            weight: values.weight,
            bglNumber: values.bglNumber,
            hasVin: values.hasVin,
            modelLeadTime: values.modelLeadTime,
            keyParameterName: values.keyParameterName,
            keyParameterValue: values.keyParameterValue,
            lecturaId: parseInt(values.lecturaId),
            accessory_1: values.accessory_1,
            accessory_2: values.accessory_2,
            accessory_3: values.accessory_3,
            accessory_4: values.accessory_4,
            accessory_5: values.accessory_5,
            additionalFields: values.additionalFields,
          }
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  const handleFileUpdate = data => {
    setFiles((prevFiles) => [...prevFiles, ...data]);
  }

  const handleFileUpload = async (productModelId: string) => {
    const formattedDocuments = formatFiles({
      file: files,
      user: userId,
      relatedEntityId: productModelId,
      documentCategory: documentCategory,
    });

    try {
      await Promise.all(formattedDocuments.map((data) => uploadFileRequest(DocumentUploadTypes.ProductModel, data)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDocumentCategoryChange = (value: string) => {
    setDocumentCategory(value);
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.toggleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className={classes.modal}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.modalInnerWrapper}>
        <Grid container justify="space-between" className={classes.modalTitle}>
          <Typography variant="h6">{t('product:create_new_machine')}</Typography>
          <Close onClick={() => props.toggleModal(false)} className={classes.closeButton} />
        </Grid>

        <Formik
          initialValues={{
            typeId: '',
            manufacturerId: '',
            model: '',
            width: 0,
            length: 0,
            height: 0,
            weight: 0,
            bglNumber: '',
            hasVin: false,
            modelLeadTime: 0,
            keyParameterName: '',
            keyParameterValue: 0,
            lecturaId: '',
            accessory_1: '',
            accessory_2: '',
            accessory_3: '',
            accessory_4: '',
            accessory_5: '',
            additionalFields: []
          }}
          validationSchema={validationSchema}
          onSubmit={submitNewProductModel}
        >
          <ProductModelForm
            onAbort={() => props.toggleModal(false)}
            handleFileUpdate={handleFileUpdate}
            handleDocumentCategoryChange={handleDocumentCategoryChange}
          />
        </Formik>
      </div>
    </Modal>
  );
};

export default ProductModelModal;
