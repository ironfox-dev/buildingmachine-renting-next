import { DocumentNode, gql } from '@apollo/client';

const productModelByFilterQuery: DocumentNode = gql`
  query ProductModelByFilter(
    $filter: ProductModelFilterDto!
    $locationId: ID
    $ownerId: ID
    $startTime: DateTime
    $endTime: DateTime
  ) {
    productModels(filter: $filter) {
      id
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
      products(locationId: $locationId, ownerId: $ownerId, startTime: $startTime, endTime: $endTime) {
        id
        serialNumber
        priceMonthly
        priceWeekly
        priceDaily
        location {
          id
          name
        }
      }
      documents {
        id
        name
        extension
        mimeType
        path
        location
        documentCategory {
          id
          key
        }
      }
    }
  }
`;

export default productModelByFilterQuery;
