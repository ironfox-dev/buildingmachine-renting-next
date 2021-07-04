import { DocumentNode, gql } from '@apollo/client';

export const deleteProductServiceMutation: DocumentNode = gql`
  mutation deleteProductService($id: String!) {
    deleteProductService(id: $id) {
      id
    }
  }
`;
