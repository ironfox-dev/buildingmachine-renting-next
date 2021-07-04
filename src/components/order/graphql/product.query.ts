import { DocumentNode, gql } from '@apollo/client';

const productQuery: DocumentNode = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      serialNumber
      productionYear
      priceDaily
      priceWeekly
      priceMonthly
      productModel {
        lecturaId
        lecturaModel
        name
        attributes
        key
        type {
          name
          attributes {
            key
            unit
          }
        }
        manufacturer {
          name
          abbreviation
        }
      }
      productOwner {
        name
        isFlexcavo
      }
      location {
        id
        name
        street
        city
      }
      purchasePrice
      deposit
      leasingRate
      interest
      residualValue
      instruction
      workClothing
      notes
      unitSerialNumber
    }
  }
`;

export default productQuery;
