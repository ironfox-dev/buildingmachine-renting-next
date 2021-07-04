import i18n from '../locale/i18n';
import { DateTime } from 'luxon';

export const currencyFormat = (value: number, currency = 'EUR', options: Intl.NumberFormatOptions = {}) =>
  new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency,
    ...options,
  }).format(value);

export const percentageFormat = (amount: number, options: Intl.NumberFormatOptions = {}) =>
  new Intl.NumberFormat(i18n.language, {
    style: 'percent',
    ...options,
  }).format(amount / 100);

export const toBerlinTime = (value: Date): string => {
  return DateTime.fromObject({
    year: value.getFullYear(),
    month: value.getMonth() + 1,
    day: value.getDate(),
    hour: value.getHours(),
    minute: value.getMinutes(),
    zone: 'UTC+1',
  }).toString();
};
