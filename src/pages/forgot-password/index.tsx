import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import AuthLayout from '../../layouts/authLayout';
import ForgotPassword from '../../components/auth/forgot-password';

const ForgotPasswordPage: NextPage = (): ReactElement => (
  <AuthLayout headline="Passwort zurücksetzen" title="Flexcavo - forgot password">
    <ForgotPassword />
  </AuthLayout>
);

export default ForgotPasswordPage;
