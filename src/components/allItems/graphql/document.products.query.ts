import { DocumentNode, gql } from '@apollo/client';

export const documentsQuery: DocumentNode = gql`
  query documentProducts($query: DocumentProductQueryDto!) {
    documentProducts(query: $query) {
      id
      name
      uploadedAt
      extension
      path
      location
      documentCategory {
        id
        key
      }
    }
  }
`;
