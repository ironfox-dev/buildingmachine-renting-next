import { DocumentNode, gql } from '@apollo/client';

export const documentsQuery: DocumentNode = gql`
  query loadLecturaData($productId: ID!) {
    loadLecturaData(productId: $productId) {
      model {
        id
        modelName
        dataSheetCnt
        firstYear
        lastYear
        inProduction
        standardEquipment

        manufacturer {
          id
          logoFile
          name
        }
        category {
          name
        }
        defaultImg {
          source
          url
        }
        images {
          source
          url
        }
        specs {
          name
          value
          unit
        }
        dataSheets {
          region
          url
          language
          type
        }
      }

      regressor {
        data {
          id
          price
          currency
          operating_hours
          found_on_year
          serial_number
          country
          age_in_months
        }

        curves {
          observation
          name
          quality
          points {
            age
            prediction
            lowCI
            highCI
          }
        }
      }
    }
  }
`;
