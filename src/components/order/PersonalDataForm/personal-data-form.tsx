import React from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useStyles from './personal-data-form.styles';
import { PersonalDataFormProps } from '../interfaces/interfaces';
import CompanyDetails from '../CompanyDetails/company-details';
import AddressForm from '../AddressForm/address-form';
import RegisterCard from '../RegisterCard/register-card';

const PersonalDataForm = ({
  children,
  handleFormSubmit,
  fields,
  isRegistration = false,
}: PersonalDataFormProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  if (!fields) {
    fields = {
      companyName: '',
      gender: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneCode: 49,
      phoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      projectAddress: '',
      projectZipCode: '',
      projectCity: '',
      projectCountry: '',
      skipRegistration: true,
      password: '',
    };
  }

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Required'),
    gender: Yup.string(),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Incorrect format').required('Required'),
    phoneCode: Yup.number().required('Required'),
    phoneNumber: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    zipCode: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    projectAddress: Yup.string().required('Required'),
    projectZipCode: Yup.string().required('Required'),
    projectCity: Yup.string().required('Required'),
    projectCountry: Yup.string().required('Required'),
    skipRegistration: Yup.boolean(),
    password: Yup.string().when('skipRegistration', {
      is: true,
      then: Yup.string(),
      otherwise: Yup.string().required('Required'),
    }),
  });

  return (
    <Formik initialValues={fields} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      {(props: FormikProps<FormikValues>) => {
        const copyAddress = () => {
          props.setFieldValue('projectAddress', props.values.address);
          props.setFieldValue('projectZipCode', props.values.zipCode);
          props.setFieldValue('projectCity', props.values.city);
          props.setFieldValue('projectCountry', props.values.country);
        };

        return (
          <form className={classes.grid} onSubmit={props.handleSubmit}>
            <CompanyDetails {...props} />
            <AddressForm
              {...props}
              addressFieldName="address"
              zipCodeFieldName="zipCode"
              cityFieldName="city"
              countryFieldName="country"
            />

            <Typography variant="h4" className={classes.header}>
              2. {t('order:project_address')}
            </Typography>
            <Link className={classes.copyAddress} onClick={copyAddress}>
              {t('order:copy_address_above')}
            </Link>
            <AddressForm
              {...props}
              addressFieldName="projectAddress"
              zipCodeFieldName="projectZipCode"
              cityFieldName="projectCity"
              countryFieldName="projectCountry"
            />

            <Typography variant="h4" className={classes.header}>
              3. {t('order:self_pickup_delivery')}
            </Typography>

            {children}

            <Typography variant="h4" className={classes.header}>
              4. {t('order:payment')}
            </Typography>
            <Typography variant="body1" className={classes.info}>
              {t('order:payment_details')}&nbsp;
              <Link href="https://www.flexcavo.de/agb/" target="_blank">
                {t('order:more_information')}
              </Link>
            </Typography>

            {isRegistration && <RegisterCard {...props} />}

            <Typography variant="body1" className={classes.info}>
              {t('order:data_privacy_statement').split('hier')[0]}
              <Link href="https://www.flexcavo.de/datenschutz/" target="_blank">
                hier
              </Link>
              {t('order:data_privacy_statement').split('hier')[1]}
            </Typography>

            <Button type="submit" variant="contained" size="large" color="primary" className={classes.button}>
              {t('order:continue')}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default PersonalDataForm;
