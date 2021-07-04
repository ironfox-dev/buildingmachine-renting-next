import { DocumentNode, gql } from '@apollo/client';

const productOwnersQuery: DocumentNode = gql`
  query ProductOwners {
    productOwners {
      id
      name
      isFlexcavo
    }
  }
`;

export default productOwnersQuery;
