import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'rentalInfo',
  initialState: {
    current: {},
  },
  reducers: {
    storeInfo: (info, action) => {
      info.current = action.payload;
    },
    removeInfo: (location) => {
      location.current = {};
    },
  },
});

export interface RentalInfoState {
  [slice.name];
}

export default slice.reducer;
export const { storeInfo, removeInfo } = slice.actions;
