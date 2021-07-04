import { DocumentNode, gql } from '@apollo/client';

const requestResetPasswordMutation: DocumentNode = gql`
  mutation RequestResetPassword($email: String!) {
    requestResetPassword(email: $email) {
      isSuccessful
    }
  }
`;

export default requestResetPasswordMutation;
