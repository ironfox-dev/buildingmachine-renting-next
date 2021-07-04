import { DocumentNode, gql } from '@apollo/client';

const productAttachments: DocumentNode = gql`
  query ProductAttachments($id: ID!) {
    product(id: $id) {
      id
      productModel {
        name
        attributes
        key
        type {
          name
        }
        manufacturer {
          name
          abbreviation
        }
        productModelBundles {
          id
          name
          attributes
          type {
            name
          }
          manufacturer {
            name
            abbreviation
          }
          products {
            id
            priceDaily
            priceWeekly
            priceMonthly
            location {
              id
            }
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
      location {
        id
        name
        operatingHour {
          startTime
          endTime
          weekDay
        }
      }
    }
  }
`;

export default productAttachments;
