import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import AuthLayout from '../../layouts/authLayout';
import Registration from '../../components/auth/register/register';

const RegisterPage: NextPage = (): ReactElement => (
  <AuthLayout headline="" title="Flexcavo - Registration">
    <Registration />
  </AuthLayout>
);

export default RegisterPage;
