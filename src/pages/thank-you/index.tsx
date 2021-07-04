import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import AuthLayout from '../../layouts/authLayout';
import Thankyou from '~/components/auth/thank-you';

const ThankYouPage: NextPage = (): ReactElement => (
  <AuthLayout headline="" title="Flexcavo - verify your email">
    <Thankyou />
  </AuthLayout>
);

export default ThankYouPage;
