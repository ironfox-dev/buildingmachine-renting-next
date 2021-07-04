import { DocumentNode, gql } from '@apollo/client';

const productOwnerFragment: DocumentNode = gql`
  fragment productOwner on ProductOwnerModel {
    id
    name
    isFlexcavo
  }
`;

export default productOwnerFragment;
