import { DocumentNode, gql } from '@apollo/client';

const productModelsQuery: DocumentNode = gql`
  query ProductModels {
    productModels {
      id
      name
      hasVin
      attributes
      lecturaModel
      lecturaId
      documents {
        id
        name
        extension
        mimeType
        path
        location
        documentCategory {
          key
        }
      }
      manufacturer {
        id
        name
        abbreviation
      }
      type {
        id
        name
        attributes {
          id
          key
          name
          isRequired
          type
          unit
          minValue
          maxValue
          maxLength
        }
      }
      productModelBundles {
        id
        name
        manufacturer {
          id
          name
        }
        type {
          id
          name
        }
      }
    }
  }
`;

export default productModelsQuery;
