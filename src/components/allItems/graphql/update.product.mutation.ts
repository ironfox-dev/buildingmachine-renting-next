import { DocumentNode, gql } from '@apollo/client';

export const updateProductMutation: DocumentNode = gql`
  mutation updateProduct($id: String!, $product: ProductUpdateDto!) {
    updateProduct(id: $id, product: $product) {
      ...productInformation
    }
  }
`;
