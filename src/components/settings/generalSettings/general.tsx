import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import generalSettingsStyle from './general.style';
import { useTranslation } from 'react-i18next';
import CustomSelectBox from './custom-select';
import { SettingItem, Settings } from './interfaces/general.interface';
import currencyList from '~/constants/currency';
import { pricingStruncture } from '~/constants/taxes';

const settings: SettingItem[] = [
  {
    name: 'currency',
    options: currencyList,
  },
  {
    name: 'tax',
    options: pricingStruncture,
  },
];

const useSettingsStyle = makeStyles(generalSettingsStyle);
const GeneralSettings = (): React.ReactElement => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [savedSettings, setSavedSettings] = useState<Settings>({
    currency: 'Euro',
    tax: 16,
  });
  const [settingsStatu, setSettingsStatu] = useState<Settings>({
    currency: savedSettings.currency,
    tax: savedSettings.tax,
  });

  const generalSettingStyle = useSettingsStyle();
  const { t } = useTranslation();

  const onHandleChange = (name: string, value: any) => {
    setSettingsStatu({ ...settingsStatu, [name]: value });
  };

  useEffect(() => {
    if (settingsStatu.currency !== savedSettings.currency || settingsStatu.tax !== savedSettings.tax) {
      setIsUpdate(true);
    } else setIsUpdate(false);
  }, [settingsStatu, savedSettings]);

  return (
    <div>
      <Grid container direction="row" justify="flex-end">
        <Button
          variant="contained"
          color="primary"
          disabled={!isUpdate}
          onClick={() => {
            isUpdate ? setSavedSettings(settingsStatu) : null;
          }}
        >
          Update
        </Button>
      </Grid>
      <Box className={generalSettingStyle.container}>
        <Typography variant="h1" className={generalSettingStyle.headerTitle}>
          {t('settings:currency_and_taxes')}
        </Typography>
        <Grid container direction="row" alignItems="center" spacing={2}>
          {settings.map((setting: SettingItem, i: number) => (
            <Grid item xs={6} md={4} sm={12} key={i}>
              <CustomSelectBox
                value={settingsStatu[setting.name]}
                settingName={setting.name}
                options={setting.options}
                onChange={onHandleChange}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default GeneralSettings;
