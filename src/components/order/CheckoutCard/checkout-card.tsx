import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import useSharedStyles from '../styles/styles';
import { CheckoutCardProps } from '../interfaces/interfaces';
import MachineInfo from '~/components/order/MachineInfo/machine-info';

const CheckoutCard = ({ productModel, children }: CheckoutCardProps): React.ReactElement => {
  const sharedClasses = useSharedStyles();

  return (
    <Card raised className={sharedClasses.rightCard}>
      <CardContent>
        <MachineInfo productModel={productModel} />
        {children}
      </CardContent>
    </Card>
  );
};

export default CheckoutCard;
