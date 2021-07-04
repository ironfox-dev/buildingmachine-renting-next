import { DocumentNode, gql } from '@apollo/client';

export const updateProductServiceMutation: DocumentNode = gql`
  mutation updateProductService($id: String!, $service: ServiceUpdateDto!) {
    updateProductService(id: $id, service: $service) {
      id
    }
  }
`;
