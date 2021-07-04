import { DocumentNode, gql } from '@apollo/client';

const resetPasswordMutation: DocumentNode = gql`
  mutation ResetPassword($user: UserResetPasswordDto!) {
    resetPassword(user: $user) {
      isSuccessful
    }
  }
`;

export default resetPasswordMutation;
