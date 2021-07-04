import { DocumentNode, gql } from '@apollo/client';

export const createProductServicesMutation: DocumentNode = gql`
  mutation createProductServices($productId: String!, $productServices: [ProductServiceDto!]!) {
    createProductServices(productId: $productId, productServices: $productServices) {
      id
    }
  }
`;
