import { DocumentNode, gql } from '@apollo/client';

export const orderDetailQuery: DocumentNode = gql`
  query Order($id: ID!) {
    order(id: $id) {
      id
      firstName
      lastName
      email
      companyName
      orderId
      location
      price
      subTotal
      vat
      channel
      startDate
      endDate
      deliveryMethod
      status
      salesOrderItems {
        id
        days
        pricePerDay
        productModel
        productType
        productManufacturer
        totalPrice
        pricePerDay
        salesOrderItemServices {
          id
          serviceName
          price
          totalPrice
          pricingStructure
          productServiceId
        }

        product {
          id
          services {
            id
            price

            serviceTemplate {
              id
              name
              pricingStructure
              default
            }
          }

          productModel {
            id
            attributes
            name
            manufacturer {
              id
              name
              abbreviation
            }

            type {
              name
            }
          }

          location {
            id
            name
            operatingHour {
              startTime
              endTime
              weekDay
            }
          }
        }
        parentSalesOrderItem {
          id
        }
      }
      salesOrderAddresses {
        id
        address
        city
        type
      }
    }
  }
`;
