import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { Link as MaterialLink } from '@material-ui/core';

import { useProductOwnersQuery, useProductTypesLazyQuery } from '~/graphql/graphql';
import ProductSearchBar from '~/shared/ProductSearchBar/product-search-bar';
import useStyles from './product-categories.style';
import CategoriesList from './CategoriesList/categories-list';
import ModelsList from './ModelsList/models-list';

const ProductCategories = (): ReactElement => {
  const router = useRouter();
  const classes = useStyles();
  const { t } = useTranslation();

  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();
  const [locationId, setLocationId] = useState<string>();
  const [productTypeId, setProductTypeId] = useState<string>();

  useEffect(() => {
    router.query.start && setStartTime(new Date(router.query.start as string));
  }, [router.query.start]);
  useEffect(() => {
    router.query.end && setEndTime(new Date(router.query.end as string));
  }, [router.query.end]);
  useEffect(() => {
    router.query.locationId && setLocationId(router.query.locationId as string);
  }, [router.query.locationId]);
  useEffect(() => {
    router.query.productTypeId && setProductTypeId(router.query.productTypeId as string);
  }, [router.query.productTypeId]);

  const { data: owners } = useProductOwnersQuery();
  const [fetchFilteredProductTypes, { data: productTypes }] = useProductTypesLazyQuery();

  useEffect(() => {
    if (owners) {
      const variables: {
        startTime: Date;
        endTime: Date;
        locationId: string;
        ownerId: string;
        productTypeId?: string;
        modelTypeId?: string;
      } = {
        startTime,
        endTime,
        locationId,
        ownerId: owners.productOwners.find((owner) => owner.isFlexcavo)?.id,
      };
      if (productTypeId) variables.productTypeId = productTypeId;
      if (router.route !== '/products-not-found') {
        fetchFilteredProductTypes({ variables });
      }
    }
  }, [startTime, endTime, locationId, owners]);

  const onProductModelSelect = (modelKey) => {
    localStorage.setItem('orderStartDate', startTime.toISOString());
    localStorage.setItem('orderEndDate', endTime.toISOString());
    localStorage.removeItem('orderServiceIds');
    localStorage.removeItem('orderBundleIds');
    localStorage.removeItem('orderPersonalData');

    router.push({
      pathname: `/product/${modelKey}/machine`,
      query: {
        start: startTime.toISOString(),
        end: endTime.toISOString(),
        locationId,
      },
    });
  };

  return (
    <>
      <div className={classes.actionBar}>
        <ProductSearchBar start={startTime} end={endTime} locationId={locationId} productTypeId={productTypeId} />
      </div>

      {router.route === '/products-not-found' && (
        <div className={classes.notFound}>
          <Link href="/categories">
            <MaterialLink className={classes.link}>{t('website:view_all_categories')}</MaterialLink>
          </Link>
          <Typography variant="h3" className={classes.header}>
            {t('website:products_not_found')}
          </Typography>
        </div>
      )}

      {productTypes && router.route === '/categories' && (
        <CategoriesList productTypes={productTypes.productTypes} onProductTypeSelect={setProductTypeId} />
      )}

      {productTypes && router.route === '/models' && (
        <ModelsList productType={productTypes.productTypes[0]} onProductModelSelect={onProductModelSelect} />
      )}
    </>
  );
};

export default ProductCategories;
