import { DocumentNode, gql } from '@apollo/client';

const updateAccountMutation: DocumentNode = gql`
  mutation updateAccount($account: AccountUpdateDto!) {
    updateAccount(account: $account) {
      isSuccessful
    }
  }
`;

export default updateAccountMutation;
