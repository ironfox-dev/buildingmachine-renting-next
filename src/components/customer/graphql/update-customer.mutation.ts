import { DocumentNode, gql } from '@apollo/client';

const updateCustomerMutation: DocumentNode = gql`
  mutation updateCustomer($customer: CustomerUpdateDto!) {
    updateCustomer(customer: $customer) {
      isSuccessful
    }
  }
`;

export default updateCustomerMutation;
