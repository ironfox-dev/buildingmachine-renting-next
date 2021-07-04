import { DocumentNode, gql } from '@apollo/client';

const productFragment: DocumentNode = gql`
  fragment product on ProductModel {
    id
    serialNumber
    productionYear
    productModel {
      name
      type {
        name
      }
      manufacturer {
        name
        abbreviation
      }
    }
    productOwner {
      name
    }
  }
`;

export default productFragment;
