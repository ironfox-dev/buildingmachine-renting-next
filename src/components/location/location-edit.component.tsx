import React from 'react';
import ValidationSchema from './helpers/validation';
import { Formik } from 'formik';
import LocationFormComponent from './location-form.component';

export default function LocationEditComponent({ values, handleSubmit, snackbar, setSnackbar }): React.ReactElement {
  return (
    <Formik
      enableReinitialize
      validateOnBlur
      validateOnChange
      initialValues={values}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      <LocationFormComponent snackbar={snackbar} setSnackbar={setSnackbar} />
    </Formik>
  );
}
