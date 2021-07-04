import { DocumentNode, gql } from '@apollo/client';

export const productsAvailabilityQuery: DocumentNode = gql`
  query productsAvailability($fromDate: DateTime!) {
    products {
      id
      availability(fromDate: $fromDate) {
        status
        nextAvailableDate
        nextReservationStart
      }
    }
  }
`;
