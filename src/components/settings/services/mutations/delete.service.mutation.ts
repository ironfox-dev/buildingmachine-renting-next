import { gql } from '@apollo/client';

const DELETE_SERVICE_MUTATION = gql`
  mutation deleteServiceTemplate($id: ID!) {
    deleteServiceTemplate(id: $id)
  }
`;

export default DELETE_SERVICE_MUTATION;
