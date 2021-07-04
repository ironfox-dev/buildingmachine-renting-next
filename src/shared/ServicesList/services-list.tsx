import React, { ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { get } from 'lodash';
import * as Yup from 'yup';

import ProductInput from '~/components/product/ProductInput/product-input';
import { ServicesListProps } from '../interfaces';

const ServicesValidation = ({ message, required }: { message: string; required: string }): boolean => {
  return Yup.array().of(
    Yup.object().shape({
      checked: Yup.bool(),
      price: Yup.mixed().when('checked', {
        is: true,
        then: Yup.number().min(0, message).typeError(message).required(required),
      }),
    })
  );
};

const ServicesList = memo(
  (props: ServicesListProps): ReactElement => {
    const { t } = useTranslation();

    const pricingStructure = {
      fixed: t('common:fixedPrice'),
      hourly: t('common:priceHourly'),
      daily: t('common:priceDaily'),
    };

    return (
      <Box display="flex" alignItems="center" mb={2}>
        <Box width={4 / 8}>
          <FormControlLabel
            label={props.service.name}
            control={
              <Checkbox
                disabled={props.service.default}
                checked={props.service.checked}
                name={props.service.name}
                onChange={props.onCheckboxChange}
                color="primary"
              />
            }
          />
        </Box>
        <Box width={4 / 8} px={2}>
          <ProductInput
            {...props}
            name={props.service.name}
            value={props.service.price}
            label={pricingStructure[props.service.pricingStructure]}
            handleChange={(event): void => props.onInputChange(event)}
            error={Boolean(get(props.errors, ['services', props.index, 'price']))}
            helperText={get(props.errors, ['services', props.index, 'price'])}
            disabled={typeof props.disableInput !== 'undefined' ? props.disableInput : !props.service.checked}
            InputProps={{
              startAdornment: <InputAdornment position="start">&euro;</InputAdornment>,
            }}
            isNumber
          />
        </Box>
      </Box>
    );
  }
);

ServicesList.displayName = 'ServicesList';

export { ServicesList, ServicesValidation };
