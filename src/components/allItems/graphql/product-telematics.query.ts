import { DocumentNode, gql } from '@apollo/client';

export const productDetailQuery: DocumentNode = gql`
  query ProductTracking($productId: ID!, $startDate: String, $endDate: String) {
    productTracking(productId: $productId, startDate: $startDate, endDate: $endDate) {
      id
      unitSerialNumber
      last24Hours

      product {
        id
        productModel {
          id
          name
          type {
            name
          }
        }
        operatingHours
        idleHours
        locationLatitude
        locationLongitude
        locationTimestamp
        locationFormattedAddress
        unitInfo
        unitExtendedInfo
      }
      workingHours {
        idleHours
        operatingHours
        date
      }
    }
  }
`;
