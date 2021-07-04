import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Icon, Modal, Backdrop, ButtonBase, Typography, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { DateTimePicker } from '@material-ui/pickers';

import productTypeAssets from '~/constants/productTypeAssets';
import { currencyFormat } from '~/utils/format';
import useStyles from './product-search-modal.styles';
import { ProductModalSelectorProps, LocationModel } from '../interfaces';
import { lightGray, primary } from '~/constants/colors';
import { PickerProvider } from '~/shared/index';

const ProductSearchModal = ({
  locations,
  selectSearchLocation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  shouldDisableDate,
  isOpen,
  onCloseButtonClick,
  productTypesList,
  selectedProductType,
  onProductTypeSelection,
  onProductModelSelection,
  selectedProductModel,
  selectedLocation,
  onSubmit,
}: ProductModalSelectorProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [modalSearchStep, setModalSearchStep] = useState<number>(0);
  const [dateFocus, setDateFocus] = useState<string>('start');
  const [productSearch, setProductSearch] = useState<string>('');

  useEffect(() => {
    setModalSearchStep(0);
  }, [isOpen]);

  const getMinimalMonthlyPrice = (model) =>
    model.products.filter((prod) => prod.priceMonthly).sort((a, b) => a.priceMonthly - b.priceMonthly)[0]?.priceMonthly;

  const modalHeaderTitle = () => {
    switch (modalSearchStep) {
      case 0:
        return t('website:machine');
      case 1:
        return selectedProductType.name;
      case 2:
        return t('website:rental_location');
      case 3:
        return t('website:rental_period');
      case 4:
        return t('website:search');
      default:
        return t('website:machine');
    }
  };
  const handleProductSearch = (e) => {
    const inputText = e.target.value;
    setProductSearch(inputText);
  };

  const modelsForSearch = useMemo(
    () =>
      isEmpty(productTypesList)
        ? []
        : productTypesList.reduce((acc, type) => {
            const models = type.productModel.filter((model) => model.products.some((prod) => prod.priceMonthly));
            return [...acc, ...models];
          }, []),
    [productTypesList]
  );

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={onCloseButtonClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grid container direction="column" className={classes.modalBody}>
          <Grid container className={classes.modalHeader}>
            {modalSearchStep !== 4 && (
              <ButtonBase
                onClick={modalSearchStep !== 0 ? () => setModalSearchStep(modalSearchStep - 1) : onCloseButtonClick}
              >
                <ArrowBackIosIcon color="primary" className={classes.modalBackIcon} />
              </ButtonBase>
            )}
            <Typography variant="h1" className={classes.modalHeaderTitle}>
              {modalHeaderTitle()}
            </Typography>
            <ButtonBase onClick={onCloseButtonClick} className={classes.modalRowIcons}>
              <CloseIcon />
            </ButtonBase>
          </Grid>
          {(modalSearchStep === 0 || (modalSearchStep === 1 && productSearch !== '')) && (
            <Grid container direction="row" alignItems="center" className={classes.modalProductSearchBar}>
              <SearchIcon />
              <input
                type="text"
                value={productSearch}
                placeholder={t('website:find_machine')}
                onChange={handleProductSearch}
                className={classes.productSearchInput}
              />
              {productSearch !== '' && (
                <ButtonBase
                  onClick={() => {
                    setProductSearch('');
                    setModalSearchStep(0);
                  }}
                >
                  <CloseIcon />
                </ButtonBase>
              )}
            </Grid>
          )}
          <Grid className={classes.wizardModal}>
            {modalSearchStep === 0 && productSearch === '' && (
              <Grid className={classes.wizardCategoriesSection}>
                <Grid container direction="column">
                  {productTypesList &&
                    productTypesList
                      .filter((type) =>
                        type.productModel.some((model) => model.products.some((prod) => prod.priceMonthly))
                      )
                      .map((type) => (
                        <Grid
                          container
                          key={type.id}
                          alignItems="center"
                          className={classes.wizardCategory}
                          onClick={() => {
                            onProductTypeSelection(type);
                            setModalSearchStep(1);
                          }}
                        >
                          <Icon className={classes.wizardCategoryIcon}>
                            <img src={productTypeAssets[type.name]?.icon} />
                          </Icon>
                          <span className={classes.wizardCategoryName}>{type.name}</span>
                        </Grid>
                      ))}
                </Grid>
              </Grid>
            )}

            {modalSearchStep === 1 && productSearch === '' && (
              <Grid container className={classes.wizardResultsList} direction="row">
                {selectedProductType?.productModel
                  .filter((model) => model.products.some((prod) => prod.priceMonthly))
                  .map((model) => (
                    <Grid
                      key={model.id}
                      container
                      direction="row"
                      alignItems="center"
                      className={[classes.wizardResult, classes.hoverable].join(' ')}
                      onClick={() => {
                        onProductModelSelection(model);
                        setModalSearchStep(2);
                      }}
                    >
                      <img
                        className={classes.wizardResultIcon}
                        src={productTypeAssets[selectedProductType.name]?.icon}
                      />

                      <Grid className={classes.wizardResultHead}>
                        <h4 className={classes.wizardResultTitle}>
                          {model.manufacturer.abbreviation || model.manufacturer.name} {model.name}
                        </h4>
                        <span className={classes.wizardResultSubtitleManufacturer}>{selectedProductType.name}</span>
                        <span className={classes.wizardResultSubtitleDescription}>
                          {model.attributes.key_parameter_name} {model.attributes.key_parameter_value}&nbsp;
                          {model.attributes.key_parameter_unit}
                        </span>
                      </Grid>

                      <span className={classes.bestSellerItemPriceTag}>
                        {t('website:from')}&nbsp;
                        <span className={classes.bestSellerItemPrice}>
                          {currencyFormat(getMinimalMonthlyPrice(model))}
                        </span>
                        &nbsp;| {t('website:day')}
                      </span>
                    </Grid>
                  ))}
              </Grid>
            )}

            {modalSearchStep === 0 && productSearch !== '' && (
              <Grid container className={classes.wizardResultsList} direction="row">
                {modelsForSearch
                  .filter(
                    (model) =>
                      (model.manufacturer.abbreviation || model.manufacturer.name || model.name)
                        .toUpperCase()
                        .indexOf(productSearch.toUpperCase()) > -1
                  )
                  .map((model) => (
                    <Grid
                      key={model.id}
                      container
                      direction="row"
                      alignItems="center"
                      className={[classes.wizardResult, classes.hoverable].join(' ')}
                      onClick={() => {
                        onProductTypeSelection(
                          productTypesList.find((type) => type.productModel.some((m) => m.id === model.id))
                        );
                        onProductModelSelection(model);
                        setModalSearchStep(2);
                      }}
                    >
                      <img className={classes.wizardResultIcon} src={productTypeAssets[model.attributes.type]?.icon} />

                      <Grid className={classes.wizardResultHead}>
                        <h4 className={classes.wizardResultTitle}>
                          {model.manufacturer.abbreviation || model.manufacturer.name} {model.name}
                        </h4>
                        <span className={classes.wizardResultSubtitleManufacturer}>{model.attributes.type}</span>
                        <span className={classes.wizardResultSubtitleDescription}>
                          {model.attributes.key_parameter_name} {model.attributes.key_parameter_value}&nbsp;
                          {model.attributes.key_parameter_unit}
                        </span>
                      </Grid>

                      <span className={classes.bestSellerItemPriceTag}>
                        {t('website:from')}&nbsp;
                        <span className={classes.bestSellerItemPrice}>
                          {currencyFormat(getMinimalMonthlyPrice(model))}
                        </span>
                        &nbsp;| {t('website:day')}
                      </span>
                    </Grid>
                  ))}
              </Grid>
            )}
            {modalSearchStep === 2 && (
              <Grid container className={classes.wizardCellModal}>
                {locations?.map((location: LocationModel) => (
                  <Grid
                    container
                    key={location.id}
                    className={classes.wizardCellModalItem}
                    onClick={(event) => {
                      selectSearchLocation(event, location);
                      setModalSearchStep(3);
                    }}
                  >
                    {location.name}
                  </Grid>
                ))}
              </Grid>
            )}
            {modalSearchStep === 3 && (
              <Grid className={classes.datePickerContainer}>
                <Grid container direction="row" alignItems="center" className={classes.datePickerWrapper}>
                  <Button
                    onClick={() => setDateFocus('start')}
                    className={classes.datePickerComponent}
                    style={{ borderRight: `1px solid ${lightGray}`, color: dateFocus === 'start' ? primary : '' }}
                  >
                    <Typography className={classes.datePickerTitle} variant="h1">
                      {t('website:start')}
                    </Typography>
                    <PickerProvider>
                      <DateTimePicker
                        required
                        autoOk
                        disablePast
                        variant="inline"
                        format="dd.MM.yyyy"
                        className={classes.datePicker}
                        ampm={false}
                        minutesStep={5}
                        value={startDate}
                        onChange={setStartDate}
                        shouldDisableDate={shouldDisableDate}
                      />
                    </PickerProvider>
                  </Button>
                  <Button
                    onClick={() => setDateFocus('end')}
                    className={classes.datePickerComponent}
                    style={{ color: dateFocus === 'end' ? primary : '' }}
                  >
                    <Typography className={classes.datePickerTitle} variant="h1">
                      {t('website:end')}
                    </Typography>
                    <PickerProvider>
                      <DateTimePicker
                        required
                        autoOk
                        disablePast
                        variant="inline"
                        format="dd.MM.yyyy"
                        className={classes.datePicker}
                        ampm={false}
                        minutesStep={5}
                        value={endDate}
                        onChange={setEndDate}
                        shouldDisableDate={shouldDisableDate}
                      />
                    </PickerProvider>
                  </Button>
                </Grid>
                <Button
                  onClick={() => setModalSearchStep(4)}
                  color="primary"
                  variant="contained"
                  className={classes.dateSaveButton}
                >
                  {t('website:select_date')}
                </Button>
              </Grid>
            )}
            {modalSearchStep === 4 && (
              <Grid className={classes.filterResultsContainer}>
                <Grid onClick={() => setModalSearchStep(0)} className={classes.resultRows}>
                  <Typography variant="h1" className={classes.resultTitles}>
                    {t('website:machine')}
                  </Typography>
                  <Grid container direction="row" alignItems="center">
                    <img className={classes.wizardResultIcon} src={productTypeAssets[selectedProductType.name]?.icon} />
                    <Typography variant="body1" className={classes.resultModelDescripton}>
                      {selectedProductModel.manufacturer.abbreviation || selectedProductModel.manufacturer.name}{' '}
                      {selectedProductModel.name}
                    </Typography>
                    <ExpandMoreIcon className={classes.modalRowIcons} />
                  </Grid>
                </Grid>
                <Grid
                  onClick={() => setModalSearchStep(2)}
                  container
                  direction="column"
                  justify="center"
                  className={classes.resultRows}
                >
                  <Typography variant="h1" className={classes.resultTitles}>
                    {t('website:rental_location')}
                  </Typography>
                  <Grid container direction="row">
                    <Typography variant="body1" className={classes.resultModelDescripton}>
                      {selectedLocation.city}
                    </Typography>
                    <ExpandMoreIcon className={classes.modalRowIcons} />
                  </Grid>
                </Grid>
                <Grid container direction="column" justify="center" className={classes.resultRows}>
                  <Typography variant="h1" className={classes.resultTitles}>
                    {t('website:rental_period')}
                  </Typography>
                  <Grid container direction="row">
                    <Typography variant="body1" className={classes.resultModelDescripton}>
                      {t('website:exact_rental_dates')}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  onClick={() => setModalSearchStep(3)}
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.resultRows}
                >
                  <Grid
                    className={classes.dateResultWrapper}
                    item
                    xs={6}
                    style={{ borderRight: `1px solid ${lightGray}` }}
                  >
                    <Typography className={classes.datePickerTitle} variant="h1">
                      {t('website:start')}
                    </Typography>
                    <Typography className={classes.resultDate}>{moment(startDate).format('MM.DD.YYYY')}</Typography>
                  </Grid>
                  <Grid className={classes.dateResultWrapper} item xs={6}>
                    <Typography className={classes.datePickerTitle} variant="h1">
                      {t('website:end')}
                    </Typography>
                    <Typography className={classes.resultDate}>{moment(endDate).format('MM.DD.YYYY')}</Typography>
                  </Grid>
                </Grid>
                <Button onClick={onSubmit} variant="contained" color="primary" className={classes.searchButton}>
                  {t('website:search')}
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ProductSearchModal;
