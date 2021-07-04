import { DocumentNode, gql } from '@apollo/client';

export const productsFilteredQuery: DocumentNode = gql`
  query productsFiltered($query: SearchQueryParameterDto!, $locations: [String!]) {
    productsFiltered(query: $query, locations: $locations) {
      filteredProducts {
        id
        serialNumber
        productionYear
        location {
          id
          name
          city
          street
        }
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
          isFlexcavo
        }
      }
      totalCount
    }
  }
`;
