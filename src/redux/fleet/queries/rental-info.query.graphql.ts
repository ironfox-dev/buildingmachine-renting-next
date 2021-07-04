import { DocumentNode, gql } from '@apollo/client';

const productRentalInfoQuery: DocumentNode = gql`
  query RentalInfo($id: ID!) {
    product(id: $id) {
      id
      priceDaily
      priceWeekly
      priceMonthly
      productModel {
        productModelBundles {
          id
          name
          type {
            id
            name
          }
          manufacturer {
            id
            name
          }
        }
        modelLeadTime
      }
      services {
        id
        price
        serviceTemplate {
          id
          name
          description
          pricingStructure
        }
      }
      productLeadTime
      serviceTime
      calculateWeekend
    }
  }
`;

export default productRentalInfoQuery;
