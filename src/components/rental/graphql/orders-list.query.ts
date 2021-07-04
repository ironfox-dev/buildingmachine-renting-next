import { DocumentNode, gql } from '@apollo/client';

export const ordersListQuery: DocumentNode = gql`
  query Orders($filters: SalesOrderQueryFiltersDto, $searchText: String, $skip: Float, $take: Float) {
    orders(filters: $filters, searchText: $searchText, skip: $skip, take: $take) {
      id
      firstName
      lastName
      orderId
      location
      price
      channel
      startDate
      endDate
      status
      salesOrderAddresses {
        id
        address
        city
        type
      }

      salesOrderItems {
        productModel
        productType
        productManufacturer
        parentSalesOrderItem {
          id
        }
      }
    }
  }
`;
