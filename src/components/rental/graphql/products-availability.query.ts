import { DocumentNode, gql } from '@apollo/client';

const ProductsAvailabilityCalendar: DocumentNode = gql`
  query ProductsAvailabilityCalendar($startMonth: DateTime!, $endMonth: DateTime!, $productIds: [ID!]!) {
    productsAvailabilityCalendar(productIds: $productIds, startMonth: $startMonth, endMonth: $endMonth) {
      productId
      days {
        date
        slots {
          start
          end
        }
        type
      }
    }
  }
`;

export default ProductsAvailabilityCalendar;
