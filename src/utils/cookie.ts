import Cookies from 'universal-cookie';
import moment from 'moment';

const cookies = new Cookies();

interface NoFunctionObject {
  [key: string]: NoFunctionValue;
}

type NoFunctionArray = Array<NoFunctionValue>;
type NoFunctionValue = boolean | string | number | null | undefined | NoFunctionObject | NoFunctionArray;

// Cookie Setup
export const setCookie = (cookieName: string, cookieValue: NoFunctionValue): Cookies => {
  cookies.set(cookieName, cookieValue, {
    path: '/',
    expires: moment().add(72, 'hour').toDate(),
    sameSite: true,
  });

  return cookies;
};

// Remove Cookie
export const removeCookie = (cookieName: string): Cookies => {
  cookies.remove(cookieName, {
    path: '/',
  });

  return cookies;
};

// Get Cookie
export const getCookie = (cookie: string): string => {
  return cookies.get(cookie);
};
