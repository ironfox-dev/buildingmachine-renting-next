import { DocumentNode, gql } from '@apollo/client';

export const locationQuery: DocumentNode = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      city
      dieselPrice
      gasolinePrice
      name
      operatingHour {
        id
        weekDay
        startTime
        endTime
      }
      postalCode
      street
      telephone
    }
  }
`;
