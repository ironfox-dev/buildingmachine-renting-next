import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import AuthLayout from '../../layouts/authLayout';
import ResetPassword from '../../components/auth/reset-password';

const ResetPasswordTokenPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { token }: { token?: string } = router.query;

  return (
    <AuthLayout headline="Neues Passwort eingeben" title="Flexcavo - reset password">
      <ResetPassword token={token} />
    </AuthLayout>
  );
}

export default ResetPasswordTokenPage;
