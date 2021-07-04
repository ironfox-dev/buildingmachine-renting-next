import { DocumentNode, gql } from '@apollo/client';

const productsQuery: DocumentNode = gql`
  query Products {
    products {
      id
      serialNumber
      productionYear
      productModel {
        lecturaId
        lecturaModel
        name
        key
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
        isFlexcavo
      }
    }
  }
`;

export default productsQuery;
