import { createSelector } from 'reselect';
import { RentalInfoState } from '../slices/rental-info.slice';

export const getRentalInfo = createSelector(
  (state: RentalInfoState) => state.rentalInfo,
  (values) => values
);
