import { DocumentNode, gql } from '@apollo/client';

const registrationMutation: DocumentNode = gql`
  mutation Registration($user: UserCreateDto!) {
    createUser(user: $user) {
      email
    }
  }
`;

export default registrationMutation;
