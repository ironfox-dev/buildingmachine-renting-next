import { DocumentNode, gql } from '@apollo/client';

const getAccountQuery: DocumentNode = gql`
  query AccountInfo {
    getAccount {
      id
      name
      users {
        id
        email
        firstname
        lastname
        position
        gender
        phone
        phoneCode
      }
      addresses {
        id
        street
        city
        postalCode
        country
      }
    }
  }
`;

export default getAccountQuery;
