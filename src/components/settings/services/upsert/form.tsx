import React from 'react';
import { Formik, Form } from 'formik';
import useFormHoc from './form-hoc';
import { UpsertTypes } from '../helpers/interfaces';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from '@material-ui/core';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    input: {
      width: '100%',
    },
    error: {
      color: 'red',
    },
  })
);

const UpsertForm = ({ data, isModalOpen, handleModalClose }: UpsertTypes): React.ReactElement => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const formHoc = useFormHoc(data.formValues, data.isCreating);

  const handleFormSubmit = (payload?: any): void => {
    // TODO: any type here for paylaod
    formHoc.handleSubmit(payload);
    handleModalClose();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formHoc.values}
      onSubmit={handleFormSubmit}
      validationSchema={formHoc.ValidationSchema}
    >
      {({ handleChange, handleBlur, values, handleSubmit, errors, touched }): any => (
        <Form>
          <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                {data.isCreating ? 'Add' : 'Update'} Service Template
              </h3>
              <Box p={2}>
                <TextField
                  id="service-name"
                  label="Service Name"
                  aria-describedby="service-template-name"
                  name="name"
                  className={classes.input}
                  value={values?.name}
                  error={Boolean(errors.name && touched.name)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.name && touched.name ? errors.name : ''}
                />
              </Box>
              <Box p={2}>
                <InputLabel htmlFor="service-pricing-structure">Pricing Structure</InputLabel>
                <Select
                  labelId="service-pricing-structure"
                  id="service-pricing-structure"
                  name="pricingStructure"
                  className={classes.input}
                  error={Boolean(errors.pricingStructure && touched.pricingStructure)}
                  value={values?.pricingStructure}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="hourly">Hourly</MenuItem>
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="fixed">Fixed</MenuItem>
                </Select>
                {errors.pricingStructure && touched.pricingStructure && (
                  <FormHelperText className={classes.error}>{errors.pricingStructure}</FormHelperText>
                )}
              </Box>
              <Box p={2}>
                <TextField
                  multiline
                  id="description"
                  label="Description"
                  className={classes.input}
                  rows={4}
                  error={Boolean(errors.description && touched.description)}
                  defaultValue={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description && (
                  <FormHelperText className={classes.error}>{errors.description}</FormHelperText>
                )}
              </Box>
              <Box p={2}>
                <FormControlLabel
                  control={
                    <Checkbox checked={values.default} name="default" onChange={handleChange} onBlur={handleBlur} />
                  }
                  label="Default Service"
                />
              </Box>
              {values.pricingStructure === 'daily' && (
                <Box p={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.includingWeekend}
                        name="includingWeekend"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    }
                    label="Including Weekend"
                  />
                </Box>
              )}
              <Box p={2} display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                  Save
                </Button>
                <Button variant="contained" color="default" onClick={() => handleModalClose()}>
                  Cancel
                </Button>
              </Box>
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

export default UpsertForm;
