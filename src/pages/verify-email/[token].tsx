import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import AuthLayout from '../../layouts/authLayout';
import VerifyEmail from '../../components/auth/verify-email';

const VerifyEmailTokenPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { token }: { token?: string } = router.query;

  return (
    <AuthLayout headline="" title="Flexcavo - verify your email">
      <VerifyEmail token={token} />
    </AuthLayout>
  );
}

export default VerifyEmailTokenPage;
