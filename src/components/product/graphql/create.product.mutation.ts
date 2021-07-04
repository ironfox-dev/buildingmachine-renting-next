import { DocumentNode, gql } from '@apollo/client';

const createProductMutation: DocumentNode = gql`
  mutation CreateProduct($product: ProductDto!, $productServices: [ProductServiceDto!]!) {
    createProduct(product: $product, productServices: $productServices) {
      id
    }
  }
`;

export default createProductMutation;
