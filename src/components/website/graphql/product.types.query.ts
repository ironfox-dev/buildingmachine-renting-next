import { DocumentNode, gql } from '@apollo/client';

const productTypesQuery: DocumentNode = gql`
  query ProductTypes(
    $productTypeId: ID
    $productModelId: ID
    $locationId: ID
    $ownerId: ID
    $startTime: DateTime
    $endTime: DateTime
  ) {
    productTypes(productTypeId: $productTypeId) {
      id
      name
      productModel(productModelId: $productModelId) {
        id
        name
        attributes
        key
        hasVin
        manufacturer {
          name
          abbreviation
        }
        products(locationId: $locationId, ownerId: $ownerId, startTime: $startTime, endTime: $endTime) {
          id
          serialNumber
          priceMonthly
          location {
            id
            name
          }
        }
      }
    }
  }
`;

export default productTypesQuery;
