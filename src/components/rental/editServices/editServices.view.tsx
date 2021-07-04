import React, { ReactElement, useMemo } from 'react';
import { pull } from 'lodash';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';

import { EditServicesProps } from '../interfaces/interfaces';
import { ServicesValidation, ServicesList } from '~/shared/index';
import { useUpdateOrderItemServicesMutation } from '~/graphql/graphql';
import rentalStyle from '../rental.style';

const useStyles = makeStyles(rentalStyle);

const EditServicesForm = ({
  productServices,
  itemServices,
  handleClose,
  productId,
  orderId,
}: EditServicesProps): ReactElement => {
  const [formatterItemServices, setFormattedItemServices] = React.useState([]);
  const styles = useStyles();
  const { t } = useTranslation();
  const [updateOrderItemServicesMutation] = useUpdateOrderItemServicesMutation();

  const validationSchema = Yup.object().shape({
    services: Yup.array().of(
      Yup.object().shape({
        selected: Yup.bool(),
        price: Yup.number().min(0, t('message:positive_number')).typeError(t('message:positive_number')),
      })
    ),
  });

  React.useEffect(() => {
    const formatterItemServices = productServices.map((value) => ({
      ...value,
      selected: Boolean(itemServices.find((service) => value.id === service.productServiceId)),
    }));

    setFormattedItemServices(formatterItemServices);
  }, []);

  const handleFormSubmit = async (payload): Promise<void> => {
    let services = payload.services.map((service) =>
      service.selected ? { price: parseFloat(service.price), serviceId: service.id } : undefined
    );

    services = pull(services, undefined);

    await updateOrderItemServicesMutation({
      variables: {
        orderId,
        productId,
        services,
      },
      refetchQueries: ['Order'],
    });

    handleClose();
  };

  return (
    <div className={styles.editAddressPanel}>
      <p className={styles.subTitlePara}>{t('common:services')}</p>

      <Formik
        enableReinitialize
        validateOnBlur
        validateOnChange
        initialValues={{ services: formatterItemServices }}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {(props): React.ReactElement => (
          <Form>
            <Box flexDirection="column" width={1}>
              <Box display="flex" alignItems="center" mt={2}>
                <Box width={4 / 8}>
                  <Typography>{t('common:name')}</Typography>
                </Box>
                <Box width={4 / 8}>
                  <Typography>{t('common:price')}</Typography>
                </Box>
              </Box>
              {props.values.services.map((service, index) => (
                <ServicesList
                  {...props}
                  key={index}
                  index={index}
                  service={{ ...service, ...service.serviceTemplate }}
                  disableInput={service.serviceTemplate.default}
                  onCheckboxChange={() => {
                    props.setFieldValue(`services[${index}].selected`, !service.selected);
                  }}
                  onInputChange={(event) => {
                    props.setFieldValue(`services[${index}].price`, event.target.value);
                  }}
                />
              ))}
            </Box>

            <Button
              type="button"
              className={styles.buttonUpdate}
              variant="contained"
              color="primary"
              onClick={() => props.handleSubmit()}
            >
              {t('common:update')}
            </Button>

            <Button className={styles.buttonCancel} variant="contained" onClick={() => handleClose()}>
              {t('common:cancel')}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditServicesForm;
