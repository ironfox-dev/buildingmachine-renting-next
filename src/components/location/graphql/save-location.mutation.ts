import { DocumentNode, gql } from '@apollo/client';

export const saveLocationMutation: DocumentNode = gql`
  mutation SaveLocation($locationInput: LocationCreateDto!, $operatingHourInput: [OperatingHoursCreateDto!]!) {
    saveLocation(locationInput: $locationInput, operatingHourInput: $operatingHourInput) {
      id
      operatingHour {
        weekDay
        startTime
        endTime
      }
    }
  }
`;
