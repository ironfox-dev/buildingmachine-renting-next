import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';

import Service from './services/list';
import GeneralSettings from './generalSettings/general';
import DiscountCodes from './discountCodes/discountCodes';
import { Tabbable } from '~/shared/index';

const Settings = (): ReactElement => (
  <Box m={2}>
    <Tabbable
      defaultTab="general"
      items={[
        {
          key: 'general',
          label: 'General',
          children: <GeneralSettings />,
        },
        {
          key: 'global-booking-time',
          label: 'Global Booking Time',
          children: <h3>Global Booking Time</h3>,
        },
        {
          key: 'services',
          label: 'Services',
          children: <Service />,
        },
        {
          key: 'discount-codes',
          label: 'Discount Codes',
          children: <DiscountCodes />,
        },
      ]}
    />
  </Box>
);

export default Settings;
