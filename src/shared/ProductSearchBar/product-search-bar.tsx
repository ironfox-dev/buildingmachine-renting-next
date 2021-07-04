import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Grid, Hidden } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { DateTimePicker } from '@material-ui/pickers';
import { get } from 'lodash';
import clsx from 'clsx';

import {
  useLocationsListQuery,
  useProductOwnersQuery,
  useProductTypesLazyQuery,
  useProductTypesQuery,
} from '~/graphql/graphql';
import { useSnackbar, PickerProvider } from '~/shared/index';
import productTypeAssets from '~/constants/productTypeAssets';
import useStyles from './product-search-bar.styles';
import { ProductSearchBarProps } from '../interfaces';
import ProductModelSelector from '../ProductModelSelector/product-model-selector';
import ProductSearchModal from '../productSearchModal/product-search-modal';
import { useOnClickOutside } from '~/shared/customHooks/useOnClickOutside';
import { toBerlinTime } from '~/utils/format';

const ProductSearchBar = ({ productTypeId, locationId, start, end }: ProductSearchBarProps): React.ReactElement => {
  const router = useRouter();
  const classes = useStyles();
  const { t } = useTranslation();
  const { Snackbar, showSnackbar } = useSnackbar();
  const searchLocationRef = useRef(null);

  const [isMachinesModalOpen, setIsMachinesModalOpen] = useState(false);
  const [isSearchLocationOpen, setIsSearchLocationOpen] = useState(false);

  const [selectedProductType, setSelectedProductType] = useState(null);
  const [selectedProductModel, setSelectedProductModel] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const defaultDate = new Date();
  defaultDate.setMinutes(0);
  const [startDate, setStartDate] = useState(start || defaultDate);
  const [endDate, setEndDate] = useState(end || defaultDate);

  const { data: productTypes } = useProductTypesQuery();
  const { data: locations } = useLocationsListQuery();
  const { data: owners } = useProductOwnersQuery();
  const [
    fetchFilteredProductTypes,
    { loading: loadingFilteredProductTypes, data: filteredProductTypes, error: filteredProductTypesError },
  ] = useProductTypesLazyQuery();

  useEffect(() => start && setStartDate(start), [start]);
  useEffect(() => end && setEndDate(end), [end]);

  useOnClickOutside(searchLocationRef, () => {
    setIsSearchLocationOpen(false);
  });

  useEffect(() => {
    if (locations && !selectedLocation) {
      const defaultLocation = 'Rosenheim';
      setSelectedLocation(locations.locations.find((loc) => loc.city === defaultLocation));
    }
  }, [locations]);

  useEffect(() => {
    if (locations && locationId) {
      setSelectedLocation(locations.locations.find((loc) => loc.id === locationId));
    }
  }, [locationId, locations]);

  useEffect(() => {
    if (productTypes && productTypeId) {
      const productType = productTypes.productTypes.find((type) => type.id === productTypeId);
      setSelectedProductType(productType);

      if (router.route !== '/products-not-found') {
        searchProductTypes();
      } else {
        const modelTypeId = router.query.modelTypeId;
        if (modelTypeId) {
          setSelectedProductModel(productType.productModel.find((model) => model.id === modelTypeId));
        }
      }
    }
  }, [productTypeId, productTypes]);

  useEffect(() => {
    if (filteredProductTypesError) {
      const errorResponse = get(filteredProductTypesError, 'graphQLErrors[0].extensions.exception.response');
      if (errorResponse && errorResponse.key) {
        const errorLocalized = t(`message:${errorResponse.key}`);
        showSnackbar('error', `${errorLocalized} ${errorResponse.time || ''}`);
      } else {
        showSnackbar('error', filteredProductTypesError.message);
      }
    }

    if (filteredProductTypes) {
      const query: {
        start: string;
        end: string;
        locationId: string;
        productTypeId?: string;
        modelTypeId?: string;
      } = {
        start: toBerlinTime(startDate),
        end: toBerlinTime(endDate),
        locationId: selectedLocation.id,
      };

      const noProducts = filteredProductTypes.productTypes.every((type) =>
        type.productModel?.every((model) => model.products?.length === 0)
      );
      if (noProducts) {
        query.productTypeId = filteredProductTypes.productTypes[0].id;
        query.modelTypeId = filteredProductTypes.productTypes[0].productModel[0].id;
        router.push({
          pathname: '/products-not-found',
          query,
        });
        return;
      }

      if (filteredProductTypes.productTypes.length === 1) {
        const firstProductType = filteredProductTypes.productTypes[0];
        const productModels = firstProductType.productModel.filter((model) => model.products?.length);

        if (productModels.length === 1) {
          localStorage.setItem('orderStartDate', startDate.toISOString());
          localStorage.setItem('orderEndDate', endDate.toISOString());
          localStorage.removeItem('orderServiceIds');
          localStorage.removeItem('orderBundleIds');
          localStorage.removeItem('orderPersonalData');

          router.push({
            pathname: `/product/${productModels[0].key}/machine`,
            query,
          });
        } else {
          query.productTypeId = firstProductType.id;
          const routingPromise = router.push({
            pathname: '/models',
            query,
          });
          if (
            router.pathname === '/models' &&
            (query.productTypeId !== router.query.productTypeId ||
              query.start !== router.query.start ||
              query.end !== router.query.end ||
              query.locationId !== router.query.locationId)
          ) {
            routingPromise.then(() => router.reload());
          }
        }
      }
      if (filteredProductTypes.productTypes.length > 1) {
        router.push({
          pathname: '/categories',
          query,
        });
      }
    }
  }, [filteredProductTypes, filteredProductTypesError]);

  const shouldDisableDate = (day) => day.getDay() === 0 || day.getDay() === 6;

  const searchProductTypes = () => {
    if (loadingFilteredProductTypes) return;

    fetchFilteredProductTypes({
      variables: {
        productTypeId: productTypeId || selectedProductType?.id,
        productModelId: selectedProductModel?.id,
        locationId: selectedLocation?.id,
        ownerId: owners?.productOwners.find((owner) => owner.isFlexcavo)?.id,
        startTime: toBerlinTime(startDate),
        endTime: toBerlinTime(endDate),
      },
    });
  };

  const selectSearchLocation = (event, location) => {
    event.stopPropagation();
    setSelectedLocation(location);
    setIsSearchLocationOpen(false);
  };

  const onProductTypeSelection = (type) => {
    setSelectedProductType(type);
    setSelectedProductModel(null);
  };

  const onProductModelSelection = (model) => {
    setSelectedProductModel(model);
    setIsMachinesModalOpen(false);
  };

  const onClearButtonClick = (event) => {
    event.stopPropagation();
    setSelectedProductType(null);
    setSelectedProductModel(null);
  };

  const onSubmit = () => {
    productTypeId = null;
    setIsMachinesModalOpen(false);
    searchProductTypes();
  };

  return (
    <div className={classes.wizardWrap}>
      <div className={classes.wizard}>
        <Hidden xsDown>
          <div
            className={`${classes.wizardSubmit} ${loadingFilteredProductTypes && classes.wizardSubmitDisabled}`}
            onClick={onSubmit}
          >
            {t('website:search')}
          </div>

          <div className={clsx(classes.wizardCell, classes.wizardCellDateTime)}>
            <strong className={classes.wizardCellTitle}>{t('website:end')}</strong>
            <PickerProvider>
              <DateTimePicker
                required
                autoOk
                disablePast
                variant="inline"
                format="dd.MM.yyyy HH:mm"
                className={classes.datePicker}
                ampm={false}
                minutesStep={5}
                value={endDate}
                onChange={setEndDate}
                shouldDisableDate={shouldDisableDate}
              />
            </PickerProvider>
          </div>

          <div className={clsx(classes.wizardCell, classes.wizardCellDateTime)}>
            <strong className={classes.wizardCellTitle}>{t('website:start')}</strong>
            <PickerProvider>
              <DateTimePicker
                required
                autoOk
                disablePast
                variant="inline"
                format="dd.MM.yyyy HH:mm"
                className={classes.datePicker}
                ampm={false}
                minutesStep={5}
                value={startDate}
                onChange={setStartDate}
                shouldDisableDate={shouldDisableDate}
              />
            </PickerProvider>
          </div>

          <div className={[classes.wizardCell, classes.hoverable].join(' ')} ref={searchLocationRef}>
            <div onClick={() => setIsSearchLocationOpen(!isSearchLocationOpen)}>
              <strong className={classes.wizardCellTitle}>{t('website:rental_location')}</strong>

              <Grid container className={classes.wizardCellValueWrap}>
                <span className={classes.wizardCellValue}>{selectedLocation?.name}</span>
              </Grid>
            </div>

            {isSearchLocationOpen && (
              <Grid container className={classes.wizardCellModal}>
                {locations?.locations.map((location) => (
                  <Grid
                    container
                    key={location.id}
                    className={classes.wizardCellModalItem}
                    onClick={(event) => selectSearchLocation(event, location)}
                  >
                    {location.name}
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
          <ProductModelSelector
            isOpen={isMachinesModalOpen && Boolean(productTypes?.productTypes)}
            onCloseButtonClick={() => setIsMachinesModalOpen(false)}
            productTypesList={productTypes?.productTypes}
            selectedProductType={selectedProductType}
            onProductTypeSelection={onProductTypeSelection}
            onProductModelSelection={onProductModelSelection}
          />
        </Hidden>
        <div
          className={[classes.wizardCellWide, classes.hoverable].join(' ')}
          onClick={() => setIsMachinesModalOpen(true)}
        >
          <strong className={classes.wizardCellTitle}>{t('website:machine')}</strong>

          <Grid container justify="space-between" className={classes.wizardCellValueWrap}>
            <Grid item className={classes.wizardSelectedValue}>
              <Grid container alignItems="center" wrap="nowrap">
                {selectedProductType && productTypeAssets[selectedProductType.name] && (
                  <img style={{ marginRight: 10 }} src={productTypeAssets[selectedProductType.name]?.icon} />
                )}
                <span className={classes.wizardCellValue}>
                  {selectedProductModel
                    ? `${selectedProductModel.manufacturer.abbreviation || selectedProductModel.manufacturer.name} ${
                        selectedProductModel.name
                      }`
                    : selectedProductType?.name || t('website:all_machines')}
                </span>
              </Grid>
            </Grid>

            {selectedProductType && <Close className={classes.hoverable} onClick={onClearButtonClick} />}
          </Grid>
        </div>
      </div>
      <Hidden smUp>
        <ProductSearchModal
          locations={locations?.locations}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          shouldDisableDate={shouldDisableDate}
          isOpen={isMachinesModalOpen}
          selectSearchLocation={selectSearchLocation}
          onCloseButtonClick={() => setIsMachinesModalOpen(false)}
          productTypesList={productTypes?.productTypes}
          selectedProductType={selectedProductType}
          onProductTypeSelection={onProductTypeSelection}
          onProductModelSelection={setSelectedProductModel}
          selectedProductModel={selectedProductModel}
          selectedLocation={selectedLocation}
          onSubmit={onSubmit}
        />
      </Hidden>
      <Snackbar />
    </div>
  );
};

export default ProductSearchBar;
