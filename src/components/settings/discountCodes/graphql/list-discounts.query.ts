import { DocumentNode, gql } from '@apollo/client';

const listDiscountsQuery: DocumentNode = gql`
  query listDiscounts {
    listDiscounts {
      id
      code
      type
      value
      currency
      isActive
    }
  }
`;

export default listDiscountsQuery;
