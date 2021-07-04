import { DocumentNode, gql } from '@apollo/client';

export const deleteDocumentMutation: DocumentNode = gql`
  mutation deleteDocumentProduct($productId: String!, $documentId: String!) {
    deleteDocumentProduct(productId: $productId, documentId: $documentId) {
      id
    }
  }
`;
