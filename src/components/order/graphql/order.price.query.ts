import { DocumentNode, gql } from '@apollo/client';

const orderPriceQuery: DocumentNode = gql`
  query OrderPrice(
    $productId: ID!
    $attachmentIds: [ID!]
    $serviceIds: [ID!]
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    orderPrice(
      productId: $productId
      attachmentIds: $attachmentIds
      serviceIds: $serviceIds
      startDate: $startDate
      endDate: $endDate
    ) {
      days
      businessDays
      orderPrice
      orderSubTotal
      orderVat
      productPrice {
        id
        pricePerDay
        totalPrice
      }
      attachmentsPrices {
        id
        pricePerDay
        totalPrice
      }
      servicesPrices {
        id
        price
        pricingStructure
        totalPrice
      }
    }
  }
`;

export default orderPriceQuery;
