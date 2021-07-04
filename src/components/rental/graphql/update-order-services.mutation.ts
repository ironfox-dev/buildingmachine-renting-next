import { DocumentNode, gql } from '@apollo/client';

const UpdateOrderItemServiceMutation: DocumentNode = gql`
  mutation UpdateOrderItemServices($orderId: ID!, $productId: ID!, $services: [UpdateOrderItemServicesDto!]!) {
    updateOrderServices(orderId: $orderId, productId: $productId, services: $services) {
      id
      price
    }
  }
`;

export default UpdateOrderItemServiceMutation;
