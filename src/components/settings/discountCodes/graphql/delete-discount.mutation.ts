import { DocumentNode, gql } from '@apollo/client';

const deleteDiscountMutation: DocumentNode = gql`
  mutation deleteDiscount($discountId: ID!) {
    deleteDiscount(discountId: $discountId) {
      isSuccessful
    }
  }
`;

export default deleteDiscountMutation;
