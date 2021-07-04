import { useOrderQuery, useOrderStatusUpdateMutation } from '~/graphql/graphql';
import { useSnackbar } from '~/shared/index';
import { RentalDetailHoc } from '../interfaces/interfaces';

const allowedOrderStatuses = {
  reserved: ['delivered', 'cancelled'],
  delivered: ['returned'],
  cancelled: ['returned'],
  returned: [],
};

const useRentalDetailHoc = (orderId: string): RentalDetailHoc => {
  const { Snackbar, showSnackbar } = useSnackbar();

  const [orderStatusUpdateMutation] = useOrderStatusUpdateMutation();
  const { loading: isLoading, data: orderQuery } = useOrderQuery({
    skip: !orderId,
    variables: {
      id: orderId,
    },
  });

  const order = orderQuery?.order;

  const orderStatusUpdate = async (status: string) => {
    const allowedStatuses: string[] = allowedOrderStatuses[order?.status];
    const isAllowed = allowedStatuses.includes(status);

    if (isAllowed) {
      await orderStatusUpdateMutation({
        variables: {
          orderStatusUpdateInput: {
            orderId,
            status,
          },
        },
        refetchQueries: ['Order'],
      });
      showSnackbar('success', 'Order Status Updated Successfully');
    } else {
      showSnackbar('error', `Order Status "${status}" Not Allowed`);
    }
  };

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    order,
    isLoading,
    orderStatusUpdate,
    Snackbar,
  };
};

export default useRentalDetailHoc;
