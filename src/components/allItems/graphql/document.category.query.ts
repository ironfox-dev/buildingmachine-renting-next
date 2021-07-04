import { DocumentNode, gql } from '@apollo/client';

export const categoriesQuery: DocumentNode = gql`
  query DocumentCategory {
    documentCategory {
      id
      key
    }
  }
`;
