import React, { ReactElement, memo } from 'react';
import Box from '@material-ui/core/Box';

import { ProductFormProps } from '../../interfaces/interfaces';
import { ServicesList } from '~/shared/index';

const Services = (props: ProductFormProps): ReactElement => {
  return (
    <Box flexDirection="column" width={6 / 8}>
      {props?.values.services.map((service, index) => (
        <ServicesList
          {...props}
          key={index}
          index={index}
          service={service}
          onCheckboxChange={() => {
            props.setFieldValue(`services[${index}].checked`, !service.checked);
          }}
          onInputChange={(event) => {
            props.setFieldValue(`services[${index}].price`, event.target.value);
          }}
        />
      ))}
    </Box>
  );
};

export default memo(Services);
