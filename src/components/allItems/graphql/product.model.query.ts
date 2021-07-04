import { DocumentNode, gql } from '@apollo/client';

export const productsModels: DocumentNode = gql`
  query productsModels($id: ID!, $fromDate: DateTime!) {
    product(id: $id) {
      productModel {
        name
        type {
          name
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
      availability(fromDate: $fromDate) {
        status
        nextReservationStart
        nextAvailableDate
      }
    }
  }
`;
