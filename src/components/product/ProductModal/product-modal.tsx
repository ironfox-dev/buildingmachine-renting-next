import React, { useEffect, useState, memo, useMemo } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import useStyles from './product-modal.styles';
import { ProductModalProps } from '../interfaces/interfaces';
import BaseData from './BaseData/base-data';
import CommercialData from './CommercialData/commercial-data';
import OccupationalSafety from './OccupationalSafety/occupational-safety';
import Services from './Services/services';
import GraduatedPricesLead from './GraduatedPricesLead/graduated-prices-lead';
import ProductModalHeader from './ProductModalHeader/product-modal-header';
import ProductModalFooter from './ProductModalFooter/product-modal-footer';
import { ServicesValidation } from '~/shared/index';
import ProductSelection from './ProductSelection/product-selection';

const ProductModal = ({
  isOpen,
  onClose,
  owners,
  services,
  locations,
  productModel,
  productType,
  productTypes,
  formSubmitHandler,
  handleModelChange,
  handleTypeChange,
  handleOwnerChange,
}: ProductModalProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isSelectModel, setIsSelectModel] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const NEXT_STEP = 'next';
  const BACK_STEP = 'back';
  const CONFIRM_STEP = 'confirm';

  const steps = [
    t('product:base_data'),
    t('product:commercial_data'),
    t('product:occupational_safety'),
    t('product:services'),
    t('product:graduated_prices_lead'),
  ];

  const currentYear = new Date().getFullYear();

  const fields = {
    // Base Data step
    productionYear: currentYear,
    serialNumber: '',
    unitSerialNumber: '',
    notes: '',
    location: '',
    vin: '',
    // Commercial Data step
    purchasePrice: '',
    deposit: '',
    leasingRate: '',
    interest: '',
    residualValue: '',
    owner: '',
    // Occupational Safety step
    instruction: '',
    workClothing: '',
    // Services step
    services,
    // Graduated Prices Lead step
    priceDaily: 0,
    priceWeekly: 0,
    priceMonthly: 0,
    productLeadTime: '',
    serviceTime: '',
    calculateWeekend: '',
  };

  const positiveNumberValidation = Yup.number()
    .min(0, t('message:positive_number'))
    .typeError(t('message:positive_number'));
  const textValidation = Yup.string().max(500, `${t('message:max_length')} 500`);
  const positiveRequiredNumber = positiveNumberValidation.required(t('message:required'));
  let vinValidation = Yup.string()
    .min(11, `${t('message:min_length')} 11`)
    .max(17, `${t('message:max_length')} 17`)
    .matches(/^[A-Z0-9]*$/, t('message:invalid_format'));
  if (productModel?.hasVin) vinValidation = vinValidation.required(t('message:required'));

  const validationSchema = Yup.object().shape({
    // Base Data step
    productionYear: Yup.number()
      .integer(t('message:integer_number'))
      .min(1950, `${t('message:min_year')} 1950`)
      .max(currentYear, t('message:production_year_max'))
      .required(t('message:required')),
    serialNumber: Yup.string().required(t('message:required')),
    unitSerialNumber: positiveNumberValidation,
    notes: textValidation,
    location: Yup.string().required(t('message:required')),
    vin: vinValidation,
    // Commercial Data step
    purchasePrice: positiveNumberValidation,
    deposit: positiveNumberValidation,
    leasingRate: positiveNumberValidation,
    interest: positiveNumberValidation,
    residualValue: positiveNumberValidation,
    // Occupational Safety step
    instruction: textValidation,
    workClothing: textValidation,
    // Services step
    services: useMemo(
      () =>
        ServicesValidation({
          message: t('message:positive_number'),
          required: t('message:required'),
        }),
      []
    ),
    // Graduated Prices Lead step
    priceDaily: positiveRequiredNumber,
    priceWeekly: positiveRequiredNumber,
    priceMonthly: positiveRequiredNumber,
    productLeadTime: positiveNumberValidation,
    serviceTime: positiveNumberValidation,
    calculateWeekend: Yup.boolean(),
  });

  useEffect(() => {
    if (isOpen) {
      setIsSelectModel(true);
      setActiveStep(0);
    }
  }, [isOpen]);

  const handleStep = ({ validateForm, setTouched, handleSubmit }, stepType) => {
    validateForm().then((errors) => {
      if (Object.entries(errors).length) {
        const initialValue = {};
        const errorList = Object.keys(errors).reduce((obj, item) => {
          return {
            ...obj,
            [item]: true,
          };
        }, initialValue);
        setTouched(errorList);
      } else {
        if (stepType !== CONFIRM_STEP) {
          setActiveStep((prevActiveStep) => {
            switch (stepType) {
              case NEXT_STEP:
                return prevActiveStep + 1;
              case BACK_STEP:
                return prevActiveStep - 1;
            }
          });
        } else {
          handleSubmit();
        }
      }
    });
  };

  const handleCreateMachine = () => {
    setIsSelectModel(false);
  };

  const getStepContent = (stepIndex, props) => {
    switch (stepIndex) {
      case 0:
        return <BaseData {...props} locations={locations} hasVin={productModel.hasVin} />;
      case 1:
        return <CommercialData {...props} owners={owners} handleOwnerChange={handleOwnerChange} />;
      case 2:
        return <OccupationalSafety {...props} />;
      case 3:
        return <Services {...props} />;
      case 4:
        return <GraduatedPricesLead {...props} />;
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className={classes.modal}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container className={classes.modalInnerWrapper}>
        <ProductModalHeader
          abbreviation={productModel?.manufacturer.abbreviation}
          name={productModel?.name}
          type={productModel?.attributes.type}
          typeName={productType?.name}
          isSelectMode={!isSelectModel && Boolean(productModel)}
        />

        {isSelectModel && (
          <ProductSelection
            productModel={productModel}
            productType={productType}
            productTypes={productTypes}
            handleModelChange={handleModelChange}
            handleTypeChange={handleTypeChange}
          />
        )}

        {!isSelectModel && (
          <>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Divider className={classes.divider} />
          </>
        )}

        <Formik
          enableReinitialize
          initialValues={fields}
          validationSchema={validationSchema}
          onSubmit={formSubmitHandler}
        >
          {(props) => (
            <Form className={classes.form}>
              {!isSelectModel && (
                <>
                  <Typography className={classes.stepName} variant="subtitle1">
                    {steps[activeStep]}
                  </Typography>
                  {getStepContent(activeStep, props)}
                </>
              )}

              <ProductModalFooter
                {...props}
                activeStep={activeStep}
                stepsLength={steps.length}
                isSelectMode={isSelectModel}
                closeModal={onClose}
                handleBack={() => handleStep(props, BACK_STEP)}
                handleNext={() => handleStep(props, NEXT_STEP)}
                handleCreateMachine={handleCreateMachine}
                handleSubmit={() => handleStep(props, CONFIRM_STEP)}
              />
            </Form>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default memo(ProductModal);
