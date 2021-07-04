import { DocumentNode, gql } from '@apollo/client';

const createProductModelMutation: DocumentNode = gql`
  mutation createProductModel($productModel: ProductModelDto!) {
    createProductModel(productModel: $productModel) {
      id
    }
  }
`;

export default createProductModelMutation;
