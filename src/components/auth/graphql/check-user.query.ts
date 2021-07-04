import { DocumentNode, gql } from '@apollo/client';

const checkUserQuery: DocumentNode = gql`
  query CheckUser {
    checkUser {
      email
      isEmailVerified
    }
  }
`;

export default checkUserQuery;
