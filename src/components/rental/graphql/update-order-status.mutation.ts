import { DocumentNode, gql } from '@apollo/client';

const OrderStatusUpdateMutation: DocumentNode = gql`
  mutation orderStatusUpdate($orderStatusUpdateInput: OrderStatusUpdateDto!) {
    orderStatusUpdate(orderStatusUpdateInput: $orderStatusUpdateInput) {
      id
    }
  }
`;

export default OrderStatusUpdateMutation;
