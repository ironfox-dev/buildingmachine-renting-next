import React, { useState, useEffect, memo, useMemo } from 'react';
import * as Yup from 'yup';
import { pick } from 'lodash';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';

import {
  ProductInformationFragmentDoc,
  ProductQuery,
  useLocationsListQuery,
  useProductLazyQuery,
  useUpdateProductMutation,
} from '~/graphql/graphql';

import { Product, ProductInformationFormError } from '../interfaces';
import InfoCell from '../InfoCell';
import InfoCard from '../InfoCard';
import InfoLine from '../InfoLine';

const currentYear = new Date().getFullYear();

const basicInfoFields = ['productionYear', 'serialNumber', 'notes', 'location', 'unitSerialNumber'];
const purchaseInfoFields = ['purchasePrice', 'deposit', 'leasingRate', 'interest', 'residualValue'];
const instructionsInfoFields = ['instruction', 'workClothing'];

const sectionsToFields = {
  basicInfo: basicInfoFields,
  purchaseInfo: purchaseInfoFields,
  instructionsInfo: instructionsInfoFields,
};

const positiveNumber = Yup.number().min(0, 'Should be positive').typeError('Should be positive');
const text = Yup.string().max(500, 'Max length 500');

const formatProduct = (product: ProductQuery): Product => {
  const attributeValues = product.product.productModel.attributes;
  const attributeUnits = product.product.productModel.type.attributes;
  const attributesData = attributeUnits.reduce(
    (res, unit) => ({
      ...res,
      [unit.key]: unit.unit ? `${attributeValues[unit.key]} ${unit.unit}` : attributeValues[unit.key],
    }),
    {}
  );
  return {
    ...product.product,
    category: product.product.productModel.type.name,
    productionYear: product.product.productionYear,
    serialNumber: product.product.serialNumber,
    name: product.product.productModel.name,
    owner: product.product.productOwner.name,
    location: product.product.location,
    ...attributesData,
  };
};

