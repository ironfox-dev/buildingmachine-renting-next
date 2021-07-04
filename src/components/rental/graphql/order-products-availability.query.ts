import { DocumentNode, gql } from '@apollo/client';

const OrderProductsAvailabilityCalendar: DocumentNode = gql`
  query orderProductsAvailabilityCalendar(
    $endMonth: DateTime!
    $orderEndDate: DateTime!
    $productIds: [ID!]!
    $startMonth: DateTime!
  ) {
    orderProductsAvailabilityCalendar(
      productIds: $productIds
      startMonth: $startMonth
      endMonth: $endMonth
      orderEndDate: $orderEndDate
    ) {
      date
      isAvailable
    }
  }
`;

export default OrderProductsAvailabilityCalendar;
