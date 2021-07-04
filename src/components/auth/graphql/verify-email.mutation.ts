import { DocumentNode, gql } from '@apollo/client';

const verifyEmailMutation: DocumentNode = gql`
  mutation VerifyEmail($token: String!) {
    verifyEmail(token: $token) {
      isSuccessful
    }
  }
`;

export default verifyEmailMutation;
