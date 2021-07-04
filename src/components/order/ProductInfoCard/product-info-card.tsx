import React, { useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Grid, Link as MaterialLink } from '@material-ui/core';
import productTypeAssets from '~/constants/productTypeAssets';

import ProductAttribute from '../ProductAttribute/product-attribute';
import useStyles from './product-info-card.styles';
import useSharedStyles from '../styles/styles';
import { ProductInfoCardProps } from '../interfaces/interfaces';
import StandardAttachments from '../StandardAttachments/standard-attachments';

const attributesMap = {
  weight: 'weight',
  diggingDepth: 'digging_depth',
  enginePower: 'engine_power_kW',
  maxReach: 'maximum_reach',
  compactionForce: 'compaction_force',
  maxLoadingCapacity: 'max_loading_capacity',
  bowlCapacity: 'bowl_capacity',
  shovelCapacity: 'shovel_capacity',
  maxStackingHeight: 'max_stacking_height',
  fuelCapacity: 'fuel_capacity',
  strikeForce: 'strike_force',
  shovelTippingLoad: 'shovel_tipping_load',
};

const ProductInfoCard = ({ productModel }: ProductInfoCardProps): React.ReactElement => {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  const { t } = useTranslation();
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

  const dataSheetUrl = useMemo(() => {
    const datasheetDocs = productModel.documents.filter((doc) => doc.documentCategory.key === 'datasheet');
    return datasheetDocs[datasheetDocs.length - 1]?.id
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}document/${datasheetDocs[datasheetDocs.length - 1]?.id}`
      : null;
  }, [productModel]);

  return (
    <Card raised className={sharedClasses.card}>
      <CardContent>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/">
            <MaterialLink classes={{ root: sharedClasses.link }}>{t('order:products')}</MaterialLink>
          </Link>
          <Link href="/categories">
            <MaterialLink classes={{ root: sharedClasses.link }}>{productModel.type.name}</MaterialLink>
          </Link>
          <Link href="/models">
            <MaterialLink classes={{ root: sharedClasses.link }}>{manufacturer}</MaterialLink>
          </Link>
        </Breadcrumbs>

        <Typography variant="h3" className={sharedClasses.header}>
          {`${manufacturer} ${productModel.name}`}
        </Typography>
        <Grid container direction="row" justify="center" className={sharedClasses.modelImageContainer}>
          <img
            className={sharedClasses.modelImage}
            onError={(event) => {
              event.persist();
              const target = event.target as HTMLImageElement;
              target.src = documentUrl;
            }}
            src={`/images/product_models/${productModel.key}.webp`}
            alt={productModel.name}
          />
        </Grid>

        {!!productModel.attributes?.accessories.length && (
          <>
            <Typography variant="h4" className={sharedClasses.subheader}>
              {t('order:standard_attachment')}
            </Typography>
            <StandardAttachments attachments={productModel.attributes.accessories} />
          </>
        )}

        <Typography variant="h4" className={sharedClasses.subheader}>
          {t('order:technical_specifications')}
        </Typography>

        {Object.keys(productModel.attributes).map((key) => {
          if (!Object.keys(attributesMap).includes(key)) return;
          return (
            <ProductAttribute
              key={key}
              label={t(`order:${attributesMap[key]}`)}
              value={productModel.attributes[key]}
              unit={productModel.type.attributes.find((attr) => attr.key === key)?.unit}
            />
          );
        })}

        <ProductAttribute
          label={productModel.attributes.key_parameter_name}
          value={productModel.attributes.key_parameter_value}
          unit={productModel.attributes.key_parameter_unit}
        />

        <Typography variant="h4" className={sharedClasses.subheader}>
          {t('order:transport_information')}
        </Typography>

        {['width', 'height', 'length'].map((key) => {
          return (
            <ProductAttribute
              key={key}
              label={t(`order:${key}`)}
              value={productModel.attributes[key]}
              unit={productModel.type.attributes.find((attr) => attr.key === key)?.unit}
            />
          );
        })}

        {dataSheetUrl && (
          <MaterialLink
            classes={{ root: sharedClasses.link }}
            onClick={() => {
              window.open(dataSheetUrl, '_blank');
            }}
          >
            {t('order:link_to_datasheet')}
          </MaterialLink>
        )}

        <Typography variant="h4" className={sharedClasses.subheader}>
          {t('order:attachment_and_information')}
        </Typography>

        {[1, 2, 3, 4, 5].map((i) => (
          <Typography key={i} className={classes.paragraph} variant="body1">
            {t(`order:price_information_detailed_${i}`)}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProductInfoCard;
