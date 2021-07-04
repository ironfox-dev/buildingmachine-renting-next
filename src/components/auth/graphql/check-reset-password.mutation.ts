import { DocumentNode, gql } from '@apollo/client';

const verifyResetPasswordMutation: DocumentNode = gql`
  mutation VerifyResetPassword($token: String!) {
    verifyResetPassword(token: $token) {
      isSuccessful
    }
  }
`;

export default verifyResetPasswordMutation;
