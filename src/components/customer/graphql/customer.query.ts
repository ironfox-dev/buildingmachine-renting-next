import { DocumentNode, gql } from '@apollo/client';

const customerQuery: DocumentNode = gql`
  query customer($id: ID!) {
    customer(id: $id) {
      id
      name
      discount
      users {
        id
        email
        firstname
        lastname
        isEmailVerified
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

export default customerQuery;
