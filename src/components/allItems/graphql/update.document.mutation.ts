import { DocumentNode, gql } from '@apollo/client';

export const updateDocumentMutation: DocumentNode = gql`
  mutation updateDocument($id: String!, $documentProduct: DocumentProductUpdateDto!) {
    updateDocumentProduct(id: $id, documentProduct: $documentProduct) {
      id
      name
    }
  }
`;
