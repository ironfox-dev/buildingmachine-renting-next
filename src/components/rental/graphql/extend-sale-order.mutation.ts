import { DocumentNode, gql } from '@apollo/client';

const ExtendSaleOrderMutation: DocumentNode = gql`
  mutation ExtendOrderPeriod($order: ExtendSaleOrderDto!) {
    extendOrderPeriod(order: $order) {
      id
    }
  }
`;

export default ExtendSaleOrderMutation;
