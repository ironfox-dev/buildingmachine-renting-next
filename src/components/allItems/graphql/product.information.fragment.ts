import { DocumentNode, gql } from '@apollo/client';

const productInformationFragment: DocumentNode = gql`
  fragment productInformation on ProductModel {
    id
    serialNumber
    productionYear
    priceDaily
    priceWeekly
    priceMonthly
    productModel {
      name
      attributes
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
  }
`;

export default productInformationFragment;
