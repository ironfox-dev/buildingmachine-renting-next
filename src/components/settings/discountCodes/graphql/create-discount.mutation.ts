import { DocumentNode, gql } from '@apollo/client';

const createDiscountMutation: DocumentNode = gql`
  mutation createDiscount($discount: DiscountCreateDto!) {
    createDiscount(discount: $discount) {
      id
      code
      type
      value
      currency
      isActive
    }
  }
`;

export default createDiscountMutation;
