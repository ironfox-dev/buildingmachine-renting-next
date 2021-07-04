import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';

import { useAccountInfoQuery, useUpdateAccountMutation } from '~/graphql/graphql';
import AccountInfo from './accountForm';
import accountStyle from './account.style';

import * as Yup from 'yup';

const useStyles = makeStyles(accountStyle);

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  email: Yup.string().email('Invalid eamil').required('Email required'),
  password: Yup.string()
    .min(8)
    .required('Password required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-@./$!%^*()#~&{}?<>=+\w\s]{8,}$/,
      'Should contain digits, lower and upper cases'
    ),
  passwordAgain: Yup.string().oneOf([Yup.ref('password')], 'Repeated password should match'),
});

const Account = (): ReactElement => {
  const styles = useStyles();
  const [
    updateAccount,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useUpdateAccountMutation();

  const { data } = useAccountInfoQuery();
  const getAccount = data?.getAccount;

  return (
    <div className={styles.wrap}>
      {!!mutationError && <Alert severity="error">{mutationError.message}</Alert>}
      {!!mutationData?.updateAccount?.isSuccessful && <Alert severity="success">Updated Successfully</Alert>}

      <Formik
        initialValues={{
          companyName: '',
          street: '',
          city: '',
          postalCode: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          passwordAgain: '',
          position: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await updateAccount({
              variables: {
                account: {
                  userId: getAccount?.users[0]?.id,
                  companyId: getAccount.id,
                  addressId: getAccount?.addresses[0]?.id,
                  email: values.email,
                  password: values.password,
                  companyName: values.companyName,
                  street: values.street,
                  city: values.city,
                  postalCode: values.postalCode,
                  firstname: values.firstname,
                  lastname: values.lastname,
                  position: values.position,
                },
              },
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <AccountInfo getAccount={getAccount} mutationLoading={mutationLoading} />
      </Formik>
    </div>
  );
};

export default Account;
