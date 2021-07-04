import { DocumentNode, gql } from '@apollo/client';

const resendVerificationEmailMutation: DocumentNode = gql`
  mutation ResendVerificationEmail($email: String!) {
    resendVerificationEmail(email: $email) {
      alreadyVerified
      emailSent
    }
  }
`;

export default resendVerificationEmailMutation;
