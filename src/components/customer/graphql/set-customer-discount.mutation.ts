import { DocumentNode, gql } from '@apollo/client';

const setCustomerDiscountMutation: DocumentNode = gql`
  mutation setCustomerDiscount($discountData: DiscountUpdateDto!) {
    setCustomerDiscount(discountData: $discountData) {
      discount
    }
  }
`;

export default setCustomerDiscountMutation;
