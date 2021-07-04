import React, { ReactElement, useEffect } from 'react';
import { Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import * as Yup from 'yup';

import Register from './registrationForm';
import { useRegistrationMutation } from '~/graphql/graphql';
import regStyles from './register.style';

const useStyles = makeStyles(regStyles);

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  phoneCode: Yup.string().required('Required'),
  email: Yup.string().email('Invalid eamil').required('Email required'),
  password: Yup.string()
    .min(8)
    .required('Password required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-@./$!%^*()#~&{}?<>=+\w\s]{8,}$/,
      'Should contain digits, lower and upper cases'
    ),
  passwordAgain: Yup.string().oneOf([Yup.ref('password')], 'Repeated password should match'),
  acceptTerms: Yup.boolean().oneOf([true], "You can't register if you don't accpet the terms"),
  confirmIsCompany: Yup.boolean().oneOf([true], 'Flexcavo is currently B2B only.'),
});

const Registration = (): ReactElement => {
  const styles = useStyles();

  const [register, { loading: mutationLoading, error: mutationError, data: mutationData }] = useRegistrationMutation();

  useEffect(() => {
    if (!mutationError && mutationData?.createUser?.email) {
      localStorage.setItem('flexcavoEmail', mutationData.createUser.email);

      Router.replace('/verify-email');
    }
  }, [mutationData]);

  return (
    <div>
      <p className={styles.regHeader}>Registrierung Flexcavo Cockpit</p>
      {!!mutationError && <Alert severity="error">{mutationError.message}</Alert>}

      <Formik
        initialValues={{
          companyName: '',
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          phoneCode: '49',
          street: '',
          city: '',
          postalCode: '',
          country: 'DE',
          password: '',
          passwordAgain: '',
          position: '',
          gender: '',
          acceptTerms: false,
          confirmIsCompany: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await register({
              variables: {
                user: {
                  companyName: values.companyName,
                  firstname: values.firstname,
                  lastname: values.lastname,
                  email: values.email,
                  phone: values.phone,
                  phoneCode: values.phoneCode,
                  street: values.street,
                  city: values.city,
                  postalCode: values.postalCode,
                  country: values.country,
                  password: values.password,
                  position: values.position,
                  gender: values.gender,
                },
              },
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Register mutationLoading={mutationLoading} />
      </Formik>
    </div>
  );
};

export default Registration;
