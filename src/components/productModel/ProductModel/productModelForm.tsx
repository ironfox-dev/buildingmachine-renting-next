import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormikProps, useFormikContext } from 'formik';
import { keyBy } from 'lodash';
import { Delete } from '@material-ui/icons';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography
} from '@material-ui/core';

import sharedStyles from '~/shared/styles';
import { buttonCustomStyle } from '~/shared/inputFields/inputFields.styles';
import { CssInput, CssTextField, DocumentUpload, ManufacturerAutocomplete } from '~/shared/index';

import useStyles from './product-model.styles';
import { CreateProductModelForm, AdditionalField, ProductModel } from '../product-model.interfaces';
import ModelSelect from '../ModelSelect/model-select';
import { useDocumentCategoryQuery, useProductModelsQuery } from '~/graphql/graphql';

const useSharedStyles = makeStyles(sharedStyles);
const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const ProductModelForm = (props): ReactElement => {
  const classesInput = useStylesButtonCustom();
  const sharedClasses = useSharedStyles();
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  }: FormikProps<CreateProductModelForm> = useFormikContext();

  const [categories, setCategories] = useState({});
  const [category, setCategory] = useState('');
  const [attachments, setAttachments] = useState<ProductModel[]>([]);

  const { data: productModelsData } = useProductModelsQuery();
  const { data: categoriesData } = useDocumentCategoryQuery();

  useEffect(() => {
    if (categoriesData) {
      setCategories(keyBy(categoriesData.documentCategory, 'id'));
    }
  }, [categoriesData]);

  const handleAttachmentSelection = (event: ChangeEvent<{ value: any }>) => {
    const results: string[] = event.target.value as string[];
    const selectedAttachments = productModelsData.productModels.filter(item => results.includes(item.id));

    setAttachments(selectedAttachments);
  };

  const addAdditionalField = () => {
    setFieldValue('additionalFields', [
      ...values.additionalFields,
      {
        name: '',
        value: '',
        type: 'string'
      }
    ]);
  }

  const deleteAdditionalField = (index: number) => {
    values.additionalFields.splice(index, 1);

    setFieldValue('additionalFields', values.additionalFields);
  }

  const handleCategoryChange = (event) => {
    const value = event.target.value;

    props.handleDocumentCategoryChange(value);
    setCategory(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography
        variant="subtitle1"
        className={classes.title}
      >
        {t('product:machine')}
      </Typography>

      <Grid
        container
        spacing={2}
        className={sharedClasses.gridContainer}
      >
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:type')}
            placeholder={t('product:type')}
            name="typeId"
            value={values.typeId}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.typeId && !!errors.typeId}
            helperText={touched.typeId && errors.typeId}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ManufacturerAutocomplete
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:manufacturer')}
            placeholder={t('product:manufacturer')}
            name="manufacturerId"
            value={values.manufacturerId}
            onSelected={val => setFieldValue('manufacturerId', val.id)}
            onBlur={handleBlur}
            error={!!touched.manufacturerId && !!errors.manufacturerId}
            helperText={touched.manufacturerId && errors.manufacturerId}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="model"
            label={t('product:model')}
            placeholder={t('product:model')}
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.model && !!errors.model}
            helperText={touched.model && errors.model}
          />
        </Grid>
      </Grid>

      <Typography
        variant="subtitle1"
        className={classes.title}
      >
        {t('product:basic_information')}
      </Typography>

      <Grid container spacing={2} className={sharedClasses.gridContainer}>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:width')}
            placeholder={`${t('product:enter_width')} (${t('mandatory')})`}
            name="width"
            type="number"
            value={values.width}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.width && !!errors.width}
            helperText={touched.width && errors.width}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:length')}
            placeholder={`${t('product:enter_length')} (${t('mandatory')})`}
            name="length"
            type="number"
            value={values.length}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.length && !!errors.length}
            helperText={touched.length && errors.length}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            type="number"
            name="height"
            label={t('product:height')}
            placeholder={`${t('product:enter_height')} (${t('mandatory')})`}
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.height && !!errors.height}
            helperText={touched.height && errors.height}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:weight')}
            placeholder={`${t('product:enter_weight')} (${t('mandatory')})`}
            type="number"
            name="weight"
            value={values.weight}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.weight && !!errors.weight}
            helperText={touched.weight && errors.weight}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            label={t('product:bgl_number')}
            placeholder={`${t('product:enter_bgl_number')} (${t('mandatory')})`}
            name="bglNumber"
            value={values.bglNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.bglNumber && !!errors.bglNumber}
            helperText={touched.bglNumber && errors.bglNumber}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl fullWidth variant="filled">
            <InputLabel>{t('product:has_vin')}</InputLabel>
            <Select
              native
              fullWidth
              required
              name="hasVin"
              value={values.hasVin ? 'true' : 'false'}
              onChange={(evt: React.ChangeEvent<any>) => setFieldValue('hasVin', evt.target.value === 'true')}
              input={<CssInput />}
            >
              <option value="true">{t('yes')}</option>
              <option value="false">{t('no')}</option>
            </Select>
          </FormControl>

        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="modelLeadTime"
            type="number"
            label={t('product:model_lead_time')}
            placeholder={`${t('product:model_lead_time')} (${t('mandatory')})`}
            value={values.modelLeadTime}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.modelLeadTime && !!errors.modelLeadTime}
            helperText={touched.modelLeadTime && errors.modelLeadTime}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="keyParameterName"
            label={t('product:key_parameter_name')}
            placeholder={`${t('product:key_parameter_name')} (${t('mandatory')})`}
            value={values.keyParameterName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.keyParameterName && !!errors.keyParameterName}
            helperText={touched.keyParameterName && errors.keyParameterName}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            type="number"
            name="keyParameterValue"
            label={t('product:key_parameter_value')}
            placeholder={`${t('product:key_parameter_value')} (${t('mandatory')})`}
            value={values.keyParameterValue}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.keyParameterValue && !!errors.keyParameterValue}
            helperText={touched.keyParameterValue && errors.keyParameterValue}
          />
        </Grid>

        <Grid item sm={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            required
            name="lecturaId"
            label={t('product:lectura_id')}
            placeholder={`${t('product:lectura_id')} (${t('mandatory')})`}
            value={values.lecturaId}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.lecturaId && !!errors.lecturaId}
            helperText={touched.lecturaId && errors.lecturaId}
          />
        </Grid>
      </Grid>

      <Typography
        variant="subtitle1"
        className={classes.title}
      >
        {t('product:attachments')}
      </Typography>

      {productModelsData && (
        <Grid container spacing={2} className={sharedClasses.gridContainer}>
          <ModelSelect
            models={productModelsData.productModels}
            selectedModel={attachments.map(attachment => attachment.id)}
            modelChangeHandler={handleAttachmentSelection}
            isMultiple
            isFullWidth
          />
        </Grid>
      )}

      <Typography
        variant="subtitle1"
        className={classes.title}
      >
        {t('product:equipment')} ({t('optional')})
      </Typography>

      <Grid container spacing={2} className={sharedClasses.gridContainer}>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={`${t('product:accessory')} 1`}
            placeholder={`${t('product:add_equipment')} (${t('optional')})`}
            name="accessory_1"
            value={values.accessory_1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={`${t('product:accessory')} 2`}
            placeholder={`${t('product:add_equipment')} (${t('optional')})`}
            name="accessory_2"
            value={values.accessory_2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={`${t('product:accessory')} 3`}
            placeholder={`${t('product:add_equipment')} (${t('optional')})`}
            name="accessory_3"
            value={values.accessory_3}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={`${t('product:accessory')} 4`}
            placeholder={`${t('product:add_equipment')} (${t('optional')})`}
            name="accessory_4"
            value={values.accessory_4}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CssTextField
            InputProps={{ classes: classesInput, disableUnderline: true }}
            variant="filled"
            fullWidth
            label={`${t('product:accessory')} 5`}
            placeholder={`${t('product:add_equipment')} (${t('optional')})`}
            name="accessory_5"
            value={values.accessory_5}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-between"
        alignItems="center"
        alignContent="center"
        className={classes.titleSection}
      >
        <Typography
          variant="subtitle1"
          className={classes.title}
        >
          {t('product:additional_information')} ({t('optional')})
        </Typography>

        <Button
          color="primary"
          onClick={addAdditionalField}
        >
          {t('product:create_addational_value')}
        </Button>
       </Grid>

      <Grid container className={sharedClasses.gridContainer}>
        {values.additionalFields.map((field: AdditionalField, index: number) => (<Grid
          container
          key={`additional-field-${index}`}
          spacing={2}
          alignItems="center"
          style={{paddingBottom: 15}}
        >
          <Grid item sm={4} xs={12}>
            <CssTextField
              InputProps={{ classes: classesInput, disableUnderline: true }}
              variant="filled"
              fullWidth
              label={t('product:name')}
              placeholder={t('product:name')}
              name={`additionalFields[${index}].name`}
              value={field.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <CssTextField
              InputProps={{ classes: classesInput, disableUnderline: true }}
              variant="filled"
              fullWidth
              label={t('product:value')}
              placeholder={t('product:value')}
              name={`additionalFields[${index}].value`}
              value={field.value}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <Grid container alignItems="center">
              <Grid item md={10} xs={10}>
                <FormControl fullWidth variant="filled">
                  <InputLabel>{t('type')}</InputLabel>
                  <Select
                    native
                    fullWidth
                    value={field.type}
                    onChange={handleChange}
                    input={<CssInput />}
                    name={`additionalFields[${index}].type`}
                  >
                    <option value="string">{t('text')}</option>
                    <option value="number">{t('number')}</option>
                    <option value="boolean">{t('boolean')}</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={2} style={{textAlign: 'center'}}>
                <Delete
                  className={sharedClasses.pointer}
                  onClick={() => deleteAdditionalField(index)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>))}
      </Grid>

      <Grid container>
        <Grid item sm={4} xs={12}>
          <DocumentUpload
            handleDocumentCategoryChange={handleCategoryChange}
            handleFileUpdate={props.handleFileUpdate}
            selectedCategory={category}
            categories={categories}
          />
        </Grid>
      </Grid>

      <Grid
        container
        justify="flex-end"
        alignItems="center"
        className={sharedClasses.gridContainer}
      >
        <Button onClick={props.onAbort}>{t('product:abort')}</Button>

        <Button
          color="primary"
          variant="contained"
          style={{marginLeft: 20}}
          type="submit"
        >
          {t('product:create_machine')}
        </Button>
      </Grid>
    </form>
  );
};

export default ProductModelForm;
