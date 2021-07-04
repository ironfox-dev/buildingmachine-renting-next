import { gql } from '@apollo/client';

const UPDATE_SERVICE_MUTATION = gql`
  mutation UpdateServiceTemplate($id: ID!, $serviceTemplateInput: ServiceTemplateUpdateDto!) {
    updateServiceTemplate(id: $id, serviceTemplateDto: $serviceTemplateInput) {
      id
    }
  }
`;

export default UPDATE_SERVICE_MUTATION;
