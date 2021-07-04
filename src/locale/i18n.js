import i18n from 'i18next';
import Backend from 'i18next-locize-backend';

import de from './de/';
import en from './en/';

i18n.use(Backend).init({
  debug: false,
  localeDetection: false,
  fallbackLng: ['de'],
  referenceLng: ['de'],
  lng: 'de',
  ns: ['common', 'order', 'website'],
  defaultNS: 'common',
  resources: {
    de,
    en,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: 'loaded',
  },
});

export default i18n;
