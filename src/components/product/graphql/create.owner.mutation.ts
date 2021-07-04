import { DocumentNode, gql } from '@apollo/client';

const createOwnerMutation: DocumentNode = gql`
  mutation CreateOwner($owner: ProductOwnerDto!) {
    createOwner(owner: $owner) {
      id
      name
    }
  }
`;

export default createOwnerMutation;