const ProductInformation = (): React.ReactElement => {
  const { t } = useTranslation();
  const router = useRouter();
  const [formattedProduct, setProduct] = useState({} as Product);
  const [errors, setErrors] = useState({} as ProductInformationFormError);
  const [editedSection, setEditedSection] = useState(null);
  const { data: locations } = useLocationsListQuery();

  const [getProduct, { data: product }] = useProductLazyQuery();
  const [updateProduct] = useUpdateProductMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          product() {
            return cache.writeFragment({
              data: data.updateProduct,
              fragment: ProductInformationFragmentDoc,
            });
          },
        },
      });
    },
  });

  const validationSchemaSource = useMemo(
    () => ({
      productionYear: Yup.number()
        .integer('Should be an integer')
        .min(1950, 'Min 1950')
        .max(currentYear, 'Cannot be a future year')
        .required('Required'),
      serialNumber: Yup.string().required('Required'),
      purchasePrice: positiveNumber,
      deposit: positiveNumber,
      leasingRate: positiveNumber,
      interest: positiveNumber,
      residualValue: positiveNumber,
      instruction: text,
      workClothing: text,
      notes: text,
    }),
    [t]
  );

  useEffect(() => {
    if (product) {
      setProduct(formatProduct(product));
    }
  }, [product]);

  const { id: currentProductId } = router.query;

  useEffect(() => {
    (async () => {
      if (currentProductId && getProduct) {
        await getProduct({ variables: { id: currentProductId as string } });
      }
    })();
  }, [currentProductId]);

  const handleOnEdit = (name) => async () => {
    const validationSchema = Yup.object().shape(pick(validationSchemaSource, sectionsToFields[name]));

    try {
      await validationSchema.validate(pick(formattedProduct, sectionsToFields[name]));
      await updateProduct({
        variables: {
          id: currentProductId as string,
          product: pick(
            {
              serialNumber: formattedProduct.serialNumber,
              productionYear: +formattedProduct.productionYear,
              purchasePrice: +formattedProduct.purchasePrice,
              deposit: +formattedProduct.deposit,
              leasingRate: +formattedProduct.leasingRate,
              interest: +formattedProduct.interest,
              residualValue: +formattedProduct.residualValue,
              instruction: formattedProduct.instruction,
              workClothing: formattedProduct.workClothing,
              notes: formattedProduct.notes,
              location: formattedProduct.location.id,
              unitSerialNumber: formattedProduct.unitSerialNumber ? +formattedProduct.unitSerialNumber : null,
            },
            sectionsToFields[name]
          ),
        },
      });
      setEditedSection(null);
    } catch (error) {
      setErrors({
        ...errors,
        [error.path]: error.message,
      });
    }
  };

  const handleChangeData = (name) => (value) => {
    delete errors[name];
    setErrors(errors);
    setProduct({
      ...formattedProduct,
      [name]: value,
    });
  };

  const handleActivateEditionMode = (name) => () => {
    setEditedSection(name);

    if (editedSection) {
      setProduct({
        ...formattedProduct,
        ...pick(formatProduct(product), sectionsToFields[editedSection]),
      });
    }
  };

  const handleCancelEditionMode = (name) => () => {
    setEditedSection(null);
    setErrors({} as ProductInformationFormError);
    setProduct({
      ...formattedProduct,
      ...pick(formatProduct(product), sectionsToFields[name]),
    });
  };
  const handleBlur = (name) => async () => {
    const validationSchema = Yup.object().shape(pick(validationSchemaSource, sectionsToFields[editedSection]));

    try {
      await Yup.reach(validationSchema, name).validate(formattedProduct[name]);
    } catch (error) {
      setErrors({
        ...errors,
        [name]: error.message,
      });
    }
  };

  return (
    <Grid container spacing={2}>
      {!isEmpty(formattedProduct) && (
        <>
          <InfoCard title={t('fleet:technical_specifications')}>
            <InfoLine>
              <InfoCell label={t('fleet:type')} value={formattedProduct.category} />
              <InfoCell label={t('fleet:weight_class')} value={formattedProduct.weight} />
              <InfoCell label={t('fleet:digging_depth')} value={formattedProduct.diggingDepth} />
              <InfoCell label={t('fleet:engine_power')} value={formattedProduct.enginePower} />
              <InfoCell label={t('fleet:max_range')} value={formattedProduct.maxReach} />
            </InfoLine>
            <InfoLine>
              <InfoCell label={t('fleet:weight')} value={formattedProduct.weight} />
              <InfoCell label={t('fleet:width')} value={formattedProduct.width} />
              <InfoCell label={t('fleet:height')} value={formattedProduct.height} />
              <InfoCell label={t('fleet:long')} value={formattedProduct.length} />
              <InfoCell />
            </InfoLine>
          </InfoCard>

          <InfoCard
            title={t('fleet:base_data')}
            isEditable
            isEdited={editedSection === 'basicInfo'}
            onActivateEditMode={handleActivateEditionMode('basicInfo')}
            onConfirmEdit={handleOnEdit('basicInfo')}
            onCancelEdit={handleCancelEditionMode('basicInfo')}
          >
            <InfoLine>
              <InfoCell
                label={t('fleet:construction_year')}
                value={formattedProduct.productionYear}
                isNumber
                isEditable={editedSection === 'basicInfo'}
                onChange={handleChangeData('productionYear')}
                onBlur={handleBlur('productionYear')}
                error={errors.productionYear}
              />
              <InfoCell
                label={t('fleet:serial_number')}
                value={formattedProduct.serialNumber}
                isEditable={editedSection === 'basicInfo'}
                onChange={handleChangeData('serialNumber')}
                onBlur={handleBlur('serialNumber')}
                error={errors.serialNumber}
              />
              <InfoCell label={t('fleet:BGL_number')} value={formattedProduct.bglNumber} />
              <InfoCell label={t('fleet:BGL_parameter')} value={formattedProduct.bglKeyFigure} />
              <InfoCell
                label={t('fleet:remarks')}
                value={formattedProduct.notes}
                isEditable={editedSection === 'basicInfo'}
                onChange={handleChangeData('notes')}
                onBlur={handleBlur('notes')}
                error={errors.notes}
              />
            </InfoLine>
          </InfoCard>

          <InfoCard
            title={t('fleet:commerical_data')}
            isEditable
            isEdited={editedSection === 'purchaseInfo'}
            onActivateEditMode={handleActivateEditionMode('purchaseInfo')}
            onConfirmEdit={handleOnEdit('purchaseInfo')}
            onCancelEdit={handleCancelEditionMode('purchaseInfo')}
          >
            <InfoLine>
              <InfoCell
                label={t('fleet:purchase_price')}
                value={formattedProduct.purchasePrice}
                isNumber
                isEditable={editedSection === 'purchaseInfo'}
                onChange={handleChangeData('purchasePrice')}
                onBlur={handleBlur('purchasePrice')}
                error={errors.purchasePrice}
              />
              <InfoCell
                label={t('fleet:deposit')}
                value={formattedProduct.deposit}
                isNumber
                isEditable={editedSection === 'purchaseInfo'}
                onChange={handleChangeData('deposit')}
                onBlur={handleBlur('deposit')}
                error={errors.deposit}
              />
              <InfoCell
                label={t('fleet:leasing_rate')}
                value={formattedProduct.leasingRate}
                isNumber
                isEditable={editedSection === 'purchaseInfo'}
                onChange={handleChangeData('leasingRate')}
                onBlur={handleBlur('leasingRate')}
                error={errors.leasingRate}
              />
              <InfoCell
                label={t('fleet:interest')}
                value={formattedProduct.interest}
                isNumber
                isEditable={editedSection === 'purchaseInfo'}
                onChange={handleChangeData('interest')}
                onBlur={handleBlur('interest')}
                error={errors.interest}
              />
              <InfoCell
                label={t('fleet:residual_value')}
                value={formattedProduct.residualValue}
                isNumber
                isEditable={editedSection === 'purchaseInfo'}
                onChange={handleChangeData('residualValue')}
                onBlur={handleBlur('residualValue')}
                error={errors.residualValue}
              />
              <InfoCell label={t('fleet:owner')} value={formattedProduct.owner} />
            </InfoLine>
          </InfoCard>

          <InfoCard
            title={t('fleet:osh')}
            isEditable
            isEdited={editedSection === 'instructionsInfo'}
            onActivateEditMode={handleActivateEditionMode('instructionsInfo')}
            onConfirmEdit={handleOnEdit('instructionsInfo')}
            onCancelEdit={handleCancelEditionMode('instructionsInfo')}
          >
            <InfoLine>
              <InfoCell
                label={t('fleet:instructions')}
                value={formattedProduct.instruction}
                isEditable={editedSection === 'instructionsInfo'}
                onChange={handleChangeData('instruction')}
                onBlur={handleBlur('instruction')}
                error={errors.instruction}
              />
              <InfoCell
                label={t('fleet:workwear')}
                value={formattedProduct.workClothing}
                isEditable={editedSection === 'instructionsInfo'}
                onChange={handleChangeData('workClothing')}
                onBlur={handleBlur('workClothing')}
                error={errors.instruction}
              />
            </InfoLine>
          </InfoCard>
        </>
      )}
    </Grid>
  );
};

export default memo(ProductInformation);
