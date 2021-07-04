import { DocumentNode, gql } from '@apollo/client';

const locationsQuery: DocumentNode = gql`
  query LocationsList {
    locations {
      id
      city
      dieselPrice
      gasolinePrice
      name
      postalCode
      street
      telephone
    }
  }
`;

export default locationsQuery;
