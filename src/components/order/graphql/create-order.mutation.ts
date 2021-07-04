import { DocumentNode, gql } from '@apollo/client';

const createOrderMutation: DocumentNode = gql`
  mutation CreateOrder($order: SalesOrderDto!) {
    createOrder(order: $order) {
      id
    }
  }
`;

export default createOrderMutation;
