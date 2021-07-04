import { DocumentNode, gql } from '@apollo/client';

const loginMutation: DocumentNode = gql`
  mutation Login($user: UserLoginDto!) {
    loginUser(user: $user) {
      token
      email
      isEmailVerified
      id
    }
  }
`;

export default loginMutation;
