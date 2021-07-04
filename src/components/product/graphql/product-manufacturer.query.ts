import { DocumentNode, gql } from '@apollo/client';

const productManufacturerQuery: DocumentNode = gql`
  query productManufacturers($search: String!) {
    productManufacturers(search: $search) {
      id
      name
      abbreviation
    }
  }
`;

export default productManufacturerQuery;
