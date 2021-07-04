import { DocumentNode, gql } from '@apollo/client';

const updateDiscountStatusMutation: DocumentNode = gql`
  mutation updateDiscountStatus($discountId: ID!, $isActive: Boolean!) {
    updateDiscountStatus(discountId: $discountId, isActive: $isActive) {
      isSuccessful
    }
  }
`;

export default updateDiscountStatusMutation;
