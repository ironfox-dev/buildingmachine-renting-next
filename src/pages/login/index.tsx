import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import AuthLayout from '../../layouts/authLayout';
import Login from '../../components/auth/login/login';

const LoginPage: NextPage = (): ReactElement => (
  <AuthLayout headline="Anmeldung Flexcavo Cockpit" title="Flexcavo - Login">
    <Login />
  </AuthLayout>
);

export default LoginPage;
