import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import AuthLayout from '../../layouts/authLayout';
import VerifyEmail from '../../components/auth/verify-email';

const VerifyEmailPage: NextPage = (): ReactElement => (
  <AuthLayout headline="" title="Flexcavo - verify your email">
    <VerifyEmail />
  </AuthLayout>
);

export default VerifyEmailPage;
