import { DocumentNode, gql } from '@apollo/client';

export const updateLocationMutation: DocumentNode = gql`
  mutation UpdateLocation(
    $id: ID!
    $locationInput: LocationCreateDto!
    $operatingHourInput: [OperatingHoursCreateDto!]!
  ) {
    updateLocation(id: $id, locationInput: $locationInput, operatingHourInput: $operatingHourInput) {
      id
      operatingHour {
        weekDay
        startTime
        endTime
      }
    }
  }
`;
