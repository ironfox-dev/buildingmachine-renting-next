import { DocumentNode, gql } from '@apollo/client';

const validateDiscountCodeMutation: DocumentNode = gql`
  mutation ValidateDiscountCode($discountCode: String!) {
    validateDiscountCode(discountCode: $discountCode) {
      id
      type
      code
      value
      currency
      isActive
    }
  }
`;

export default validateDiscountCodeMutation;
