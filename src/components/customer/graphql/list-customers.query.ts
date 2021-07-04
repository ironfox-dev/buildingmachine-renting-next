import { DocumentNode, gql } from '@apollo/client';

const listCustomersQuery: DocumentNode = gql`
  query listCustomers {
    listCustomers {
      id
      name
      users {
        email
        firstname
        lastname
        isEmailVerified
      }
      addresses {
        street
        city
        postalCode
      }
    }
  }
`;

export default listCustomersQuery;
