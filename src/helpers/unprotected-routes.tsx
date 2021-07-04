/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import { getCookie } from '~/utils/cookie';

export const unprotectedRoutes: Array<string> = [
  '/',
  '/functionality',
  '/rent-at-flexcavo',
  '/career',
  '/contact',
  '/terms',
  '/imprint',
  '/data-protection',
  '/categories',
  '/models',
  '/products-not-found',
  '/about',

  '/login',
  '/register',
  '/verify-email',
  '/verify-email/[token]',
  '/thank-you',
  '/forgot-password',
  '/reset-password/[token]',
  '/product/[id]/machine',
  '/product/[id]/attachments-and-services',
  '/product/[id]/personal-data',
  '/product/[id]/order-placement',
  '/product/[id]/thanks',
];

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const isAuth = typeof window !== 'undefined' ? !!getCookie('flexcavoToken') : false;

  if (!isAuth && !unprotectedRoutes.includes(router.pathname)) {
    return <h1 style={{ margin: '3rem' }}> Loading... </h1>;
  }

  return children;
};

export default ProtectRoute;
