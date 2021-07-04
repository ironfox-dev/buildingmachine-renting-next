import { DocumentNode, gql } from '@apollo/client';

export const deleteProductServicesMutation: DocumentNode = gql`
  mutation deleteProductServices($ids: [String!]!) {
    deleteProductServices(ids: $ids)
  }
`;
