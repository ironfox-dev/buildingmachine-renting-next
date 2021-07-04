import { DocumentNode, gql } from '@apollo/client';

const SAVE_SERVICE_MUTATION: DocumentNode = gql`
  mutation SaveServiceTemplate($serviceTemplateInput: ServiceTemplateCreateDto!) {
    createServiceTemplate(serviceTemplateDto: $serviceTemplateInput) {
      id
    }
  }
`;

export default SAVE_SERVICE_MUTATION;
