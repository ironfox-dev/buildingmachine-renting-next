import { DocumentNode, gql } from '@apollo/client';

export const ProductBglData: DocumentNode = gql`
  query GetProductBglData($productId: ID!) {
    productBglData(productId: $productId) {
      id
      bglNumberType
      bglData {
        id
        bglNumber
        shortName
        version
        description
        parameters
        values
      }
    }
  }
`;
