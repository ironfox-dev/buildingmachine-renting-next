import { gql } from '@apollo/client';

const ServiceTemplatesQuery = gql`
  query ServiceTemplates {
    serviceTemplates {
      id
      name
      pricingStructure
      default
      description
      includingWeekend
    }
  }
`;

export default ServiceTemplatesQuery;
