import { DocumentNode, gql } from '@apollo/client';

const ExtendOrderPriceQuery: DocumentNode = gql`
  query extendedOrderPrice($orderId: ID!, $productId: ID!, $startDate: DateTime!, $endDate: DateTime!) {
    extendedOrderPrice(orderId: $orderId, productId: $productId, startDate: $startDate, endDate: $endDate) {
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

export default ExtendOrderPriceQuery;
