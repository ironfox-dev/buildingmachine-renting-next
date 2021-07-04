import { Select } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CssInput } from '..';
import countryPhoneCodes from '~/constants/countryPhoneCodes';
import countryNames from '~/constants/countryNames';

export const CountriesPhoneCodesSelect = (props): ReactElement => {
  const { t } = useTranslation();

  return (
    <Select {...props} native label={t('user:reg_country_code')} input={<CssInput />}>
      {!!props.empty && <option key="empty-phone" value="" />}

      {Object.keys(countryPhoneCodes)
        .sort()
        .map((key) => (
          <option key={key} value={countryPhoneCodes[key]}>
            +{countryPhoneCodes[key]}
          </option>
        ))}
    </Select>
  );
};

export const CountriesSelect = (props): ReactElement => {
  const { t } = useTranslation();

  return (
    <Select {...props} native label={t('user:reg_country')} input={<CssInput />}>
      {!!props.empty && <option key="empty-conutry" value="" />}

      {Object.keys(countryNames)
        .sort()
        .map((key) => (
          <option key={key} value={key}>
            {countryNames[key]}
          </option>
        ))}
    </Select>
  );
};
