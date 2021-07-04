import React, { memo, useEffect, useMemo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './edit-services-modal.styles';
import Modal from '@material-ui/core/Modal';
import { isEmpty } from 'lodash';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { EditServicesModalComponent } from './interfaces';
import { ServicesValidation, ServicesList } from '~/shared/index';

const useStyles = makeStyles(styles);

const EditServicesModal = ({
  isModalOpen,
  services,
  onCancel,
  onChangeService,
  onCheckService,
  onSubmit,
}: EditServicesModalComponent): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({});

  const validationSchema = Yup.object().shape({
    services: useMemo(
      () =>
        ServicesValidation({
          message: t('message:positive_number'),
          required: t('message:required'),
        }),
      []
    ),
  });

  useEffect(() => {
    if (services) {
      setInitialValues({
        services: Object.values(services),
      });
    }
  }, [services]);

  return (
    <Modal
      open={isModalOpen}
      onClose={onCancel}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h3>Services</h3>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Box className={classes.form} flexDirection="column" width={1}>
                {!isEmpty(services) &&
                  Object.values(services).map((service, index) => (
                    <ServicesList
                      {...props}
                      key={index}
                      index={index}
                      service={service}
                      onCheckboxChange={() => {
                        onCheckService(service.id);
                      }}
                      onInputChange={(event) => {
                        props.setFieldValue(`services[${index}].price`, event.target.value);
                        onChangeService(service.id, event.target.value);
                      }}
                    />
                  ))}
              </Box>
              <Grid container direction="row">
                <Button type="submit" size="large" variant="contained" color="primary" className={classes.button}>
                  {t('common:submit')}
                </Button>
                <Button size="large" variant="contained" color="primary" onClick={onCancel}>
                  {t('common:cancel')}
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default memo(EditServicesModal);
